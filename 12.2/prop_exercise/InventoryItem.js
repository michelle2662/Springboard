	function InventoryItem ({name, type, quantity = 1, price = 0.0 })
	{
	return (
	<div>
		<h2> {name} ({type})</h2>
		{quantity < 5 ? <Message> ⚠️ Low stock - consider restocking soon! </Message>  : null}
		{quantity*price > 1000 ? <Message> 💰 High value - consider extra protection!</Message> : null}
	</div>
	);
	}


