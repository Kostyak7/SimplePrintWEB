from django.urls import path, re_path
from . import views

urlpatterns = [
    path('v1/file/', views.send_file_to_print, name='send_file_to_print'),
    path('v1/file/info/', views.send_file_info, name='send_file_info'),
    path('v1/file/printed/', views.file_printed, name='file_printed'),
]