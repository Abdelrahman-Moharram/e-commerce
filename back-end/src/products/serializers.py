from rest_framework import serializers
from .models import *





class country_serial(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'




class category_serial(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'



class product_serial(serializers.ModelSerializer):
    class Meta:
        model = product
        fields = ('id','shop','name', 'desc','country','category','oprice','dprice','ratings_num','avg')



class rate_serial(serializers.ModelSerializer):
    class Meta:
        model = Rate
        fields = '__all__'



class prodFeatures_serial(serializers.ModelSerializer):
    class Meta:
        model = prodFeatures
        fields = '__all__'


class Sub_feature_serial(serializers.ModelSerializer):
    class Meta:
        model = Sub_feature
        fields = '__all__'


class prod_imgs_serial(serializers.ModelSerializer):
    class Meta:
        model = prod_imgs
        fields = '__all__'
