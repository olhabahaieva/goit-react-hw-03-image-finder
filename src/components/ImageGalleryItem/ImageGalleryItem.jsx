// import React from 'react';
// import css from './ImageGalleryItem.module.css';

// export const ImageGalleryItem = (images) => {

//   if(images > 0){
//     return (
//       <li className={css.galleryItem}>
//           {images.map(image => (
//             <img
//               key={image.id}
//               className={css.galleryItemImage}
//               src={image.pageUrl}
//               alt={image.tags}
//             />
//           ))}
//         </li>
//     )
//   }
 
// }

// export default ImageGalleryItem;
import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images }) => {
  console.log(images)
  if (images.length > 0) {
    return (
      <li className={css.galleryItem}>
        {images.map((image) => (
          // console.log(image)
          <img
            key={image.id}
            className={css.galleryItemImage}
            src={image.largeImageURL}
            alt={image.tags}
          />
        ))}
      </li>
    );
  } else {
    return null; // Return null if there are no images
  }
};

export default ImageGalleryItem;




