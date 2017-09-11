import React from 'react'
import { connect } from 'react-redux'

import { clearFilters, toggleFilter } from 'actions'
import StatefulButton from 'components/StatefulButton'

const style = {
	filter: {
		backgroundColor: '#3b3742',
		padding: 12,
		marginBottom: 12
	},
	title: {
		color: '#f7f7f7',
		fontSize: 14,
		margin: '0 0 6px 0',
		fontWeight: 300,
		textTransform: 'uppercase',
		letterSpacing: 0.4
	},
	container: {
		display: 'flex',
		marginBottom: 12,
		flexWrap: 'wrap'
	},
	clearAll: {
		width: '100%',
		height: 32,
		backgroundColor: '#FFF5C3',
		border: 0,
		textTransform: 'uppercase',
		borderRadius: 2,
		fontWeight: 400
	}
}

let Filter = ({ dispatch, accounts, categories, filtered }) => {

	let mapAccounts = accounts.map(account => {
		const key = account.accountId
		const display = account.accountName
		const disabled = filtered.includes(key)
		return <StatefulButton key={ key } text={ display } onClick={ () => dispatch(toggleFilter(key)) } disabled={ disabled } />
	})
	
	let mapCategories = categories.map(category => {
		const display = category.replace(/_/g, ' ')
		const disabled = filtered.includes(category)
		return <StatefulButton key={ category } text={ display } onClick={ () => dispatch(toggleFilter(category)) } disabled={ disabled } />
	})
	
	let clearFiltersButton = () => {
		const filteredCount = filtered.length
		if (filteredCount > 0) {
			return <button style={style.clearAll} onClick={() => dispatch(clearFilters())}>Clear Filters</button>
		}
	}
		
	return (
		<div style={style.filter}>
			<h2 style={style.title}>Accounts</h2>
			<div style={style.container}>
				{ mapAccounts }
			</div>
			<h2 style={style.title}>Categories</h2>
			<div style={style.container}>
				{ mapCategories }
			</div>
			<div style={style.container}>
				{ clearFiltersButton() }
			</div>
		</div>
	)
}

const mapStateToProps = state => ({ ...state })

Filter = connect(mapStateToProps)(Filter)

export default Filter