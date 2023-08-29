from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns += [
    # get access and refresh tokens
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    # get new access token by refresh token
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # check token validity
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
]
