import { useEffect } from 'react';
import modal from './Modal.module.css'
const Modal = ({ closeModal, url }) => {
 

  useEffect(() => {

    const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
      }
  };
    window.addEventListener('keydown', handleKeyDown);
  return ()=> window.removeEventListener('keydown', handleKeyDown);
    
  }, [closeModal])
  
   const handleClick = e => {
    if (e.target === e.currentTarget) {
     closeModal();
       }
    
  };

 

  

  

    return (
      <div className={modal.container} onClick={handleClick}>
        <img className={modal.img} src={url} alt="modal_img" />
      </div>
    );
  
}

export default Modal;