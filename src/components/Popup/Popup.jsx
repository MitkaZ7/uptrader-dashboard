import React from 'react'



const Popup = ({ isOpen, onClose, onSubmit, title, children }) => {

  // создание коллекции тестовой для фб



  // const [value, setValue] = useState('');
  // const handlerInput = (evt) => {
  //   setValue(evt.target.value);
  //   console.log(value)
  // }
  // const handlerSumbit = (evt) => {
  //   evt.preventDefault();
  //   let data = new FormData(evt.target)
  //   console.log(data)
  //   // let data = {
  //   //   message: value,
  //   // }
  //   // try {
  //   //   addDoc(ref,data)
  //   // } catch (e) {
  //   //   console.log(e)
  //   // }
  // }
  return (
    <div className={`popup ${isOpen ? 'popup_state_open' : ''}`}>
      <div className="popup__container">
        <button className="popup__button-close button" type="button" onClick={onClose}></button>
        {children}
        {/* <form id="form" action='#' className='popup__form' onSubmit={handlerSumbit}>
          <h3 className='popup__title'>Add new task</h3>
          <fieldset className='popup__fieldset'>
           {children}
            <input className="popup__form-input"
             type="text"
             placeholder="Insert task title"
             value={value}
             name='task-title'
            onChange={handlerInput}
            />
            <select name='projects-list' className='popup__form-select'>
              <option value=''>Select a project</option>
              <option value="TODO React SPA">TODO React SPA</option>
              <option value="Dashboard React SPA">Dashboard React SPA</option>
              <option value="Vue weather App">Vue weather App</option>
            </select>
            <select name='task-priority' className='popup__form-select'>
              <option value=''>Assign priority</option>
              <option>usual</option>
              <option>seriuosly</option>
              <option>critical</option>
            </select>
          </fieldset>
          <textarea className="popup__form-text-area"
            type="text"
            placeholder="Add task text"
            spellCheck="true"
          >
          </textarea>
          <div className="popup__form-file-container">
            <label className="popup__form-label" htmlFor="file">
              <span className="popup__form-file-upload-icon-wrap"><img className="popup__form-load-icon" src={Upload} alt="select files"></img></span>
              <span className="popup__form-file-upload-text">Upload files...</span>
            </label>
            <input id="file" name="file" type="file" className="popup__form-input-file" multiple />

          </div>
         
          

          <button type="submit" className="popup__button-submit button">Add</button>
        </form> */}
      </div>
    </div>

  )
}

export default Popup
