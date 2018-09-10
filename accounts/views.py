from django.contrib.auth import (
    authenticate,
    get_user_model,
    login,
    logout,

    )
from urllib.parse import quote_plus

from django.contrib import messages
from django.contrib.contenttypes.models import ContentType
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.db.models import Q
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone

from django.contrib.auth.models import User

from django.shortcuts import render, redirect

from .forms import UserLoginForm, UserRegisterForm, ProfileForm
from .models import Profile
from problems.models import Problem, CheckProblem

def account_view(request, user = None):
    user = User.objects.get(username = user)
    hisprofile = Profile.objects.get(user = user)
    school = hisprofile.school
    birthday = hisprofile.birthdate
    rating = hisprofile.rating
    pid = hisprofile.id
    user_id  = hisprofile.user_id
    image = hisprofile.image

    problem_set = Problem.objects.filter_by_author(user)
    #User information
    initial_data = {
            "school": school,
            "birthdate": birthday,
            "image":image,
    }
    #Form to change user information
    form = ProfileForm(request.POST or None, request.FILES or None, initial = initial_data)
    if form.is_valid():
        hisprofile = form.save(commit=False)
        hisprofile.id = pid
        hisprofile.user_id = user_id
        messages.success(request, "Successfully Updated")
        hisprofile.save()
    
    status = "user"    
    if user.is_staff:
        status = "Moderator"
    if user.is_superuser:
        status = "Creator"
    
    yourprofile = 'admin'
    if request.user.is_authenticated:
        yourprofile = Profile.objects.get(user = request.user.id)
    
    #Moderator abilities
    staff = "no"
    if request.user.is_staff or request.user.is_superuser:
        staff = "yes"
    
    
    context = {
        "staff":staff,
        "user":request.user,
        "profile":yourprofile, 
        "hisprofile": hisprofile, 
        "status":status,
        "rating": rating,
        "school": hisprofile.school,
        "birthday": hisprofile.birthdate,
        "form":form,
        "problem_set":problem_set,
    }
    return render(request, "profile.html", context)

def login_view(request):
    next = request.GET.get('next')
    title = "Login"
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get("username")
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        login(request, user)
        if next:
            return redirect(next)
        return redirect("/")
    return render(request, "form.html", {"form":form, "title": title})


def register_view(request):
    next = request.GET.get('next')
    title = "Register"
    form = UserRegisterForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=False)
        password = form.cleaned_data.get('password')
        password2 = form.cleaned_data.get('password2')
        user.set_password(password)
        user.save()
        new_user = authenticate(username=user.username, password=password)
        login(request, new_user)

        for prblm in Problem.objects.filter():
            c = CheckProblem.objects.get_or_create(
                user = user.id,
                problem_id = prblm.id,
                solved = False,
            )
        for crs in Course.objects.filter():
            c = PassCourse.objects.get_or_create(
                user = user.id,
                course_id = crs.id,
                passed = 0,
            )
        profile = Profile.objects.get(user = new_user)
        profile.rating = 0
        profile.save()
        if next:
            return redirect(next)
        return redirect("/")

    context = {
        "form": form,
        "title": title
    }
    return render(request, "form.html", context)


def logout_view(request):
    logout(request)
    return redirect("/")