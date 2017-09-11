import { combineReducers } from 'redux'
import {
	SORT_TRANSACTION_ASC,
	SORT_TRANSACTION_DESC,
	
	TOGGLE_FILTER,
	CLEAR_FILTERS,
	
	REQUEST_DATA,
	RECEIVE_DATA,
	FAILURE_DATA,
	
	UPDATE_ACCOUNTS,
	UPDATE_TRANSACTION_DATA,
	UPDATE_CATEGORIES
} from 'actions'

const accounts = (state = [], action) => {
	switch (action.type) {
		case UPDATE_ACCOUNTS: return [ ...state, ...action.payload ]
		default: return state
	}
}

const transactionData = (state = {
	earliestTransactionDate: null,
	latestTransactionDate: null,
	daysSpanByTransaction: -1,
	transactionCount: 0,
	transactions: []
}, action) => {
	switch (action.type) {
		case UPDATE_TRANSACTION_DATA: return { ...state, ...action.payload }
		case SORT_TRANSACTION_ASC:
			let sortedAsc = state.transactions
			sortedAsc.sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
			return {
				...state,
				transactions: sortedAsc
			}
		case SORT_TRANSACTION_DESC:
			let sortedDesc = state.transactions
			sortedDesc.sort((a, b) => new Date(a.transactionDate) - new Date(b.transactionDate))
			return {
				...state,
				transactions: sortedDesc
			}
		default: return state
	}
}

const categories = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CATEGORIES: return [ ...state, ...action.payload ]
		default: return state
	}
}

const filtered = (state = [], action) => {
	switch (action.type) {
		case CLEAR_FILTERS:
			return []
		case TOGGLE_FILTER:
			return state.includes(action.id) ? state.filter(item => item !== action.id) : [ ...state, action.id ]
		default:
			return state
	}
}

const fetching = (state = true, action) => {
	switch (action.type) {
		case REQUEST_DATA: return true
		case RECEIVE_DATA: return false
		case FAILURE_DATA: return Object.assign({}, state, { error: 'Failed to request data, please try again.' })
		default: return state
	}
}

const bankApp = combineReducers({
	filtered,
	fetching,
	accounts,
	transactionData,
	categories,
})

export default bankApp