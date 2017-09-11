import React, { Component } from 'react';

import './style.css'
import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import FilteredTransactionList from 'containers/FilteredTransactionList'

export default ({ accounts, transactionData, categories, filtered, fetching }) => {
 
 const totalAccountBalance = accounts.reduce((sum, value) => (value.balance + sum), 0)
 
 return fetching ? (<div className="App">Fetching...</div>) : (
    <div className="App">
      <Navigation>
        <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        Austin
      </Navigation>
      <TotalBalance balance={ totalAccountBalance } />
      <FilteredTransactionList />
    </div>
 )
  
}
