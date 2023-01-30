from django.urls import path
from . import views

urlpatterns = [
    path('', views.MainViewMain.as_view(), name='main_page'),
]
