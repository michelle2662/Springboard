function Pokecard({id, name, type,base_experience} ) {
    return (
        <div class = "pokecard">
            <p id = "name"> {name} </p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} id="pokecard-img"
/>            <p> Type: {type} </p>
            <p> Exp: {base_experience} </p>

        </div>
    )
}