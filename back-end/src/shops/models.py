from django.db import models
from django.contrib.auth.models import User
import products.models 


    
def get_ext(name):
    for i in range(len(name)-1, 0, -1):
        if name[i] == '.':
            return name[i+1:]

def save_images(instance, name):
    ext = get_ext(name)
    return 'media/shops/%s.%s'%(instance.id, ext) 



class Shop(models.Model):
    name    = models.CharField(max_length=50)
    user    = models.OneToOneField(User, on_delete=models.CASCADE)
    phone   = models.CharField(max_length=20)
    url     = models.URLField(blank=True)
    image   = models.ImageField(upload_to=save_images, default="media/defaults/Shop_ICON_Final.jpg")
    # country = models.ForeignKey(models.Country, on_delete=models.PROTECT)

    def __str__(self):
        return self.name