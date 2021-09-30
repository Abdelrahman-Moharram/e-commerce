# Generated by Django 3.2.6 on 2021-09-30 17:01

from django.db import migrations, models
import django.db.models.deletion
import products.models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20210921_0959'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
        migrations.CreateModel(
            name='prod_imgs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='media/defaults/Shop_ICON_Final.jpg', upload_to=products.models.save_images)),
                ('color', models.CharField(max_length=50)),
                ('is_main', models.BooleanField()),
                ('prod', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]
