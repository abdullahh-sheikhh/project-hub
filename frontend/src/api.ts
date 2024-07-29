import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/';

export const fetchProjects = async () => {
    const response = await axios.get(`${BASE_URL}projects/`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const fetchTasks = async () => {
    const response = await axios.get(`${BASE_URL}tasks/`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const fetchTask = async (taskId: number) => {
    const response = await axios.get(`${BASE_URL}tasks/${taskId}`, {
        headers: {
            // Authorization: `Token ${localStorage.getItem('token')}`,
        },
    });
    return response.data;
};

export const updateTaskStatus = async (taskId: number, status: string) => {
    const response = await axios.patch(
        `${BASE_URL}tasks/${taskId}/`,
        { status },
        {
            headers: {
                // Authorization: `Token ${localStorage.getItem('token')}`,
            },
        }
    );
    return response.data;
};
