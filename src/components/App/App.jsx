import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import ProjectsList from '../ProjectsList/ProjectsList'
import Project from '../Project/Project'
function App() {
  return (

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProjectsList />} />
          <Route path='/projects' element={<Project />} />

        </Route>

      </Routes>



  );
}

export default App;
