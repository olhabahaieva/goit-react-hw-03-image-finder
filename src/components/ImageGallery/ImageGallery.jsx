import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images.hits)
  const elements = images.hits.map((el) => <ImageGalleryItem key={el.id} url={el.previewURL} {...el} />)
  // 
    return (
    <ul className={css.gallery}>
      {elements}
      {/* {images.hits.map(({ image }) => (
        <ImageGalleryItem key={image.id} url={image.previewURL} image={image} />
      ))} */}
    </ul>
  );
};

export default ImageGallery;
