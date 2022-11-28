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
          <h3 className="project__title">Project ONE</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project TWO</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project THREE</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project FOUR</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project FIVE</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project SIX</h3>
        </li>
        <li className="project">
          <h3 className="project__title">Project SEVEN</h3>
        </li>

      </ul>
    </section>

  )
}

export default Projects
