import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import { Component } from "react";

class App extends Component {
  state = {
    images:[]
  };
  
  render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Searchbar/>
      <ImageGallery>
        <ImageGalleryItem/>
      </ImageGallery>

      
    </div>
  );
};
}

export default App;