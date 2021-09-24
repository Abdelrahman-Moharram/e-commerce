from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .models import Shop
from .serializers import * 
class shops_list(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = shop_serializer