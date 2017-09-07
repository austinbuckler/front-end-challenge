import React, { Component } from 'react';

import './style.css'
import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import TransactionList from 'components/user/transaction-list'

class App extends Component {
  
  render() {
    const { accounts, transactionData, categories } = this.props
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
        <TotalBalance balance={1230.39} />
        <TransactionList {...transactionData} />
      </div>
    );
  }
}

export default App;
