from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('main', views.main, name='main'),
    path('resources', views.resources, name='resources'),
    path('room', views.room, name='room'),
    path('select-custom', views.select_custom, name='select_custom'),
    path('select-pre', views.select_pre, name='select_pre'),
]
