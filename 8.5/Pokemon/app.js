
let numbers = new Array(3);

function getAllPokemon(){

    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302&offset=0")
    .then(response => {return response.json()})
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.error("Pokemon does not exist"))
}

function getPokemon(id){

    return fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(response => {return response.json()})
    .then(data => {
        console.log(data)
        return data
    })
    .catch(error => console.error("Pokemon does not exist"))
}

function getThreePokemon(){

    return getAllPokemon()
    .then ( data => {
        for (let i = 0; i < numbers.length; i++){
            numbers[i] = Math.floor(Math.random() * data.count);
        }
        
        return Promise.all(numbers.map(id => getPokemon(id)));

    })
    
}

function getPokemonSpecies(name){
    return fetch("https://pokeapi.co/api/v2/pokemon-species/" + name)
    .then(response => {return response.json()})
    .then(data => {console.log(data) 
        return data})
    .catch(error => console.error("Species does not exist for pokemon"))
}

let pokemon1 = ""
let pokemon2 = ""
let pokemon3 = ""
getThreePokemon().then(pokemonData => {

    console.log(pokemonData)
    pokemon1 = pokemonData[0].name;
    pokemon2 = pokemonData[1].name;
    pokemon3 = pokemonData[2].name;

    let pokemons = [pokemon1, pokemon2, pokemon3];
    for (let i = 0 ; i < pokemons.length; i ++) {
        getPokemonSpecies(pokemons[i])
    }


});