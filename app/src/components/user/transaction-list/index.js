import React from 'react'
import Transaction from './Transaction'

import './style.css'

export default ({ transactions=[] }) => (
	<div>
		<h2 className="count">{ transactions.length } Transactions</h2>
		<ul className="list">
			{
				transactions.map(transaction => (<Transaction key={transaction.transactionId} {...transaction} />))
			}
		</ul>
	</div>
)