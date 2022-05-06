from django.db import models

# Create your models here.
class addfile(models.Model):
    pdf = models.FileField(upload_to="pdfs")