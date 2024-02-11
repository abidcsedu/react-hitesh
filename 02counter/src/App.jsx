import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increaseValue = () => {
      if(count < 20){
      setCount(count + 1)
    }  
  }
  const decreaseValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }  
  return (
    <>

      <button onClick={decreaseValue}>Decrease</button>
      {count}
      <button onClick={increaseValue}>Increase</button>
    </>
  )
}

export default App
