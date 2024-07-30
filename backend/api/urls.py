from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TaskViewSet, TaskDetailView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    # Define your API endpoints here
    path('', include(router.urls)),
    # path('task/<int:task_id>', TaskDetailView.as_view(), name='task_detail'),
]