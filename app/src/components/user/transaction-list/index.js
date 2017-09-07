import React, { Component } from 'react'
import Transaction from './Transaction'
import Filter from './Filter'

import './style.css'

export default ({
	earliestTransactionDate=null,
	latestTransactionDate=null,
	daysSpanByTransaction=-1,
	transactionCount=-1,
	transactions=[]
}) => (
	<div>
		<h2 className="count">{transactionCount} Transactions</h2>
		
		<ul>
			{transactions.map(transaction => (
					<Transaction key={transaction.transactionId} {...transaction} />
					))}
		</ul>
	</div>
	)