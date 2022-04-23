from django.db import models

# Create your models here.

class Product(models.Model):
  name = models.CharField(max_length=200)
  image = models.ImageField(default = 'no_image.png')
  MRP = models.PositiveIntegerField(default=0)
  sellPrice = models.PositiveBigIntegerField(default=0)

  def __str__(self):
    return self.name