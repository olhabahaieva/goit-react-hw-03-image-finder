import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ( {image} ) => {
  console.log(image)
  if (image.length > 0) {
    return (
      <li className={css.galleryItem}>
        {image.map((el) => (
          // console.log(el)
          <img
            key={el.id}
            className={css.galleryItemImage}
            src={el.largeImageURL}
            alt={el.tags}
          />
        ))}
      </li>
    );
  } else {
    return null;
  }
};

export default ImageGalleryItem;




