import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import {useEffect} from 'react'
import ProjectsList from '../ProjectsList/ProjectsList'
import Project from '../Project/Project'

import { useDispatch, useSelector } from 'react-redux'
function App() {
  // const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch();
  
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
