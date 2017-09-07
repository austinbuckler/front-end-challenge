import { combineReducers } from 'redux'
import {
	TOGGLE_FILTER,
	REQUEST_DATA,
	RECEIVE_DATA,
	FAILURE_DATA,
	UPDATE_ACCOUNTS,
	UPDATE_TRANSACTIONS,
	UPDATE_CATEGORIES
} from 'actions'

const accounts = (state = [], action) => {
	switch (action.type) {
		case UPDATE_ACCOUNTS: return Object.assign({}, state, { ...action.payload })
		default: return state
	}
}

const transactions = (state = [], action) => {
	switch (action.type) {
		case UPDATE_TRANSACTIONS: return Object.assign({}, state, { ...action.payload })
		default: return state
	}
}

const categories = (state = [], action) => {
	switch (action.type) {
		case UPDATE_CATEGORIES: return Object.assign({}, state, { ...action.payload })
		default: return state
	}
}

const filtered = (state = [], action) => {
	switch (action.type) {
		case TOGGLE_FILTER:
			return state.map(filter => (filter.id === action.id)
				? { ...filter, status: !filter.status } : filter
			)
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
	transactions,
	categories,
})

export default bankApp