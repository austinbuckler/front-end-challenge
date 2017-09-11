import React, { Component } from 'react';

import './style.css'
import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import FilteredTransactionList from 'containers/FilteredTransactionList'
import Filter from 'containers/Filter'
import FilterButton from 'components/FilterButton'
import SortButton from 'components/SortButton'

export default ({ accounts, transactionData, categories, filtered, fetching, toggleSort }) => {
 
 const totalAccountBalance = accounts.reduce((sum, value) => (value.balance + sum), 0)
 
 return fetching ? (<div className="App">Fetching...</div>) : (
    <div className="App">
      <Navigation>
        <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
      </Navigation>
      <TotalBalance balance={ totalAccountBalance } />
      <SortButton onSort={ (state) => toggleSort(state) } />
      <FilterButton activeFilters={ filtered } />
      <Filter />
      <FilteredTransactionList />
    </div>
 )
  
}
