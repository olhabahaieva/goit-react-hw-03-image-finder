import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
