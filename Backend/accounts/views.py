# from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.shortcuts import redirect

def activation_redirect(request, uid, token):
    frontend_url = f'http://localhost:5173/password/reset/confirm/{uid}/{token}'
    return redirect(frontend_url)

def activation_user_redirect(request, uid, token):
    frontend_url = f'http://localhost:5173/activate/{uid}/{token}'
    return redirect(frontend_url)


@ensure_csrf_cookie
def get_csrf_token(request):
    # print('yassine')
    token = get_token(request)
    return JsonResponse({'csrfToken': token})