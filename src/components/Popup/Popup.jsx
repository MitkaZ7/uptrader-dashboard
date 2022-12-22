import React,{ useEffect } from 'react'



const Popup = ({ isOpen, setOpen, children }) => {
 
  function closePopup(evt) {
    setOpen(false);
    
  }
  const closeByOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  }
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closePopup()
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  
  return (
    <div className={`popup ${isOpen ? 'popup_state_open' : ''}`} onClick={closeByOverlayClick}>
      <div className="popup__container">
        <button className="popup__button-close button" type="button" onClick={closePopup}></button>
        {children}
      </div>
    </div>

  )
}

export default Popup
