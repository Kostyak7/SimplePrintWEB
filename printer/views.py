import os
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, FileResponse
from .models import Printers
from printform.views import validate_code
from printform.models import FileForPrint


def check_printer(username, password):
    if username is not str and password is not str:
        return False
    printer = Printers.objects.get(username=username)
    if not printer:
        return False
    return printer.password == password


@csrf_exempt
def get_file_to_print(request):
    result = False
    if request.method == 'GET':
        result = check_printer(request.GET.get('username', None), request.GET.get('username', None)) \
                and validate_code(request.GET.get('code', None))
    return JsonResponse({"success": result})


@csrf_exempt
def check_code(request):
    if request.method == 'GET':
        code = request.GET.get('code', None)
        if check_printer(request.GET.get('username', None), request.GET.get('username', None)) \
                and validate_code(code):
            return FileResponse(open(FileForPrint.objects.get(code=code), 'rb'))
    return JsonResponse({"success": False})
