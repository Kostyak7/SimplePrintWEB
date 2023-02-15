from django.urls import path, re_path
from . import views

urlpatterns = [
    path('form/', views.PrintFormView.as_view(), name='print_form_page'),
    path('form/filled/', views.print_form_filled, name='print_form_filled'),
    path('code/', views.PrintCodeView.as_view(), name='print_code_page'),

    path('remove/expired/', views.remove_expired, name='remove_expired'),
]
