import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import getImages from './api/getImages';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    query: '',
    largeImageURL: null,
  };

  onSubmit = async query => {
    this.setState({ isLoading: true });
    try {
      const images = await getImages(query);
      this.setState({ images, isLoading: false });
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ isLoading: false });
    }
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  openModal = largeImageURL => { 
    this.setState({
      largeImageURL: largeImageURL, 
    });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, page, isLoading, largeImageURL, tags } = this.state;

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
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ImageGallery images={images} page={page} openModal={this.openModal} />
            {images.length !== 0 && <Button onClick={this.onLoadMore} />}
          </>
        )}
        {largeImageURL !== null && <Modal largeImageURL={largeImageURL} tags={tags} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default App;
