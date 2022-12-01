import React from 'react'
import TaskList from '../TaskList/TaskList'

const Project = () => {
  return (
    <article className="project">
      <h3 className="project__title">Project: SPA "Uptrader dashboard"</h3>

      <section className="project__content">
        <section className="project__tasks-section project__queue-tasks">
          <h3 className="project__tasks-section-header">queue</h3>
          <TaskList/>
        </section>
        <section className="project__tasks-section project__dev-tasks">
          <h3 className="project__tasks-section-header">development</h3>
          <TaskList />
        </section>
        <section className=" project__tasks-section project__done-tasks">
          <h3 className="project__tasks-section-header">done</h3>
          <TaskList />
        </section>
      {/* </div> */}
      </section>
    </article>
    // <article className="project">
    //   <h3 className="project__title">Project title: SPA "Uptrader dashboard"</h3>
    //     <ul className="project__task-list">
    //     {/* тут будет мап со списком задач по проекту элементами  */}
    //       <li className="task">
    //         <ariticle className='task__content'>
    //           <h3 className='task__header'>Do the project</h3>
    //           <section className='task__metadata'>
    //             <div className='task__metadata-parametres'>
    //               <span className='task__metadata-item task__number'>Number: 1</span>
    //               <span className='task__metadata-item task__status'>Status: dev</span>
    //               <span className='task__metadata-item task__priority'>Proirity: seriuosly</span>
    //             </div>
    //             <div className='task__metadata-dates'>
    //               <span className='task__metadata-item task__creation-date'>Created: 27-11-2022</span>
    //               <span className='task__metadata-item task__spent-time'>In work for: 1 day</span>
    //               <span className='task__metadata-item task__finish-date'>Finished: 02-12-2022</span>
    //             </div>
    //           </section>
    //           <p className='task__text'>
    //            Dont let your dreams be dreams.
    //               Yesterday you said tomorrow. So just do it! Make your dreams come true. Just do it. Some people dream of success,
    //               while you’re going to wake up and work hard at it. Nothing is impossible… You should get to the point where anyone else would quit and you’re not going to stop there.
    //               NO! What are you waiting for?! DO IT! JUST DO IT! YES YOU CAN! JUST DO IT! If you are tired of starting over, stop giving up.
    //           </p>

    //           <section className='task__subtasks subtasks'>
    //             <ul className='subtasks__list'>
    //               {/* <Subtask/> */}
    //             </ul>
    //           </section>
    //           <section className='task__files'>

    //             <input type="file" id="file" name="file" multiple />
    //           </section>
    //           <section className='task__comments comments'>
    //             <ul className='comments__list'>
    //               {/* <CommentItem /> */}
    //             </ul>
    //           </section>
    //         </ariticle>
    //       </li>
    //       <li className="task">
    //         <ariticle className='task__content'>
    //           <h3 className='task__header'>Believe in yourself</h3>
    //           <section className='task__metadata'>
    //             <div className='task__metadata-parametres'>
    //               <span className='task__metadata-item task__number'>Number: 2</span>
    //               <span className='task__metadata-item task__status'>Status: queue</span>
    //               <span className='task__metadata-item task__priority'>Proirity: critical</span>
    //             </div>
    //             <div className='task__metadata-dates'>
    //               <span className='task__metadata-item task__creation-date'>Created: 27-11-2022</span>
    //               <span className='task__metadata-item task__spent-time'>In work for: 1 day</span>
    //               <span className='task__metadata-item task__finish-date'>Finished: 02-12-2022</span>
    //             </div>
    //           </section>
    //           <p className='task__text'>
    //             Let me tell you something you already know. The world ain’t all sunshine and rainbows.
    //             It's a very mean and nasty place, and I don't care how tough you are... it will beat you to your knees and keep you there if you let it.
    //             You, me or nobody is gonna hit as hard as life. But it ain't about how hard you hit. It's about how hard you can get hit... and
    //             keep moving forward.
    //             How much you can take and keep moving forward. That's how winning is done!
    //           </p>

    //           <section className='task__subtasks subtasks'>
    //             <ul className='subtasks__list'>
    //               {/* <Subtask/> */}
    //             </ul>
    //           </section>
    //           <section className='task__files'>

    //             <input type="file" id="file" name="file" multiple />
    //           </section>
    //           <section className='task__comments comments'>
    //             <ul className='comments__list'>
    //               {/* <CommentItem /> */}
    //             </ul>
    //           </section>
    //         </ariticle>
    //       </li>
    //       <li className="task">
    //         <ariticle className='task__content'>
    //           <h3 className='task__header'>Get new job</h3>
    //           <section className='task__metadata'>
    //             <div className='task__metadata-parametres'>
    //               <span className='task__metadata-item task__number'>Number: 3</span>
    //               <span className='task__metadata-item task__status'>Status: done</span>
    //               <span className='task__metadata-item task__priority'>Proirity: usual</span>
    //             </div>
    //             <div className='task__metadata-dates'>
    //               <span className='task__metadata-item task__creation-date'>Created: 27-11-2022</span>
    //               <span className='task__metadata-item task__spent-time'>In work for: 3 days</span>
    //               <span className='task__metadata-item task__finish-date'>Finished: 31-12-2022</span>
    //             </div>
    //           </section>
    //           <p className='task__text'>
    //             You don’t try to build a wall, you don’t set out to build a wall.
    //             You don’t say I’m gonna build the biggest baddest wall that’s ever been built. you say,
    //             I’m gonna lay this brick, as perfectly as a brick can be laid, and you do that every single day, and soon you have a wall.
    //             It’s difficult to take the first step when you look how big the task is. s. The task is never huge to me, it’s always one brick.
    //             If you get your priorities straight it’s really simple.
    //           </p>

    //           <section className='task__subtasks subtasks'>
    //             <ul className='subtasks__list'>
    //               {/* <Subtask/> */}
    //             </ul>
    //           </section>
    //           <section className='task__files'>

    //             <input type="file" id="file" name="file" multiple />
    //           </section>
    //           <section className='task__comments comments'>
    //             <ul className='comments__list'>
    //               {/* <CommentItem /> */}
    //             </ul>
    //           </section>
    //         </ariticle>
    //       </li>
    //     </ul>
    //     </article>
  )
}

export default Project
