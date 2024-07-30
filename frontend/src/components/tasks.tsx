import React, { useState, useEffect } from 'react';
import { fetchTasks, updateTaskStatus } from '../api';
import { Task } from '../types';
import { useNavigate } from 'react-router-dom';

const TasksScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const _fetchTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    _fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (!tasks || tasks.length < 1) return <p>No Record</p>;
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Tasks Lists</h2>
      <div className='border border-slate-500 bg-slate-100 rounded-sm'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Project</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned User</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
              <tr
                onClick={() => {
                  navigate(`/tasks/${task.id}`);
                }}
                key={task.id}
              >
                <td>{task.name}</td>
                <td>{task.project}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>{task.assigned_to}</td>
                <td>{task.due_date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TasksScreen;
