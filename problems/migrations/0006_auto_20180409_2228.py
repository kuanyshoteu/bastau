# Generated by Django 2.0.1 on 2018-04-09 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0005_problem_level'),
    ]

    operations = [
        migrations.AlterField(
            model_name='problem',
            name='level',
            field=models.IntegerField(default=1),
        ),
    ]
