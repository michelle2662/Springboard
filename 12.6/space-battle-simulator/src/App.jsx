import { useState } from 'react'
import Banner from '/src/Component/Banner.jsx'
import BattleField from '/src/Component/BattleField.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "space-battle-simulator">
      <Banner></Banner>
      <BattleField />

    </div>
  )
}

export default App
