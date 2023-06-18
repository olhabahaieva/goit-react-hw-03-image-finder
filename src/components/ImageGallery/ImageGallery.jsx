import React, { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem images={images} />
      </ul>
    );
  }
}

export default ImageGallery;
