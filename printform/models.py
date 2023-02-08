from django.db import models


class FileForPrint(models.Model):
    file_path = "files"
    filename = models.TextField('Filename', unique=True)
    upload_time = models.DateTimeField('Date-Time')
    code_for_print = models.IntegerField("Code for print", unique=True)
    print_state = models.BooleanField("Is printed", default=False)

    def get_absolute_url(self):
        return f'{self.id}'

    class Meta:
        verbose_name = 'File'
        verbose_name_plural = 'Files'
