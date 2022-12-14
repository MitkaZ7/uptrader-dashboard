import React, { useState } from 'react'
import Upload from '../../assets/icons/upload.svg'
import { firestore } from '../../utils/firebase'
import { addDoc, collection } from '@firebase/firestore'
import {useForm} from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    const ref = collection(firestore, 'messages');
    const [value, setValue] = useState('');
    const handlerInput = (evt) => {
        setValue(evt.target.value);
        console.log(value)
    }
    // const handlerSumbit = (evt) => {
    //     evt.preventDefault();
    //     let data = new FormData(evt.target)
    //     console.log(data)
    //     // let data = {
    //     //   message: value,
    //     // }
    //     // try {
    //     //   addDoc(ref,data)
    //     // } catch (e) {
    //     //   console.log(e)
    //     // }
    // }
  return (
      <form id="form" action='#' className='form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='form__title'>Add new task</h3>
          <fieldset className='form__fieldset'>
              <input className="form__input" {...register("taskTitle")} />
              <select className='form__select' {...register("selectedProject")}>
                  <option value=''>Select a project</option>
                  <option value="TODO React SPA">TODO React SPA</option>
                  <option value="Dashboard React SPA">Dashboard React SPA</option>
                  <option value="Vue weather App">Vue weather App</option>
              </select>
              <select className='form__select' {...register("taskPriority")}>
                  <option value='usual'>Assign priority</option>
                  <option value='usual'>usual</option>
                  <option value='seriuosly'>seriuosly</option>
                  <option value='critical'>critical</option>
              </select>
          </fieldset>
          <textarea className="form__text-area" {...register("taskText")} placeholder="Add task text" spellCheck="true"></textarea>
          <div className="form__file-wrapper">
              <label className="form__input-label" htmlFor="file">
                  <span className="form__input-icon-wrapper"><img className="popup__form-load-icon" src={Upload} alt="select files"></img></span>
                  <span className="form__input-file-text">Upload files...</span>
              </label>
              <input className="form__input-file" id="file" name="file" type="file" multiple />

          </div>
          <button type="submit" className="form__button-submit button">Add</button>
      </form>
  )
}

export default Form