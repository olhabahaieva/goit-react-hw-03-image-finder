import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = (images) => {
  if(images > 0){
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
    )
  }
 
}

export default ImageGalleryItem;



