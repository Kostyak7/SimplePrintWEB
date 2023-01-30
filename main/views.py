from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class MainViewMain(View):
    def get(self, request, *args, **kwargs):
        return render(request, '_base_vue.html')
