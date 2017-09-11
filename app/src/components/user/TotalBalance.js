import React from 'react'

const style = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: 192
	},
	balance: {
		fontSize: 44,
		fontWeight: 100,
		margin: 0,
		textAlign: 'center'
	},
	total: {
		letterSpacing: 1,
		textTransform: 'uppercase',
		fontWeight: 600,
		fontSize: 14,
		textAlign: 'center'
	}
}

export default ({ balance }) => (
	<div style={style.container}>
		<h1 style={style.balance}>${ balance }</h1>
		<span style={style.total}>Total Balance</span>
	</div>
	)