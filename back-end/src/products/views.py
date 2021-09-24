from rest_framework import generics , viewsets, status
from .models import *
from .serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_extensions.mixins import NestedViewSetMixin
from rest_framework_extensions.utils import compose_parent_pk_kwarg_name


class product(viewsets.ModelViewSet):
	permission_classes = (IsAuthenticatedOrReadOnly,)
	queryset = product.objects.all()
	serializer_class = product_serial
	

	@action(methods=['GET', 'POST'], detail=True )
	def features(self, request, prod=None):
		feature 		= prodFeatures.objects.filter(prod=prod)
		subFetr 		= Sub_feature.objects.filter(prod_feature=feature)
		featureSerial 	= prodFeatures_serial(feature, many=True)
		SubFeature  	= Sub_feature_serial(subFetr, many=True)
		print("\n\n\n\n\n\n{}\n{}\n\n\n\n\n\n".format(featureSerial.data,SubFeature.data))
		return Response({featureSerial.data:SubFeature.data}, status=status.HTTP_200_OK)
	


	@action(methods=["post"], detail=True, permission_classes=(IsAuthenticated))
	def rate(self, request, pk=None):
		if 'rate' in request.data:
			prod  = product.objects.get(id=pk)
			user  = request.user
			user_rate  = int(request.data['rate'][0])
			try:
				newrate = Rate.objects.get(user=user.id, prod=prod.id)
				newrate.rate = user_rate
				newrate.save()
				return Response(rate_serial(newrate).data, status=status.HTTP_201_CREATED)
			except:
				rating =  Rate.objects.create(prod=prod, user=user, rate=user_rate)
				prod_ratings = rate_serial(rating)
				return Response(prod_ratings.data, status=status.HTTP_201_CREATED)
		else:
			json ={
				"message":"bad data recieved expected rate"
				}
			return Response(json, status=status.HTTP_400_BAD_REQUEST)



class prodViewSet(viewsets.ModelViewSet):
    pass
class categories(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = category_serial
    http_method_names = ['get', 'post']




class Prod_Features(prodViewSet, NestedViewSetMixin):
	lookup_field = 'prod'
	http_method_names = ['get', 'post']
	queryset = prodFeatures.objects.all()
	serializer_class = prodFeatures_serial
	
	@action(methods=['GET', 'POST'], detail=True )
	def get(self, request, *args, **kwargs):
		print("\n\n\n\n\n\n{}\n\n\n\n\n\n".format(1))
		prod_pk = getattr(self, compose_parent_pk_kwarg_name('prod'))
		product = product.objects.get(id=prod_pk)
		feature = prodFeatures.objects.filter(prod=product)
		feature = prodFeatures_serial(feature, many=True)
		return Response(feature.data, status=status.HTTP_200_CREATED)

class Sub_Features(viewsets.ModelViewSet, NestedViewSetMixin):
    queryset = Sub_feature.objects.all()
    serializer_class = Sub_feature_serial
    http_method_names = ['get', 'post']

