function App ()
{

	return (
		<div id = "title">
			<h1> Pokemon Game</h1>
			<Pokegame>
				<Pokedex></Pokedex>
			</Pokegame>

		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));


