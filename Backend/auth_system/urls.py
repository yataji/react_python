from django.urls import path, include, re_path
from django.views.generic import TemplateView
from accounts.views import get_csrf_token, activation_redirect, activation_user_redirect
from accounts.views import get_csrf_token, activation_redirect, activation_user_redirect


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('get-csrf-token/', get_csrf_token, name='get_csrf_token'),
    path('create-local/', include('createlocal.urls')),
    path('password/reset/confirm/<uid>/<token>/', activation_redirect, name='activation-redirect'),
    path('activate/<uid>/<token>/', activation_user_redirect, name='activation-user-redirect'),
]
# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
