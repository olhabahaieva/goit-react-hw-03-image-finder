import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from './api/getImages';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading:false,
  };

  onSubmit = async (query) => {
    try {
      const images = await getImages(query);
      this.setState({ images });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, page } = this.state; 

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
        <ImageGallery images={images} page={page}/>
        {images.length !== 0 && <Button onClick={this.onLoadMore}/>}
      </div>
    );
  }
}

export default App;
