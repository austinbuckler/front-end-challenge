import React, { Component } from 'react';

import './style.css'
import { fetchData } from 'actions'
import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import TransactionList from 'components/user/transaction-list'

class App extends Component {

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }
  
  render() {
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
        <TotalBalance balance={1230.39} />
        <TransactionList transactions={[]} />
      </div>
    );
  }
}

export default App;
