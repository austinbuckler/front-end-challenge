import { connect } from 'react-redux'

import { sortTransactionsAsc, sortTransactionsDesc } from 'actions'
import TransactionList from 'components/user/transaction-list'

const getVisibleTransactions = (transactions, filters) => transactions
		.filter(t => filters.indexOf(t.accountId) === -1)
		.filter(t => filters.indexOf(t.category) === -1)

const mapStateToProps = state => {
	return {
		transactions: getVisibleTransactions(state.transactionData.transactions, state.filtered),
		filtered: state.filtered
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleSort: (state) => {
			if (state) {
				dispatch(sortTransactionsAsc())
			} else {
				dispatch(sortTransactionsDesc())
			}
		}
	}
}

const FilteredTransactionList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionList)

export default FilteredTransactionList