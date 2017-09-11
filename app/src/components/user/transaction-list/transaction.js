import React from 'react'

import './style.css'

export default ({ accountId, transactionDate, description, amount, withdrawl, deposit, runningBalance, category, transactionId }) => {
	
	/**
	 * Source: https://stackoverflow.com/a/6134070
	 */
	let fmtCurrency = (amt) => parseFloat(Math.round(amt * 100) / 100).toFixed(2)
	
	return (
		<li className="transaction">
			<h2 className="transaction__description">{ description }</h2>
			<h3 className="transaction__amount">${ fmtCurrency(amount) }</h3>
		</li>
	)
}