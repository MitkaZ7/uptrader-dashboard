import React from 'react'
import Project from '../Project/Project'
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup'
// import { fetchPerson, addPerson } from '../../utils/api'
const ProjectsList = () => {

  return (
    <section className="projects-list">

      {/* <h2 className="projects-list__title">Current projects</h2>
      <ul className="projects-list__list"> */}
       {/* {
          Project.map((item) => <Project key={item._id} {...item} />)
        } */}
        {/* <li className="projects-list__item">
          <a href='#' className="projects-list__link">Project ONE</a>
        </li>
        <li className="projects-list__item">
          <a href='#' className="projects-list__link">Project TWO</a>
        </li>
        <li className="projects-list__item">
          <a href='#' className="projects-list__link">Project three</a>
        </li> */}

      {/* </ul> */}
      <AddTaskPopup />

    </section>

  )
}

export default ProjectsList
