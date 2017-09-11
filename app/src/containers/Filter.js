import React from 'react'
import { connect } from 'react-redux'

import { clearFilters, toggleFilter } from 'actions'
import StatefulButton from 'components/StatefulButton'

let Filter = ({ dispatch, accounts, categories, filtered }) => {

	let mapAccounts = accounts.map(account => {
		const key = account.accountId
		const display = account.accountName
		const disabled = filtered.includes(account.accountName)
		return <StatefulButton key={ key } text={ display } onClick={ () => dispatch(toggleFilter(display)) } disabled={ disabled } />
	})
	
	let mapCategories = categories.map(category => {
		const display = category.replace(/_/g, ' ')
		const disabled = filtered.includes(display)
		return <StatefulButton key={ category } text={ display } onClick={ () => dispatch(toggleFilter(display)) } disabled={ disabled } />
	})
	
	let clearFiltersButton = () => {
		const filteredCount = filtered.length
		if (filteredCount > 0) {
			return <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>
		}
	}
		
	return (
		<div>
			<h2>Accounts</h2>
			{ mapAccounts }
			<h2>Categories</h2>
			{ mapCategories }
			{ clearFiltersButton() }
		</div>
	)
}

Filter = connect()(Filter)

export default Filter