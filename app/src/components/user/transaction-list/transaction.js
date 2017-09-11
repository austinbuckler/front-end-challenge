import React from 'react'

import './style.css'

export default ({ accountId, transactionDate, description, amount, withdrawl, deposit, runningBalance, category="", transactionId }) => {
	
	/**
	 * Source: https://stackoverflow.com/a/6134070
	 */
	let fmtCurrency = (amt) => parseFloat(Math.round(amt * 100) / 100).toFixed(2)
	let fmtCategory = (category) => category.replace(/_/g, ' ')
	
	return (
		<li className="transaction">
			<div className="transaction__primary">
				<h2 className="transaction__description">{ description }</h2>
				<h3 className="transaction__amount">{ fmtCurrency(amount) }</h3>
			</div>
			<div className="transaction__secondary">
				<strong className="transaction__category">{ fmtCategory(category) }</strong>
				<span className="transaction__date">Date: { transactionDate }</span>
			</div>
		</li>
	)
}