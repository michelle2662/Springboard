
let savedDeckId = null;
let remainingCard = 52;
function getDeckID(){
    cardOffset = 0; 
    const cardContainer = document.getElementById("card_picture");

    if (cardContainer) {
        cardContainer.innerHTML = ""; 
    } else {
        console.error("Container 'card_picture' not found.");
    }

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
            // console.log(data)
            // console.log(data.cards[0].value)
            // console.log(data.cards[0].suit)
            // console.log(data.cards[0].images.png)
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
            return drawCard(deckId).then(data => {
                printPicture(data)
            }
            );
        });
    } else {
            if (remainingCard > 0){
                return drawCard(savedDeckId).then(data =>
                    printPicture(data)
                );
            } else {
                alert("No cards left in deck!")
            }
    } 
    
}

function printPicture(data){
    var img = document.createElement("img")
    img.src = data.cards[0].images.png

    img.style.position = "absolute";
    img.style.top = `${cardOffset}px`;
    img.style.left = `${cardOffset}px`;
    img.style.width = "100px"; 
    img.style.height = "auto"; 
    img.style.zIndex = cardOffset; 


    var src = document.getElementById("card_picture")
    src.appendChild(img)

     cardOffset += 10; 


}

 
    
