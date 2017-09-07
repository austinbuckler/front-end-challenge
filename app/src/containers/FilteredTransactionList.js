import { connect } from 'react-redux'
import TransactionList from 'components/user/transaction-list'

const getVisibleTransactions = (transactions, filters) => {
	
}

const mapStateToProps = state => {
	return {
		transactions: getVisibleTransactions(state.transactionData, state.transactionFilters)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		// TODO
	}
}

const FilteredTransactionList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TransactionList)

export default FilteredTransactionList