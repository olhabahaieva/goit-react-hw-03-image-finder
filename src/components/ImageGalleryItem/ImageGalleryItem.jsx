import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    console.log(images);
    return (
      <li className={css.galleryItem}>
        <img
          className={css.galleryItemImage}
          src={images.url}
          alt="images"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
