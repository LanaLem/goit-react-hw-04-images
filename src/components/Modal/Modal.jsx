import { Overlay, ModalForm } from './Modal.styled';
import * as ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ url, tags, closeModal }) => {
  useEffect(() => {
    const handleClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleClose);

    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [closeModal]);

  const onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onOverlayClick}>
      <ModalForm>
        <img src={url} alt={tags} />
      </ModalForm>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
