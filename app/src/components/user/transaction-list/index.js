import React, { Component } from 'react'
import Transaction from './Transaction'
import Toolbar from './Toolbar'
import Filter from 'containers/Filter'

import './style.css'

export default class TransactionList extends Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			showFilters: false
		}
		this.onFilterToggle = this.onFilterToggle.bind(this)
		this.onSortToggle = this.onSortToggle.bind(this)
	}
	
	onFilterToggle() {
		const { showFilters } = this.state
		this.setState({ showFilters: !showFilters })
	}
	
	onSortToggle(sortState) {
		console.log(sortState)
		this.props.toggleSort(sortState)
	}
	
	render() {
		const { showFilters, sortBy } = this.state
		const { transactions, filtered } = this.props
		const transactionCount = transactions.length
		return (
			<div>
				<Toolbar
					transactionCount={ transactionCount }
					filtered={ filtered }
					onFilterToggle={ this.onFilterToggle }
					onSortToggle={ this.onSortToggle } />
				{ showFilters ? <Filter /> : null }
				<ul className="list">
					{
						transactions.map(transaction => (<Transaction key={transaction.transactionId} {...transaction} />))
					}
				</ul>
			</div>	
		)
	}
	
}