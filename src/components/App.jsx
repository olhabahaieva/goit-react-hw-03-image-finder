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

  componentDidMount() {
    const savedState = this.largeImageURL;
    this.setState(savedState)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.largeImageURL !== this.state.largeImageURL){
      this.setState({
        largeImageURL: this.largeImageURL
      })
    }
  }


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

  openModal = () =>{
    this.setState(() => ({
      largeImageURL: this.largeImageURL,
    }));
  }

  render() {
    const { images, page, isLoading, largeImageURL } = this.state;

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
            <ImageGallery images={images} page={page} openModal={this.openModal}/>
            {images.length !== 0 && <Button onClick={this.onLoadMore} />}
          </>
        )}
        {largeImageURL !== null && <Modal largeImageURL={largeImageURL}/>}
      </div>
    );
  }
}

export default App;
