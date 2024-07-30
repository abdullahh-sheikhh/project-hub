import React, { useState, useEffect } from 'react';
import { loginUser } from '../api';
import { Credentials } from '../types';

const ProjectsScreen: React.FC = () => {
    const [credentials, setCredentials] = useState<Credentials>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const _loginUser = async () => {
        try {
            setLoading(true);
            const response = await loginUser(credentials!);
            if (response.status == 200) {
            }
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2>Login</h2>
            <form className='border border-slate-500 bg-slate-100 rounded-sm'></form>
        </div>
    );
};

export default ProjectsScreen;
