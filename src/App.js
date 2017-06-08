import React, { Component } from 'react';
import { createClient } from 'contentful-management';

import { spaceId, accessToken } from './config.env.local.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {    
    // let client = createClient({
    //   spaceId,
    //   accessToken
    // });

    // client.getSpace(spaceId)
    //   .then(space => {

    //   space.createEntry('note', {
    //     fields: {
    //       content: {
    //         'en-US': 'test test'
    //       }
    //     }
    //   });

    //   return space
    // });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
