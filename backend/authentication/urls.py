from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)


from rest_framework.routers import DefaultRouter
from .views import RegistrationViewSet, RefreshViewSet, LoginViewSet, UserViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet)

# USER
router.register(r"users", UserViewSet)

# AUTHENTICATION
router.register(r"auth/login", LoginViewSet, basename="auth-login")
router.register(r"auth/register", RegistrationViewSet, basename="auth-register")
router.register(r"auth/refresh", RefreshViewSet, basename="auth-refresh")


urlpatterns = [
    # Simple-JWT
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    # User
    path("", include(router.urls)),
]
