import React, { Component } from 'react'

const style = {
	border: '1px solid #cccccc',
	background: '#f7f7f7',
	borderRadius: 4,
	padding: '6px 12px',
	cursor: 'pointer'
}

export default class SortButton extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			sortBy: true
		}
		this.onClick = this.onClick.bind(this)
	}
	
	onClick() {
		const sortBy = !this.state.sortBy
		this.props.onToggle(sortBy)
		this.setState({ sortBy })
	}
	
	render() {
		const { sortBy } = this.state
		return (<button style={style} onClick={ this.onClick }>Sorting by: <strong>{ sortBy ? 'Latest' : 'Earliest' }</strong></button>)
	}
}