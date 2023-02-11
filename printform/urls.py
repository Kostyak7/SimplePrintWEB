from django.urls import path
from . import views

urlpatterns = [
    path('form/', views.PrintFormView.as_view(), name='print_form_page'),
    path('form/filled/', views.print_form_filled, name='print_form_filled'),
    path('form/code/', views.PrintCodeView.as_view(), name='print_code_page'),
]
