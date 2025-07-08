import { useState, useEffect } from 'react'
import './App.css'
import Byte from './components/Byte'
import Stack from './components/Stack'
import LevelSelector from './components/LevelSelect'
import { doBitmove } from './utilities/functions'

function App() {
  const [mainByte, setMainByte] = useState(0)
  const [stack, setStack] = useState<number[]>([])
  const [bitmoves, setBitmoves] = useState<string[]>(["<", "~", ">"])
  const [level, setLevel] = useState<number>(1)

  function handleLevelChange(newLevel: number) {
    setLevel(newLevel)
  }

  function popStackIfMatch() {
    if (stack[0] === mainByte) {
      setStack(prevStack => prevStack.slice(1))
    } 
  }

  function addToStack(value: number) {
    setStack(prevStack => [...prevStack, value])
  }

  function randomBitmove() {
    const randomIndex = Math.floor(Math.random() * bitmoves.length)
    return bitmoves[randomIndex]
  }

  function addToStackWithLevel() {
    let steps = []
    for (let i = 0; i < level + 1; i++) {
      steps.push(randomBitmove())
    }
    let newValue = stack.length ? stack[stack.length - 1] : mainByte
    steps.forEach(move => {
      newValue = doBitmove(newValue, move)
    })
    addToStack(newValue)
  }

  useEffect(() => {
    popStackIfMatch()
  }, [mainByte])

  return (
    <>
      <div className='level-container'>
        <LevelSelector 
          levels={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
          onChange={handleLevelChange} />
      </div>
      <button onClick={addToStackWithLevel}>
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
