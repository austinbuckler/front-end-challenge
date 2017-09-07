import React, { Component } from 'react';
import './style.css';

import Navigation from './components/navigation'
import UserAvatar from './components/user-avatar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
      </div>
    );
  }
}

export default App;
