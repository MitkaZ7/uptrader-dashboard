import React from 'react'
import Popup from '../Popup/Popup'
import Form from '../Form/Form'
const AddTaskPopup = ({ isOpen, setOpen }) => {
  return (
    <Popup isOpen={isOpen} setOpen={setOpen}>
        <Form/>
    </Popup>
  )
}

export default AddTaskPopup