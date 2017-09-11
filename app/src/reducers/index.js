import { combineReducers } from 'redux'
import {
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

const transactionData = (state = [], action) => {
	switch (action.type) {
		case UPDATE_TRANSACTION_DATA: return Object.assign({}, state, { ...action.payload })
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