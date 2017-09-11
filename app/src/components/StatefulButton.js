import React from 'react'

const style = {
	statefulButton: {
		border: 0,
		padding: '6px 12px',
		color: '#fff',
		fontWeight: 600,
		letterSpacing: 0.5
	},
	disabled: {
		backgroundColor: 'red'
	},
	enabled: {
		backgroundColor: 'green'
	}
}

export default ({ disabled, onClick, text }) => (
	<button style={ Object.assign({}, style.statefulButton, disabled ? style.disabled : style.enabled) } onClick={ onClick }>{ text }</button>
)