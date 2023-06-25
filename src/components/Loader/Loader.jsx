import { Component } from 'react';
import { Oval } from 'react-loader-spinner';

class Loader extends Component {
 
  render() {
    return (
      <Oval
        height={100}
        width={100}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }
}

export default Loader;
