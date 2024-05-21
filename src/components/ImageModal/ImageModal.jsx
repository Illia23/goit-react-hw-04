import { useEffect } from 'react';
import ReactModal from 'react-modal';
import modalStyles from './ImageModal.module.css';

const ImageModal = ({ closeModal, url }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ReactModal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={modalStyles.container}
      overlayClassName={modalStyles.overlay}
      onClick={handleClickOutside} 
    >
      <img className={modalStyles.img} src={url} alt="modal_img" />
    </ReactModal>
  );
};

export default ImageModal;
