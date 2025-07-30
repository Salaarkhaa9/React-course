import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards"

function App() {
  const object={
    username:"Salar",
    age:18
  }
  let newArr=[12,34]
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">
        Tailwind tetsing
      </h1>
      {/* <Cards channel="chaiaurcode" someObj={object}/> */}
      <Cards username="Taha" number="10"/>
      <Cards username="Salar"/>
    </>
  );
}

export default App;
