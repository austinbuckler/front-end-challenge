import { connect } from 'react-redux'

import TransactionList from 'components/user/transaction-list'

const getFilterKey = (filter) => filter.split('::')[0]
const isFilterType = (filter, category) => filter.split('::')[1] === category

const getVisibleTransactions = (transactions, filters) => {
	const filterKeys = filters.map(f => getFilterKey(f))
	console.log(filterKeys)
	const res = transactions
			.filter(t => filterKeys.indexOf(t.accountId) === -1)
			.filter(t => filterKeys.indexOf(t.category) === -1)
	console.log(res)
	return res
}

const mapStateToProps = state => {
	return {
		transactions: getVisibleTransactions(state.transactionData.transactions, state.filtered)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// TODO
	}
}

const FilteredTransactionList = connect(
	mapStateToProps
	// mapDispatchToProps
)(TransactionList)

export default FilteredTransactionList