import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

export const ImageGallery = (images) => {
  return (
    <ul className={css.gallery}>
    <ImageGalleryItem images={images}/>
  </ul>
  )
}

export default ImageGallery;

