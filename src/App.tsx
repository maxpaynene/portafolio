import React from 'react';
import './App.css';
import AxiosPromise from './Component/AxiosPromise';

const App: React.FC = () => {

  return (
    <div>
      <video loop autoPlay muted className="videoCss">
        <source src="/video/video.mp4" type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
  
}

export default App;
