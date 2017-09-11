import React from 'react'

export default ({ activeFilters, onClick }) => (
	<div>
		{
			activeFilters
				.map(filter => {
					let filterName = filter.toLowerCase().replace(/\s/g, '_')
					return (<div key={filterName} className={`active-filter active-filter--${filterName}`}></div>)
				})

		}
		<button onClick={() => onClick}>Filter</button>
	</div>
	)