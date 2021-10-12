from django.urls import path, include
from . import views 
from rest_framework import routers

app_name = "shops"

router = routers.DefaultRouter()
router.register("", views.shops_list),


urlpatterns =[
    path("",include(router.urls)),
]