# Generated by Django 2.0.1 on 2018-04-11 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20180410_1237'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='profile',
            options={'ordering': ['-rating']},
        ),
    ]
