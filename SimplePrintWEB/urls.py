from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include('main.urls')),
    path('v1/print/', include('printform.urls')),
    path('v1/printer/', include('printer.urls')),
    path('v1/display/', include('display.urls')),
]
