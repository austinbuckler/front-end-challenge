import React from 'react'

const style = {
	disabled: {
		backgroundColor: 'red'
	},
	enabled: {
		backgroundColor: 'green'
	}
}

export default ({ disabled, onClick, text }) => (
	<button style={ disabled ? style.disabled : style.enabled } onClick={ onClick }>{ text }</button>
)