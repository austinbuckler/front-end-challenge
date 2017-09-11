import React, { Component } from 'react'

import Filter from 'containers/Filter'

const style = {
	toggleButton: {
		width: 32,
		height: 32,
		background: 'none',
		border: 'none',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 16,
		cursor: 'pointer'
	}
}

export default ({ onToggle, activeFilters=[] }) => (
	<div>
		{
			activeFilters.map(filter => {
				let filterName = filter.toLowerCase().replace(/\s/g, '_')
				return (<div key={filterName} className={`active-filter active-filter--${filterName}`}></div>)
			})
		}
		<button style={ style.toggleButton } onClick={ onToggle }>
			<i className="fa fa-filter" aria-hidden="true"></i>
		</button>
	</div>
)