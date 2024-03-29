import os
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse, FileResponse
from .models import Printers
from printform.views import validate_code
from printform.models import FileForPrint

from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from rest_framework.views import APIView


def check_printer(username, password):
    if username is None or password is None:
        return False
    printer = Printers.objects.get(username=username)
    if not printer:
        return False
    print("Got: ", password)
    print("Real: ", printer.password)
    return printer.password == password


@csrf_exempt
def send_file_to_print(request):
    print(request.GET)
    if request.method == 'GET':
        code = request.GET.get('code', None)
        if check_printer(request.GET.get('username', None), request.GET.get('password', None)) \
                and validate_code(code):
            file = FileForPrint.objects.get(code_for_print=code)
            if file and os.path.exists(FileForPrint.file_path + '/' + file.filename) and \
                    os.path.isfile(FileForPrint.file_path + '/' + file.filename):
                return FileResponse(open(FileForPrint.file_path + '/' + file.filename, 'rb'))
    return JsonResponse({"success": False})


@csrf_exempt
def send_file_info(request):
    print(request.GET)
    if request.method == 'GET':
        code = request.GET.get('code', None)
        if check_printer(request.GET.get('username', None), request.GET.get('password', None)) \
                and validate_code(code):
            file = FileForPrint.objects.get(code_for_print=code)
            if file and os.path.exists(FileForPrint.file_path + '/' + file.filename) and \
                    os.path.isfile(FileForPrint.file_path + '/' + file.filename):
                filename, file_extension = os.path.splitext(file.filename)
                return JsonResponse({"success": True,
                                     "filename": filename, "extension": file_extension,
                                     "color": file.color, "amount": file.amount, "format": file.format})
    return JsonResponse({"success": False})


@csrf_exempt
def file_printed(request):
    print(request.GET)
    if request.method == 'GET':
        code = request.GET.get('code', None)
        if check_printer(request.GET.get('username', None), request.GET.get('password', None)) \
                and validate_code(code):
            file = FileForPrint.objects.get(code_for_print=code)
            file.print_state = True
            file.save()
    return JsonResponse({"success": True})


class PullSendAPIView(APIView):
    def post(self, request):
        print('Inside request')
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "sprinter-id-0001", {"type": "send_to",
                                 "text": "Pull from Django socket"}
        )
        return JsonResponse({"success": True})

