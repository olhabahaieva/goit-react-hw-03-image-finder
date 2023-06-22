import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  if (images.length > 0) {
    return (
      <ul className={css.gallery}>
        {images.map(({ image }) => (
          <li key={image.id} className={css.galleryItem}>
            <img
              className={css.galleryItemImage}
              src={image.largeImageURL}
              alt={image.tags}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ImageGallery;
