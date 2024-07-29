import React, { useState, useEffect } from 'react';
import { fetchUserTasks, updateTaskStatus } from '../api';
import { Task } from '../types';

const TasksScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await fetchUserTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (
    taskId: number,
    newStatus: 'pending' | 'in_progress' | 'completed'
  ) => {
    try {
      const { data } = await updateTaskStatus(taskId, newStatus);
      setTasks(tasks.map((task) => (task.id === taskId ? data : task)));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
            <button onClick={() => handleStatusChange(task.id, 'in_progress')}>
              In Progress
            </button>
            <button onClick={() => handleStatusChange(task.id, 'completed')}>
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksScreen;
