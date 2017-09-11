import { connect } from 'react-redux'
import { fetchData, sortTransactionsAsc, sortTransactionsDesc } from 'actions'
import App from 'components/app'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = (dispatch, ownProps) => {
	dispatch(fetchData())
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

export default connect(mapStateToProps, mapDispatchToProps)(App)