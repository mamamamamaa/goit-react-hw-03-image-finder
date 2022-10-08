import { Component } from 'react';
import { createPortal } from 'react-dom';

import { ModalContent, Backdrop } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClose);
  }

  onBackdropClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  onEscapeClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const modalRoot = document.querySelector('#modal-root');

    const { children } = this.props;

    return createPortal(
      <Backdrop onClick={this.onBackdropClose}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
