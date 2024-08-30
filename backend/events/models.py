from django.db import models

class Event(models.Model):
    CATEGORY_CHOICES = [
        ('transport', 'Transport'),
        ('delivery', 'Delivery'),
        ('service', 'Service'),
    ]

    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    location = models.CharField(max_length=255)
    status = models.CharField(max_length=20)
    details = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.category} - {self.location}'
