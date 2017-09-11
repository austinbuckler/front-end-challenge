import { connect } from 'react-redux'
import { fetchData } from 'actions'
import App from 'components/app'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => {
	dispatch(fetchData())
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)