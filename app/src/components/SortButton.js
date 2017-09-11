import React, { Component } from 'react'

const style = {
	
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
		const { onSort } = this.props
		const sortBy = !this.state.sortBy
		this.setState({ sortBy })
		onSort(sortBy)
	}
	
	render() {
		const { sortBy } = this.state
		return (<button style={style} onClick={ this.onClick }>{ sortBy ? 'Latest' : 'Oldest' }</button>)
	}
}