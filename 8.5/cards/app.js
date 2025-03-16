
let savedDeckId = null;
let remainingCard = 52;
function getDeckID(){
    
    return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => {return response.json()})
    .then(data => {
        savedDeckId = data.deck_id;
        return data.deck_id
    })
    .catch(error => console.error("Error getting data from API"))
    
}

function drawCard(deck_id){
   
        return fetch("https://deckofcardsapi.com/api/deck/"+deck_id+"/draw/?count=1")
        
        .then (response => {return response.json()})
        .then (data => {
            console.log(data)
            console.log(data.cards[0].value)
            console.log(data.cards[0].suit)
            remainingCard = data.remaining
            console.log(remainingCard)
            return data

        })
        .catch(error => console.error("Couldn't fetch data"))

}

function drawCardFromDeck(){
    console.log("clicked")
    if (!savedDeckId){
        return getDeckID().then(deckId => {
            return drawCard(deckId);
        });
    } else {
            
            return drawCard(savedDeckId);
    } 
    
}

 
    
    // drawCardFromDeck()
    // .then(() => drawCardFromDeck()) // Second draw after the first completes
    // .catch(error => console.error("Error drawing cards:", error));

