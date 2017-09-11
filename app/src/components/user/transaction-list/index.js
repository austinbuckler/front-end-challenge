import React, { Component } from 'react'
import Transaction from './Transaction'

import './style.css'

export default ({
	earliestTransactionDate=null,
	latestTransactionDate=null,
	daysSpanByTransaction=-1,
	transactionCount=-1,
	transactions=[]
}) => (
	<div>
		<ul className="list">
			{transactions.map(transaction => (
					<Transaction key={transaction.transactionId} {...transaction} />
					))}
		</ul>
	</div>
	)