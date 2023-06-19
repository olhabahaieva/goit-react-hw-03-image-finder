import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from 'getImages';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  onSubmit() {
    getImages();
  }

  render() {
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
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
