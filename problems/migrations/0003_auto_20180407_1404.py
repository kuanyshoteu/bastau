# Generated by Django 2.0.1 on 2018-04-07 08:04

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0002_auto_20180407_1212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checkproblem',
            name='actions',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), size=None), default=[['first', 'first_hidden', 'not_in_task']], size=None),
        ),
    ]
