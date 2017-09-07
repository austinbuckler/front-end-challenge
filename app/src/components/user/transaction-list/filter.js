import React from 'react'

export default ({ accounts, categories }) => (
	<div>
		<h2>Accounts</h2>
		{
			accounts.map(account => (
				<div>
				<label for={account.accountName}>{account.accountName}</label>
				<input type="checkbox" name={account.accountName}/>
				</div>
				))
		}
		<h2>Categories</h2>
		<input type="checkbox" name="toggleAll" />
		<div>
			{
				categories.map(category => (
					<div>
						<label for={category}>{category}</label>
						<input type="checkbox" name={category} />
					</div>
					))
			}
		</div>
	</div>
	)