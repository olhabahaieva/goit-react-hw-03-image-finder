import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ( {url, tags} ) => {
    return (
      <li className={css.galleryItem}>
          <img
            className={css.galleryItemImage}
            src={url}
            alt={tags}
          />
      </li>
    );
};

export default ImageGalleryItem;
