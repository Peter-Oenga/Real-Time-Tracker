from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet
from . import views
from .views import event_list

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', views.home, name='home'),
    path('events/', event_list, name='event_list'),

]
