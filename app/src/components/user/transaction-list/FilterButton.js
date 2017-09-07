import React from 'react'

export default ({ activeFilters, onClick }) => (
	<div>
		{
			activeFilters
				.map(filter => (
					<div className=`active-filter active-filter--${filter.toLowerCase().replace(/\s/g, '_')}`></div>
				))
				
		}
		<button onClick={() => onClick}>Filter</button>
	</div>
	)