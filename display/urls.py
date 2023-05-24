from django.urls import path
from . import views

urlpatterns = [
    path('', views.InputCodeView.as_view(), name='display_main_screen'),
    path('code/', views.display_get_code, name='display_get_code'),
    # path('code/', views.InputCodeCompute.as_view(), name='display_get_code'),
]
