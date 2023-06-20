import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { images } = this.props;
    return (
      <li className={css.galleryItem}>
        {images.map(image => (
          <img
            key={image.id}
            className={css.galleryItemImage}
            src={image.pageUrl}
            alt={image.tags}
          />
        ))}
      </li>
    );
  }
}

export default ImageGalleryItem;
