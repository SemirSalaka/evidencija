from django.urls import path

from aplikacija import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('register/', views.register, name="register"),
    path('getPredmeti/', views.getPredmeti, name="getPredmeti"),

]
