import Profile from './components/Profile';
import ProjectsContainer from './components/ProjectsContainer';

export default function App() {
  return (
    <div className='flex flex-col md:flex-row'>
      <Profile />
      <ProjectsContainer />
    </div>
  )
}
