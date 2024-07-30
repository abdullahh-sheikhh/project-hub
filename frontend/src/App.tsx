import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import TasksScreen from './components/tasks';
import ProjectsScreen from './components/projects';
import TaskScreen from './components/task';

function App() {
  return (
    <BrowserRouter>
      <nav className=''>
        <ul className='flex gap-8 justify-center items-center p-2 bg-blue-500'>
          <li className='w-16 bg-blue-700 text-white rounded-md p-1'>
            <Link to='/'>Projects</Link>
          </li>
          <li className='w-16 text-center bg-blue-700 text-white rounded-md p-1'>
            <Link to='/tasks'>Tasks</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<ProjectsScreen />} />
        <Route path='/tasks' element={<TasksScreen />} />
        <Route path='/tasks/:id' element={<TaskScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
