import json
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.views import View
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from rest_framework.views import APIView
from django.http import JsonResponse

from printform.views import validate_code


WRONG_CODE = "WRONG_CODE"


class InputCodeView(View):
    def get(self, request):
        return render(request, '_base_vue.html')


# class InputCodeCompute(View):
#     def post(self, request):
#         code = request.GET.get('code', None)
#         if not validate_code(code):
#             return JsonResponse({"success": False, "error_message": WRONG_CODE})
#         channel_layer = get_channel_layer()
#         async_to_sync(channel_layer.group_send)(
#             "sprinter-id-0001", {"type": "send_to",
#                                  "code": str(code)}
#         )
#         return JsonResponse({"success": True})
#
@csrf_exempt
def display_get_code(request):
    if request.method == 'POST':
        code = request.GET.get('code', None)
        body = json.loads(request.body)
        if "code" in body and validate_code(body["code"]):
            print(body["code"])
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                "sprinter-id-0001", {"type": "send_to",
                                     "code": str(body["code"])}
            )
            return JsonResponse({"success": True})
        return JsonResponse({"success": False, "error_message": WRONG_CODE})
    return JsonResponse({"success": False, "error_message": " "})
