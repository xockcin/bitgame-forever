import { useState } from 'react'
import './App.css'
import Byte from './components/Byte'

function App() {
  const [mainByte, setMainByte] = useState(0)
  return (
    <>
      <div className="App">
        <h1>Bit Game Forever</h1>
        <div className="byte-container">
          <Byte value={mainByte} />
        </div>
        <div className="controls">
          <button onClick={() => setMainByte(mainByte + 1)}>Increment</button>
          <button onClick={() => setMainByte(mainByte - 1)}>Decrement</button>
          <button onClick={() => setMainByte(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
