from django.db import models
from .countries  import countries
from shops.models import Shop
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator,MaxValueValidator



class Country(models.Model):
    name = models.CharField(max_length=50, choices=countries)

    def __str__(self):
        return self.name


cat_types = (
    ('techs','techs'),
    ('fitness tools','fitness tools'),
    ('clothes','clothes'),
    ('Make ups','Make ups'),
    ('Furnitures','Furnitures')
)

class Category(models.Model):
    name        = models.CharField(max_length=50)
    Cat_type    = models.CharField(choices=cat_types,max_length=50)

    def __str__(self):
        return self.name
    
def get_ext(name):
    for i in range(len(name)-1, 0, -1):
        if name[i] == '.':
            return name[i+1:]

def save_images(instance, name):
    ext = get_ext(name)
    return 'media/products/%s.%s'%(str(instance.prod), ext) 







class product (models.Model):
    shop        = models.ForeignKey(Shop, on_delete=models.CASCADE)
    name        = models.CharField(max_length=50)
    desc        = models.TextField(max_length=100, null=True, blank=True)
    country     = models.ForeignKey(Country, on_delete=models.CASCADE)
    category    = models.ForeignKey(Category, on_delete=models.CASCADE)
    oprice      = models.FloatField(verbose_name="Original price")
    dprice      = models.FloatField(verbose_name="Discount price")


    def ratings_num(self):
        return len(Rate.objects.filter(prod=self))
    
    def ratings_num(self):
        return len(Comments.objects.filter(prod=self))
    
    
    def image(self):
        return str(prod_imgs.objects.get(prod=self, is_main=True).image)
    
    def avg(self):
        rates = Rate.objects.filter(prod=self)
        len_rates = len(rates)
        if len_rates <= 0:
            return 0
        sums = 0
        for rate in rates:
            sums += rate.rate
        return sums/len_rates


    def __str__(self):
        return self.name


class prod_imgs(models.Model):
    prod    = models.ForeignKey(product, on_delete=models.CASCADE)
    image   = models.ImageField(upload_to=save_images, default="media/defaults/Shop_ICON_Final.jpg")
    color   = models.CharField(max_length=50)
    is_main = models.BooleanField()

    def __str__(self):
        return str(self.prod) + " avaliable with " + self.color  + " color"



class prodFeatures(models.Model):
    feature = models.CharField(max_length=50)
    prod    = models.ForeignKey(product,  on_delete=models.CASCADE)

    def __str__(self):
	    return str(self.prod) + " have " + str(self.feature)


class Sub_feature(models.Model):
    desc         = models.TextField(max_length=350)
    prod_feature = models.ForeignKey(prodFeatures, on_delete=models.CASCADE)

    def __str__(self):
	    return self.desc




class Rate(models.Model):
    prod = models.ForeignKey(product,  on_delete=models.CASCADE)
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    rate = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])



    def __str__(self):
	    return str(self.user)+" give {} stars ".format(self.rate) + " for " + str(self.prod)


    class Meta:
	    unique_together = (('user', 'prod'),)
	    index_together  = (('user', 'prod'),)



def save_comments_images(instance, name):
    ext = get_ext(name)
    return 'media/comments/%s.%s'%(str(instance.prod), ext) 


class Comments(models.Model):
    prod        = models.ForeignKey(product, on_delete=models.CASCADE)
    user        = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    content     = models.TextField()
    image       = models.ImageField(upload_to=save_comments_images, blank=True, null=True)
    user_image  = models.ImageField(upload_to=save_comments_images, default="media/defaults/user-icon.png")
    
    def username(self):
        return User.objects.get(id=self.user.id).username
    
    
    def __str__(self):
        return self.content
    