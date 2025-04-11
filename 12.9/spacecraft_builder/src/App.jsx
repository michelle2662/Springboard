import { useState } from 'react'

import './App.css'
import SpacecraftBuilder from './Component/SpacecraftBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SpacecraftBuilder/>
    </>
  )
}

export default App
