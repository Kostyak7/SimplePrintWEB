# Generated by Django 4.0.6 on 2023-02-08 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('printform', '0002_fileforprint_delete_filedforprint'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileforprint',
            name='amount',
            field=models.IntegerField(default=1, verbose_name='Amount'),
        ),
        migrations.AddField(
            model_name='fileforprint',
            name='color',
            field=models.CharField(default='BLACK', max_length=5, verbose_name='Color'),
        ),
        migrations.AddField(
            model_name='fileforprint',
            name='format',
            field=models.CharField(default='ONE-SIDE', max_length=8, verbose_name='Format'),
        ),
        migrations.AddField(
            model_name='fileforprint',
            name='payment',
            field=models.CharField(default='SFP', max_length=10, verbose_name='Color'),
        ),
    ]
