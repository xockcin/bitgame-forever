import { useState } from 'react'
import './App.css'
import Byte from './components/Byte'
import Stack from './components/Stack'
import { doBitmove } from './utilities/functions'

function App() {
  const [mainByte, setMainByte] = useState(0)
  const [stack, setStack] = useState<number[]>([])

  return (
    <>
      <div className="App">
        <h1>Bit Game Forever</h1>
        <div className="byte-container">
          <Byte value={mainByte} />
        </div>
        <div className="controls">
          <button onClick={() => setMainByte(doBitmove(mainByte, "<"))}>{"<"}</button>
          <button onClick={() => setMainByte(doBitmove(mainByte, "~"))}>{"~"}</button>
          <button onClick={() => setMainByte(doBitmove(mainByte, ">"))}>{">"}</button>
        </div>
      </div>
    </>
  )
}

export default App
