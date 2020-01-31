import React from 'react';
import './App.css';
import Logo from './Component/logo/Logo';

const App: React.FC = () => {

  return (
    <div>        
      <div>        
        {/* Video background */}
        <video loop autoPlay muted className="videoCss">
          <source src="/video/video3.mp4" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: "center"
      }}>
        <Logo/>
      </div>  
    </div>
    
  );
  
}

export default App;
