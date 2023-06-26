import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ( {url, tags, onClick} ) => {
    return (
      <li className={css.galleryItem} onClick={onClick}>
          <img
            className={css.galleryItemImage}
            src={url}
            alt={tags}
          />
      </li>
    );
};

export default ImageGalleryItem;
