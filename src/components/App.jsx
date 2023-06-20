import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  //fetchRequest
  //setState

  render() {

   const {images,pages}=this.state

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar />
        <ImageGallery images={images} pages={pages}/>
      </div>
    );
  }
}

export default App;
