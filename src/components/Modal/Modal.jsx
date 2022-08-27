import { Overlay, ModalForm } from './Modal.styled';
import * as ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, tags } = this.props;

    return ReactDOM.createPortal(
      <Overlay onClick={this.onOverlayClick}>
        <ModalForm>
          <img src={url} alt={tags} />
        </ModalForm>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
