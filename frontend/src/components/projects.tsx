import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api';
import { Project } from '../types';

const ProjectsScreen: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const _fetchProjects = async () => {
            try {
                const { data } = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            } finally {
                setLoading(false);
            }
        };
        _fetchProjects();
    }, []);

    if (loading) return <p>Loading projects...</p>;
    if (!projects || projects.length < 1) return <p>No Record</p>;

    return (
        <div>
            <h2>Your Projects</h2>
            <table>
                {projects?.map((project: Project) => (
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td>{project.start_date.toUTCString()}</td>
                        <td>{project.end_date.toUTCString()}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default ProjectsScreen;
