import React from 'react'

const TaskItem = () => {
  return (
    <li>
      <ariticle className='task'>
        <section className='task__metadata'>
          <span className='task__number'>1</span>
          <h3 className='task__header'>Do something great</h3>
          <span className='task__priority'>critical</span>
          <span className='task__creation-date'>27-11-2022</span>
          <span className='task__spent-time'>1 day</span>
          <span className='task__finish-date'>28-11-2022</span>
          <span className='task__status'>dev</span>
        </section>
        <section className='task__description'>
          <p>Finally done any test exercise with all technologies, with style, prove your skills. Dont let your dreams be dreams.
            Yesterday you said tomorrow. So just do it! Make your dreams come true. Just do it. Some people dream of success,
            while you’re going to wake up and work hard at it. Nothing is impossible… You should get to the point where anyone else would quit and you’re not going to stop there.
            NO! What are you waiting for?! DO IT! JUST DO IT! YES YOU CAN! JUST DO IT! If you are tired of starting over, stop giving up.</p>
        </section>
        <section className='task__subtasks subtasks'>
          <ul className='subtasks__list'>
            {/* <Subtask/> */}
          </ul>
        </section>
        <section className='task__files'>
          <span>place files here</span>
          <input type="file" id="file" name="file" multiple/>
        </section>
        <section className='task__comments comments'>
          <ul className='comments__list'>
            {/* <CommentItem /> */}
          </ul>
        </section>
      </ariticle>

    </li>
  )
}

export default TaskItem
