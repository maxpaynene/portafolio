import React from 'react';
import './App.css';
import AxiosPromise from './Component/AxiosPromise';

const App: React.FC = () => {

  return (
    <div className="App">
      <video width="400" loop autoPlay>
        <source src="//player.vimeo.com/video/174002648?title=0&portrait=0&byline=0&autoplay=1" type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
      <header className="App-header">
        <AxiosPromise/>
      </header>
    </div>
  );
  
}

export default App;
