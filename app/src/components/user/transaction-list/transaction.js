import React from 'react'

import './style.css'


/**
 * Source: https://stackoverflow.com/a/6134070
 */
function fmtCurrency(amt) {
	return parseFloat(Math.round(amt * 100) / 100).toFixed(2);
}

export default ({ accountId, transactionDate, description, amount, withdrawl, deposit, runningBalance, category, transactionId }) => (
	<li className="transaction">
		<h2 className="transaction__description">{ description }</h2>
		<h3 className="transaction__amount">${ fmtCurrency(amount) }</h3>
	</li>
	)