import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api';
import { Project } from '../types';

const ProjectsScreen: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const _fetchProjects = async () => {
      try {
        const data = await fetchProjects();
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
    <div className='flex flex-col justify-center items-center'>
      <h2>Projects List</h2>
      <div className='border border-slate-500 bg-slate-100 rounded-sm'>
        <table>
          <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          </thead>
          <tbody>
            {projects?.map((project: Project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.start_date.toString()}</td>
                <td>{project.end_date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsScreen;
