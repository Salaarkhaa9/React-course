import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=15
let [counter, setSalar] = useState(0)

const addValue = () => {
  counter=counter+1
  if(counter<=20){
    setSalar(counter)
  }
  else{
    setSalar(counter=20)
    console.log("Counter value has reached twenty");
  }
}
const removeValue = () => {
  counter=counter-1
  if(counter>=0){
    setSalar(counter)
  }
  else{
    setSalar(counter=0)
    console.log("Counter value has reached zero");
  }

}

  return (
    <>
      <h1>Salaar aur code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
