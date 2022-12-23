import React, { useState } from 'react'
import Upload from '../../assets/icons/upload.svg'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
// import Parse from 'parse/dist/parse.min.js';

// // Your Parse initialization configuration goes here
// const config = {
//     app_id: process.env.REACT_APP_PARSE_APP_ID,
//     host_url: process.env.REACT_APP_PARSE_HOST_URL,
//     js_key: process.env.REACT_APP_PARSE_JS_KEY,
// }
// // const PARSE_APPLICATION_ID = 'jbXQTwt2jcCYNqzkAY2lQuJccGxa1Mgh4eAGNrsi';
// // const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
// // const PARSE_JAVASCRIPT_KEY = 'VViIeoejFGyuJ3Ztz2gzcFkHVcthTH3JLVtv36cO';
// Parse.initialize(config.app_id, config.js_key);
// Parse.serverURL = config.host_url;


const Form = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   
    const onSubmit = async data => {
        // console.log(data)
        // dispatch(createTask(data))
        // api.addTask(data)
        // const person = new Parse.Object('task');
        // person.set('title','first');
        // await person.save();
        // alert('saved');
        
    };
    
    
   
    
  return (
      <form id="form" action='#' className='form' onSubmit={handleSubmit(onSubmit)}>
          <h3 className='form__title'>Add new task</h3>
          <fieldset className='form__fieldset'>
              <input className="form__input" {...register("title")} />
              <select className='form__select' {...register("project")}>
                  <option value='noNameProject'>Select a project</option>
                  <option value="TODO React SPA">TODO React SPA</option>
                  <option value="Dashboard React SPA">Dashboard React SPA</option>
                  <option value="Vue weather App">Vue weather App</option>
              </select>
              <select className='form__select' {...register("priority")}>
                  <option value='usual'>Assign priority</option>
                  <option value='usual'>usual</option>
                  <option value='seriuosly'>seriuosly</option>
                  <option value='critical'>critical</option>
              </select>
          </fieldset>
          <textarea className="form__text-area" {...register("description")} placeholder="Add task text" spellCheck="true"></textarea>
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