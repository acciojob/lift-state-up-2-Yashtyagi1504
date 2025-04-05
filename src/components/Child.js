import React from "react";
import '../styles/Child.css'

function Child({setValue}){
    function sendingData(e){
        setValue(e.target.value);
    }
    return(
        <div className="child">
            <h1>Child Component</h1>
            <input type="text" onInput={sendingData}></input>
        </div>
    )

}

export default Child;