from django.db import models
from users.models import User

# Create your models here.

class Order(models.Model):
  Order_id = models.AutoField(primary_key=True)
  User_id = models.ForeignKey(User, on_delete=models.CASCADE)
  total_items = models.PositiveIntegerField(default=0)
  bill_total = models.PositiveIntegerField(default=0)
  transactionDateTime = models.DateTimeField(auto_now_add=True)
  payment_done = models.BooleanField(default=False)

  def __str__(self) -> str:
    return f'Order: {self.id}'