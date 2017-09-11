import React, { Component } from 'react';

import './style.css'
import Navigation from 'components/navigation'

import UserAvatar from 'components/user/avatar'
import TotalBalance from 'components/user/TotalBalance'
import TransactionList from 'components/user/transaction-list'
import Filter from 'containers/Filter'
import FilterButton from 'components/FilterButton'

class App extends Component {
  
  totalAccountBalance() {
    const { accounts } = this.props
    return accounts.reduce((sum, value) => (value.balance + sum), 0)
  }
  
  render() {
    const { accounts, transactionData, categories, filtered } = this.props
    const filteredCount = filtered.length;
    return (
      <div className="App">
        <Navigation>
          <UserAvatar imageURL="https://unsplash.it/32/32/?random" />
        </Navigation>
        <TotalBalance balance={this.totalAccountBalance()} />
        <h2 className="count">{transactionData.transactionCount} Transactions</h2>
        <FilterButton activeFilters={filtered} />
        <Filter accounts={accounts} categories={categories} filtered={filtered} />
        <TransactionList {...transactionData} />
      </div>
    );
  }
}

export default App;
