
import React from "react";
import './../styles/App.css';
import child from "./child";
import {useState} from "react"

const App = () => {

  let [value,setValue] = useState("");
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{value}</p>
      <child value = {value} setValue={setValue}></child>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
