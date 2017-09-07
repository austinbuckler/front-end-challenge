import React, { Component } from 'react';

import './style.css'

import { connect } from 'react-redux'

import Navigation from 'components/navigation'
import UserAvatar from 'components/user/avatar'

import BankCard from 'components/bank-card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
        <BankCard balance={1230.89} />
      </div>
    );
  }
}

export default App;
