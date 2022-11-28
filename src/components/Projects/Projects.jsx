import React from 'react'
import Project from '../Project/Project'
const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__title">Current projects</h2>
      <ul className="projects__list">
        {/* {
          tasks.map((task) => <TaskItem key={task._id} {...task} />)
        } */}
        <li className="project">
          <a href='#' className="project__link">Project ONE</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project TWO</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project three</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project four</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project five</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project six</a>
        </li>
        <li className="project">
          <a href='#' className="project__link">Project seven</a>
        </li>

      </ul>
    </section>

  )
}

export default Projects
