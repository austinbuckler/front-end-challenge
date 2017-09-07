import React, { Component } from 'react';

import './style.css'

import { connect } from 'react-redux'

import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import TransactionList from 'components/user/transaction-list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
        <TotalBalance balance={1230.39} />
        <TransactionList transactions={[
            {
              transactionId: 'asdfasdfasdf',
              withdrawl: 32
            },
            {
              transactionId: 'fdsafdsafdsa',
              deposit: 64
            }
            
          ]}/>
      </div>
    );
  }
}

export default App;
