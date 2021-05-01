import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onSubmit = (event: any) => {
    event.preventDefault();
    console.log('qwerty!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmit}>
          <div className="abc">
            <div className="top">
              <button>PING</button>
            </div>
            <div>
              <div className="middle">
                <div className="input-container">
                  <label>INSERT IP HERE</label>
                  <input type="text" className="ip-input" />
                </div>
              </div>
              <div className="bottom">
                <div className="checkbox-container">
                  <label>
                    <input type="checkbox" />
                    Host
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
