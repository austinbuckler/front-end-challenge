import React, { Component } from 'react'
import Transaction from './Transaction'
import Filter from './Filter'

import './style.css'

export default ({ transactions=[] }) => (
	<div>
		<h2 className="count">{transactions.length} Transactions</h2>
		
		<ul>
			{
				transactions.map(transaction => (
					<Transaction key={transaction.transactionId} {...transaction} />
					))
			}
		</ul>
	</div>
	)