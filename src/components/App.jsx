import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from 'getImages';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  async onSubmit() {
    await getImages();
    this.setState(() => {
      return {
        images: this.state.images,
      };
    });
  }
  //fetchRequest
  //setState

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
        <Searchbar onSubmit={this.onSubmit} images={this.state.images} />
        <ImageGallery images={this.state.images}/>
      </div>
    );
  }
}

export default App;
