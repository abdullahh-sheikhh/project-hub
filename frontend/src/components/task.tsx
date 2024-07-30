import React, { useState, useEffect } from 'react';
import { fetchTask, updateTaskStatus } from '../api';
import { Task } from '../types';
import { useParams } from 'react-router-dom';

const TaskScreen: React.FC = () => {
  const [task, setTask] = useState<Task>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id: taskId } = useParams();

  const _fetchTask = async () => {
    try {
      const data = await fetchTask(Number(taskId));
      setTask(data);
      console.log(task);
    } catch (error) {
      console.error('Error fetching task:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    _fetchTask();
  }, []);

  const _updateTaskStatus = async (event: any) => {
    try {
      const status = event.target.value;
      console.log(status);
      const response = await updateTaskStatus(task!.id, status);
      console.log(response);
      await _fetchTask();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (loading) return <p>Loading tasks...</p>;
  if (!task) return <p>Task Not Found</p>;
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h2>Task {taskId}</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{task.name}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>
              <textarea disabled rows={2}>
                {task.description}
              </textarea>
            </td>
          </tr>
          <tr>
            <th>Project</th>
            <td>{task.project}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{task.status}</td>
          </tr>
          <tr>
            <th>Due Date</th>
            <td>{task.due_date.toString()}</td>
          </tr>
          <tr>
            <th>User</th>
            <td>{task.assigned_to}</td>
          </tr>
        </tbody>
      </table>
      <div className='flex gap-5 bg-slate-100 p-3 rounded-lg items-center'>
        <span className='text-slate-700 font-medium'>Update Task Status</span>
        <select
          className='border border-slate-700 rounded-md p-2 w-44'
          name='status'
          id='status'
          value={task.status}
          onChange={_updateTaskStatus}
        >
          <option value='Not Started'>Not Started</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
          <option value='Backlog'>Backlog</option>
        </select>
      </div>
    </div>
  );
};

export default TaskScreen;
