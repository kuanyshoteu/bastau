# Generated by Django 2.0.1 on 2018-04-07 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0003_auto_20180407_1404'),
    ]

    operations = [
        migrations.AddField(
            model_name='checkproblem',
            name='current_string',
            field=models.TextField(default='de'),
        ),
    ]
