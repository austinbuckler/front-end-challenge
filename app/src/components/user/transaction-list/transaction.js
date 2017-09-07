import React from 'react'

export default ({ accountId, transactionDate, description, amount, withdrawl, deposit, runningBalance, category, transactionId }) => (
	<li className="transaction">
		withdrawl: {withdrawl}, dep: {deposit}
	</li>
	)