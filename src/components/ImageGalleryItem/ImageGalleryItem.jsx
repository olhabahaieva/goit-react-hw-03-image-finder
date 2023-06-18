import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.galleryItem}>
        <img className={css.galleryItemImage} src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
