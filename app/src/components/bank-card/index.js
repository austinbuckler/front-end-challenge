import React from 'react'
import './style.css'

export default ({ balance, disabled=false }) => (
	<div className={ disabled ? 'card card--disabled' : 'card' }>
		<h1 className="balance">{ balance }</h1>
		<h2 className="subtext">Balance</h2>
	</div>
	)