from django.urls import path, re_path
from . import views

urlpatterns = [
    path('code/', views.check_code, name='check_file'),
    path('file/', views.get_file_to_print, name='get_file_to_print'),
]