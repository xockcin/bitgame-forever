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

  function handleLevelChange(newLevel: number) {
    setLevel(newLevel)
  }

  function LevelSelector({ levels, onChange }: { levels: number[], onChange: (level: number) => void }) {
    return (
      <select value={level} onChange={e => onChange(+e.target.value)}>
        {levels.map(l => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
    )
  }

  return (
    <>
      <div className="App">
        <div className='level-container'>
          <LevelSelector 
            levels={[1, 2, 3, 4, 5]} 
            onChange={handleLevelChange} />
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
