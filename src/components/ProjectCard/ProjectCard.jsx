import React from 'react'

const ProjectCard = ({title, link}) => {
  return (
      <li className="project-card">
      <a href={link} className="project-card__link">{title}</a>
      </li>
  )
}

export default ProjectCard