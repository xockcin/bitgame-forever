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

  function addToStack(value: number) {
    setStack(prevStack => [...prevStack, value])
  }

  function randomBitmove() {
    const randomIndex = Math.floor(Math.random() * bitmoves.length)
    return bitmoves[randomIndex]
  }

  function addToStackWithLevel(value: number, level: number) {
    let steps = []
    for (let i = 0; i < level; i++) {
      steps.push(randomBitmove())
    }
    let newValue = value
    steps.forEach(move => {
      newValue = doBitmove(newValue, move)
    })
    addToStack(newValue)
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
      <div className='level-container'>
        <LevelSelector 
          levels={[1, 2, 3, 4, 5]} 
          onChange={handleLevelChange} />
      </div>
      <button onClick={() => addToStackWithLevel(mainByte, level)}>
        add to stack
      </button>
      <div className="App">
        
        <div className="stack-container">
          <Stack bytes={stack} />
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
