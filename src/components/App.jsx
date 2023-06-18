import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export const App = () => {
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
      <ImageGallery/>
    </div>
  );
};
