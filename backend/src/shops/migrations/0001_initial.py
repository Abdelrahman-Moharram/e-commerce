# Generated by Django 3.2.6 on 2021-09-20 18:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import shops.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=20)),
                ('url', models.URLField(blank=True)),
                ('image', models.ImageField(default='media/defaults/Shop_ICON_Final.jpg', upload_to=shops.models.save_images)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
