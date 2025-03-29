function Pokegame(props) {
    const child = React.Children.only(props.children);   
    const pokemonList = child.props.pokemon;    


    const randomizePokemonList1 = _.sampleSize(pokemonList, 4)
    const randomizePokemonList2 = pokemonList.filter(pokemon => !randomizePokemonList1.includes(pokemon) )


    const pokemonList1Points = randomizePokemonList1.reduce((accumulator, curr) => accumulator + curr.base_experience ,0)
    const pokemonList2Points = randomizePokemonList2.reduce((accumulator, curr) => accumulator + curr.base_experience ,0)

    console.log(pokemonList1Points)
    console.log(pokemonList2Points)


    return(

        <div className = "pokegame">
                <Pokedex pokemon = {randomizePokemonList1} isWinner = {pokemonList1Points>pokemonList2Points? true : false}/>
                <Pokedex pokemon = {randomizePokemonList2} isWinner = {pokemonList2Points>pokemonList1Points? true : false}/>
        </div>
    )

}