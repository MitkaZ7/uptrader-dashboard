import React from 'react'

const TaskItem = () => {
  return (
    <>
      <li className="task-item">
        <a href='#' className="task-item__link">
          <span className="task-item__title">Believe in yourself</span>
          <span className="task-item__priotiry">critical</span>
        </a>
      </li>
      <li className="task-item">
        <a href='#' className="task-item__link">
          <span className="task-item__title">Do the project</span>
          <span className="task-item__priotiry">usual</span>
        </a>
      </li>
    <li className="task-item">
      <a href='#' className="task-item__link">
        <span className="task-item__title">Complete your fulltack SPA</span>
        <span className="task-item__priotiry">seriuosly</span>
      </a>
    </li>
      <li className="task-item">
        <a href='#' className="task-item__link">
          <span className="task-item__title">Get a new job</span>
          <span className="task-item__priotiry">seriuosly</span>
        </a>
      </li>
      <li className="task-item">
        <a href='#' className="task-item__link">
          <span className="task-item__title">Forget about One S</span>
          <span className="task-item__priotiry">seriuosly</span>
        </a>
      </li>
    </>
  )
}

export default TaskItem
