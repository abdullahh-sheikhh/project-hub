import axios from 'axios';
import { Credentials } from './types';
const BASE_URL = 'http://127.0.0.1:8000/';

export const fetchProjects = async () => {
    const response = await axios.get(`${BASE_URL}api/projects/`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const fetchTasks = async () => {
    const response = await axios.get(`${BASE_URL}api/tasks/`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const fetchTask = async (taskId: number) => {
    const response = await axios.get(`${BASE_URL}api/tasks/${taskId}/`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const updateTaskStatus = async (taskId: number, status: String) => {
    const response = await axios.patch(
        `${BASE_URL}api/tasks/${taskId}/`,
        { status },
        {
            headers: {
                // Authorization: `Token ${localStorage.getItem('token')}`,
            },
        }
    );
    return response;
};

export const loginUser = async (credentials: Credentials) => {
    const response = await axios.post(`${BASE_URL}login/`, {
        username: credentials.username,
        password: credentials.password,
    });
    return response;
};
