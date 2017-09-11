export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const UPDATE_ACCOUNTS = 'UPDATE_ACCOUNTS'
export const UPDATE_TRANSACTION_DATA = 'UPDATE_TRANSACTIONS'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

export const toggleFilter = (id, filterType) => ({
    type: TOGGLE_FILTER,
    id: `${id}::${filterType}`,
})

export const clearFilters = () => ({
	type: CLEAR_FILTERS
})

const requestData = () => ({
	type: REQUEST_DATA
})

const receiveData = (accounts, transactionData, categories) => dispatch => {
	dispatch({ type: RECEIVE_DATA })
	dispatch({ type: UPDATE_ACCOUNTS, payload: accounts })
	dispatch({ type: UPDATE_TRANSACTION_DATA, payload: transactionData })
	dispatch({ type: UPDATE_CATEGORIES, payload: categories })
}

export const fetchData = () => dispatch => {
	dispatch(requestData())
	return fetch('http://demo7235469.mockable.io/transactions')
		.then(response => response.json())
		.then(json => dispatch(receiveData(json.accounts, json.transactionData, json.categories)))
}