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
    this.setState(() => ({
      images: this.state.images,
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const { page } = this.state;
    if (prevQuery !== nextQuery || (prevState.page !== page && page !== 1)) {
      this.onSubmit(prevProps);
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

  onLoadMore = async () => {
    this.setState({ isLoading: true });
    try {
      const { query, page } = this.state;
      const newImages = await getImages(query, page + 1);
      this.setState(prevState => ({
        images: [prevState.images, newImages],
        page: prevState.page + 1,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error loading more images:', error);
      this.setState({ isLoading: false });
    }
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
            <ImageGallery
              images={images}
              page={page}
              openModal={this.openModal}
            />
            {images.length !== 0 && <Button onLoadMore={this.onLoadMore} />}
          </>
        )}
        {largeImageURL !== null && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default App;
