export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'
export const TOGGLE_FILTER = 'TOGGLE_FILTER'
export const UPDATE_ACCOUNTS = 'UPDATE_ACCOUNTS'
export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

export const toggleFilter = (id, status) => ({
    type: TOGGLE_FILTER,
    id,
    status
})

const requestData = () => ({
	type: REQUEST_DATA
})

const receiveData = (accounts, transactionData, categories) => dispatch => {
	dispatch({ type: RECEIVE_DATA })
	dispatch({ type: UPDATE_ACCOUNTS, payload: accounts })
	dispatch({ type: UPDATE_TRANSACTIONS, payload: transactionData })
	dispatch({ type: UPDATE_CATEGORIES, payload: categories })
}

export const fetchData = () => dispatch => {
	dispatch(requestData())
	return fetch('http://demo7235469.mockable.io/transactions')
		.then(response => response.json())
		.then(json => dispatch(receiveData(json.accounts, json.transactionData, json.categories)))
}