import React from 'react'

const style = {
	statefulButton: {
		border: 0,
		padding: '6px 12px',
		color: '#FFFFFF',
		fontWeight: 400,
		letterSpacing: 0.5,
		borderRadius: 2,
		margin: '4px 4px',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	disabled: {
		backgroundColor: '#404040',
		color: '#828282'
	},
	
	/* Account Type Colors */
	type_high_interest_tfsa_savings_account: { backgroundColor: '#718DDE' },
	type_companion_savings_account: { backgroundColor: '#71B0DE' },
	type_unlimited_chequing_account: { backgroundColor: '#71CCDE' },
	type_borderless_plan: { backgroundColor: '#71DE91' },
	
	/* Transaction Type Colors */
	type_accommodations: { backgroundColor: '#0F5996' },
	type_bank_fee: { backgroundColor: '#227EA5' },
	type_beauty: { backgroundColor: '#3DA0BF' },
	type_charity: { backgroundColor: '#97E4EC' },
	type_children: { backgroundColor: '#FEB02A' },
	type_clothing: { backgroundColor: '#E47452' },
	type_convenience_store: { backgroundColor: '#5aa275' },
	type_department_store: { backgroundColor: '#7AD6F6' },
	type_education: { backgroundColor: '#21C7D7' },
	type_electronics: { backgroundColor: '#FF4545' },
	type_entertainment: { backgroundColor: '#FF966D' },
	type_financial_product: { backgroundColor: '#DF0D66' },
	type_fitness: { backgroundColor: '#F7B09A' },
	type_gifts: { backgroundColor: '#F5805C' },
	type_grocery: { backgroundColor: '#27A789' },
	type_health: { backgroundColor: '#F06E3A' },
	type_home: { backgroundColor: '#ED5747' },
	type_income: { backgroundColor: '#BF4352' },
	type_pet: { backgroundColor: '#A24369' },
	type_pharmacy: { backgroundColor: '#EF7878' },
	type_restaurant: { backgroundColor: '#76838F' },
	type_taxes_government_benefits: { backgroundColor: '#4D4E79' },
	type_thrift_shop: { backgroundColor: '#FD2F53' },
	type_transfer: { backgroundColor: '#F6BB6D' },
	type_transportation: { backgroundColor: '#777CD8' },
	type_utilities_bills: { backgroundColor: '#36728C' }
}

export default ({ disabled, onClick, text }) => (
	<button style={ Object.assign({}, style.statefulButton, disabled ? style.disabled : style[`type_${text.toLowerCase().replace(/\s/g, '_')}`]) } onClick={ onClick }>{ text }</button>
)