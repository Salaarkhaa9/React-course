import { useState } from "react"

function App() {
  const [color, setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 rounded-full px-3 py-2 bg-white">
          <button onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "red" }}
          >Red</button>
          <button onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "green" }}
          >Green</button>
          <button onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "blue" }}
          >Blue</button>
          <button onClick={()=>setColor("magenta")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-2xl"
          style={{backgroundColor: "magenta" }}
          >Magenta</button>
        </div>
      </div>
    </div>
  )
}

export default App
