# Generated by Django 2.0.1 on 2018-04-10 06:27

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_profile_detailed_skills'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='detailed_skills',
        ),
        migrations.AddField(
            model_name='profile',
            name='number_theory_skills',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.TextField(), size=None), default=[['Четность', '0'], ['Делимость', '0']], size=None),
        ),
    ]
