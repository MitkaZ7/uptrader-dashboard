import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import AddProjectPopup from '../AddProjectPopup/AddProjectPopup'

const ProjectsList = () => {
  const [isAddProjectPopupOpen, setIsAddProjectPopupOpen] = useState(false)
  const openPopupHandler = () => {
    setIsAddProjectPopupOpen(true);
  }
  return (
    <>
    <section className="projects-list">
      <header className="projects-list__header">  
        <h2 className="projects-list__title">Current projects</h2>
          <button className="projects-list__add-button" onClick={openPopupHandler}>Create project</button>
      </header>
      <ul className="projects-list__list">
          <ProjectCard/>

         
          
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

      </ul>
      

    </section>
      <AddProjectPopup isOpen={isAddProjectPopupOpen} setOpen={setIsAddProjectPopupOpen} />
    </>
  )
}

export default ProjectsList
