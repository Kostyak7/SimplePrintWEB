from django.db import models


class FileForPrint(models.Model):
    file_path = "files"
    filename = models.TextField('Filename', unique=True)
    upload_time = models.DateTimeField('Date-Time')
    code_for_print = models.IntegerField("Code for print", unique=True)
    print_state = models.BooleanField("Is printed", default=False)
    color = models.CharField("Color", max_length=5, default="BLACK")
    format = models.CharField("Format", max_length=8, default="ONE-SIDE")
    amount = models.IntegerField("Amount", default=1)

    def get_absolute_url(self):
        return f'{self.id}'
