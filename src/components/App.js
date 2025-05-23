
import React from "react";
import './../styles/App.css';
import Child from "./Child";
import {useState} from "react"

const App = () => {

  let [value,setValue] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{value}</p>
      <Child value = {value} setValue={setValue}></Child>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
