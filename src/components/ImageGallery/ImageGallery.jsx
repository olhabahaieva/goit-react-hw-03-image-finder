import { Component } from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem images='hjjhhjhjj' />
      </ul>
    );
  }
}

export default ImageGallery;
