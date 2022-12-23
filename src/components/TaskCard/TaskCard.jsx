import React from 'react'

const TaskCard = ({taskTitle, taskPriority, taskLink}) => {
  return (
   
      <li className="task-item">
      <a href={taskLink} className="task-item__link">
          <span className="task-item__title">{taskTitle}</span>
          <span className="task-item__priotiry">{taskPriority}</span>
        </a>
      </li>
     
  )
}

export default TaskCard
