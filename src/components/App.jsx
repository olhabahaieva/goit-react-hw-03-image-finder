import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from './api/getImages';


class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  onSubmit = async () => { // Use an arrow function to automatically bind `this`
    const data = await getImages();
    // console.log(data);
    this.setState({ images: data.hits });
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
