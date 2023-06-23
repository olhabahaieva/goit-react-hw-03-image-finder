import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images.hits);
  if (images.hits) {
    const elements = images.hits.map((el) => (
      <ImageGalleryItem key={el.id} url={el.previewURL} image={el} />
    ));

    return <ul className={css.gallery}>{elements}</ul>;
  }

  return null; // Return null or a fallback component if `images.hits` is falsy
};

export default ImageGallery;
