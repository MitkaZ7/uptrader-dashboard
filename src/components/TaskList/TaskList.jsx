import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TaskCard from '../TaskCard/TaskCard'
import { db } from '../../utils/firebase'
import { getInitialTasks } from '../../store/slices/tasksSlice'
import { doc, getDocs, addDoc, collection } from "firebase/firestore";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  useEffect(() => {
  
  }, [])
 
  return (
    <ul className='taskList'>
      {
        tasks.map((task) => <TaskCard key={task.id} title={task.title} priority={task.priority}/>)
      }
     
    </ul>
  )
}

export default TaskList
