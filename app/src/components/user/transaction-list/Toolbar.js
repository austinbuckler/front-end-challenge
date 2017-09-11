import React from 'react'

import FilterButton from 'components/FilterButton'
import SortButton from 'components/SortButton'

export default ({ transactionCount=0, onSortToggle, filtered=[], onFilterToggle }) => (
	<div className="toolbar">
		<h2 className="count">{ transactionCount } Transactions</h2>
		<div className="toolbar__right">
			<SortButton onToggle={ onSortToggle } />
			<FilterButton onToggle={ onFilterToggle } activeFilters={ filtered } />
		</div>
	</div>
)