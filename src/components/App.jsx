import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from '../getImages';

class App extends Component {
  state = {
    images: [],
    page: 1,
  };

  fetchImages = () => {
    const { images, page } = this.state;

    getImages(images, page)
      .then((img) => console.log(img)
      // {
        // const data = hits.map(({ id, webformatURL, largeImageURL, tags }) => {
        //   return {
        //     id,
        //     webformatURL,
        //     largeImageURL,
        //     tags,
        //   };
        // });
        // this.setState(({ images }) => ({
        //   images: [...images, ...data],
        //   // page: page + 1,
        // }));
      // }
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // handleSearch = async (searchQuery) => {
  //   const images = await getImages(searchQuery);
  //   console.log(images)
  //   this.setState({ images });
  // };

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
        <Searchbar onSearch={this.handleSearch} />
        <ImageGallery images={this.state.images} />
        
      </div>
    );
  }
}

export default App;
