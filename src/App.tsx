import { useState } from 'react'
import './App.css'
import Byte from './components/Byte'
import Stack from './components/Stack'
import { doBitmove } from './utilities/functions'

function App() {
  const [mainByte, setMainByte] = useState(0)
  const [stack, setStack] = useState<number[]>([])
  const [bitmoves, setBitmoves] = useState<string[]>(["<", "~", ">"])
  const [level, setLevel] = useState<number>(1)

  return (
    <>
      <div className="App">
        <div className='level-container'>
          <select 
            value={level}
            onChange={e => setLevel(+e.target.value)}
          >
            <option value="1">{1}</option>
            <option value="2">{2}</option>
          </select>
        </div>
        <div className="stack-container">

        </div>
        <div className="byte-container">
          <Byte value={mainByte} />
        </div>
        <div className="controls">
          {bitmoves.map(bitmove => (
            <button onClick={() => setMainByte(doBitmove(mainByte, bitmove))}>{bitmove}</button>)
          )}
        </div>
      </div>
    </>
  )
}

export default App
