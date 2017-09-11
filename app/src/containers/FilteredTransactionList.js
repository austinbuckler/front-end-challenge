import { connect } from 'react-redux'

import TransactionList from 'components/user/transaction-list'

const getVisibleTransactions = (transactions, filters) => transactions
		.filter(t => filters.indexOf(t.accountId) === -1)
		.filter(t => filters.indexOf(t.category) === -1)

const mapStateToProps = state => {
	return {
		transactions: getVisibleTransactions(state.transactionData.transactions, state.filtered)
	}
}

const FilteredTransactionList = connect(
	mapStateToProps
)(TransactionList)

export default FilteredTransactionList