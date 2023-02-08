from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .forms import UploadFileForm
from .models import FileForPrint
import datetime
from uuid import uuid4
from random import randint


class PrintFormView(View):
    def get(self, request, *args, **kwargs):
        return render(request, '_base_vue.html')


def handle_uploaded_file(f):
    new_filename = str(uuid4())
    code = randint(100000, 999999)
    print(FileForPrint.objects.filter(code_for_print=code))
    while not FileForPrint.objects.filter(code_for_print=code):
        code = randint(100000, 999999)
    with open(FileForPrint.file_path + '/' + new_filename + '.' + f.name.split('.')[-1], 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
    FileForPrint.objects.create(filename=new_filename, code_for_print=code, upload_time=datetime.datetime.now())


@csrf_exempt
def print_form_filled(request):
    print(request)
    # print(request.body)
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        print("method")
        if form.is_valid():
            print("IOF - ", request.FILES['file'])
            print(request.FILES['file'].name.split('.')[-1])
            print(request.FILES)
            handle_uploaded_file(request.FILES['file'])
            return JsonResponse({"validate": True, "code": 1234})
    return JsonResponse({"validate": False})


class PrintCodeView(View):
    def get(self, request, *args, **kwargs):

        data = {
            "code": 1234
        }
        return render(request, '_base_vue.html', data)
