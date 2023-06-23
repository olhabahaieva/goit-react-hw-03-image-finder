import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images)
  if (images.length > 0) {
    console.log(images)
    return (
      <ul className={css.gallery}>
        {images.map(({ image }) => (

          <ImageGalleryItem key={image.id} url={image.previewURL} image={image} />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ImageGallery;