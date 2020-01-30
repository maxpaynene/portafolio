import React from 'react';
import './App.css';
import AxiosPromise from './Component/AxiosPromise';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AxiosPromise/>
      </header>
    </div>
  );
}

export default App;
