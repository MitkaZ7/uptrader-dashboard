import React from 'react'
import Popup from '../Popup/Popup'
import Form from '../Form/Form'
const AddTaskPopup = ({ isOpen, setOpen, onClose }) => {

  return (
    
    <Popup isOpen={isOpen} setOpen={setOpen} onClose={onClose}>
        <Form/>
    </Popup>
  )
}

export default AddTaskPopup