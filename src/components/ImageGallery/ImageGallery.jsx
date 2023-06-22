import React from 'react';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => { // Destructure the props object to access images
  // console.log(images)
  if (images.length > 0) { // Check if images is an array and has elements
    return (
      <ul className={css.gallery}> {/* Wrap the list items in a ul element */}
        <ImageGalleryItem images={images}/>
      </ul>
    );
  }
  // return null; 
};

export default ImageGallery;
