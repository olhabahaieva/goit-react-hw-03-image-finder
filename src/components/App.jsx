import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { Component } from 'react';
import getImages from '../getImages';

class App extends Component {
  state = {
    images: [],
  };

  handleSearch = async (searchQuery) => {
    const images = await getImages(searchQuery);
    this.setState({ images });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSearch={this.handleSearch}/>
        <ImageGallery images={this.state.images}/>
      </div>
    );
  }
}

export default App;
