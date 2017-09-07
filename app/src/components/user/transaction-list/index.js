import React, { Component } from 'react'
import Transaction from './transaction'
import Filter from './filter'

import './style.css'

export default ({ transactions }) => (
	<div>
		<h2 className="count">34 Transactions</h2>
		<Filter />
		<ul>
			{
				transactions.map(transaction => (
					<Transaction key={transaction.transactionId} {...transaction} />
					))
			}
		</ul>
	</div>
	)