from django.db import models


class Printers(models.Model):
    username = models.CharField("Username", max_length=32, unique=True)
    password = models.CharField("Password", max_length=32, unique=True)

    def get_absolute_url(self):
        return f'{self.id}'
