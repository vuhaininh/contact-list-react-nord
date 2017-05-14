import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ContactApp from './components/ContactApp';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="App-header">
            <div className="row">
              <img src={logo} className="App-logo" alt="logo" /><h4>Nord Software </h4>
            </div>
          </div>
          <Provider store={store}>
            <ContactApp/>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
