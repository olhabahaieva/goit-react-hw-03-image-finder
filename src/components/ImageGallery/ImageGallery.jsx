import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  if (images.length > 0) {
    return (
      <ul className={css.gallery}>
        {images.map(({ image }) => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ImageGallery;
