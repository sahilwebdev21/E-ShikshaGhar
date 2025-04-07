import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")
DEBUG = os.getenv("DEBUG") == "True"
ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS").split(',')
INSTALLED_APPS = [
    'corsheaders',
    'rest_framework',
    'users',  # if you've added this already
]
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # 👈 must come first
    'django.middleware.common.CommonMiddleware',  # 👈 comes right after
]
CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS').split(',')
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}
