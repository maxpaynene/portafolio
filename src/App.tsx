import React from 'react';
import './App.css';
import AxiosPromise from './Component/logo/AxiosPromise';

const App: React.FC = () => {

  return (
    <div>
      <div>
        <AxiosPromise/>
      </div>    
      <div>        
        {/* Video background */}
        <video loop autoPlay muted className="videoCss">
          <source src="/video/video3.mp4" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
    
  );
  
}

export default App;
