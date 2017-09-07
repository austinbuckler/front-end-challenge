export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'

export const selectAccount = account => ({
    type: SELECT_ACCOUNT,
    account
})

// export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
// export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS'
// export const FAILURE_PAYLOAD = 'FAILURE_PAYLOAD'
// 

// 
// export const requestTransactions = account => ({
//     type: REQUEST_TRANSACTIONS,
//     account
// })
// 
// export const receiveTransactions = (accounts, transactions, categories) => ({
//     type: RECEIVE_PAYLOAD,
//     accounts,
//     transactions,
//     categories
// })
// 
// const fetchAccounts = payload => dispatch => {
//     dispatch(requestPayload(payload))
//     return fetch('http://demo7235469.mockable.io/transactions')
//         .then(response => response.json())
//         // fr tho. we would prolly use normalize here. or just pass the payload as is...
//         .then(json => dispatch(receivePayload(json.accounts, json.transactionData, json.categories)))
// }