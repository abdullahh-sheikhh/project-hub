from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer
# Create your views here.

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [IsAuthenticated, IsAdminUser]

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    # permission_classes = [IsAuthenticated, IsAdminUser]

# class TaskDetailView(generics.RetrieveAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     permission_classes = [IsAuthenticated, IsAdminUser]

#     def get_object(self):
#         task_id = self.kwargs['task_id']
#         return generics.get_object_or_404(Task, id=task_id)

class UserTaskViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = TaskSerializer
    def get_queryset(self):
        return Task.objects.filter(assigned_to=self.request.user)
    
class UpdateTaskStatusView(viewsets.ModelViewSet):
    queryset = Task.objects
    serializer_class = TaskSerializer
    # permission_classes = [IsAuthenticated]
