import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images.hits);
  if (images.hits) {
    const elements = images.hits.map(el => (
      <ImageGalleryItem key={el.id} url={el.webformatURL} tags={el.tags} />
    ));

    return <ul className={css.gallery}>{elements}</ul>;
  }

  return null;
};

export default ImageGallery;
