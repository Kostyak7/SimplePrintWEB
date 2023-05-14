from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def redirect_to_main(request):
    return redirect('main_page')


class MainViewMain(View):
    def get(self, request, *args, **kwargs):
        return render(request, '_base_vue.html')
