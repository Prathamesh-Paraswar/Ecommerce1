from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
  image = models.ImageField(default = 'no_picture.png')
  phone_address = models.PositiveBigIntegerField()

  def __str__(self) -> str:
    return self.username