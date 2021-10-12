from rest_framework import serializers
from .models import Shop

class shop_serializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = "__all__"