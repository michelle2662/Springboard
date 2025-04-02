import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [deckId, setDeckId] = useState(null)
  const [cardImage, setCardImage] = useState(null)
  const [remainingCards , setRemainingCards] = useState(52);

  useEffect(() => {
    const getDeck = async () => {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      console.log(data)
      setDeckId(data.deck_id); 
      setRemainingCards(data.remaining)
    }
  getDeck();
  }, [])

  const drawCard = async () => {
    if (remainingCards === 0) {
      alert("No cards remaining in deck");
      return;
    }

    try {
      const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      console.log("Card drawn:", response.data);
      
      if (response.data.cards && response.data.cards.length > 0) {
        setCardImage(response.data.cards[0].image);  
        setRemainingCards(response.data.remaining); 
      }
    } catch (error) {
      alert("Error: no cards remaining!");
    }
  };


  return (
    <div className="App">
      <h1>Deck of Cards</h1>
      <div className="card-container">
        {cardImage && <img src={cardImage} />}
        <button onClick={drawCard}>
          Draw a Card
        </button>
      </div>
      <p className = "remaining">Cards remaining: {remainingCards}</p>
    </div>
  )
}

export default App
