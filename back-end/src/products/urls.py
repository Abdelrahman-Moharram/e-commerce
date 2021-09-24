from django.urls import path, include
from . import views 
from rest_framework import routers
app_name = "products"

from rest_framework_extensions.routers import ExtendedSimpleRouter

router = routers.DefaultRouter()
router.register("categories", views.categories),
router.register("", views.product),

nested_routers = ExtendedSimpleRouter()
(
    nested_routers.register(r"",views.prodViewSet,basename='product')
           .register(r'prod-features'     , views.Prod_Features,       basename='prodFeatures',          parents_query_lookups=['prod'])
           .register(r'sub-features'      , views.Sub_Features,        basename='Sub_Features',           parents_query_lookups=['prod','sub_product_features'])
)

urlpatterns =[
    path("",include(router.urls)),
    path("",include(nested_routers.urls)),
]