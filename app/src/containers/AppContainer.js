import { connect } from 'react-redux'
import App from 'components/app'

const mapStateToProps = (state, ownProps) => ({
	accounts: state.accounts,
	transactionData: state.transactionData,
	categories: state.categories
})

export default connect(mapStateToProps)(App)