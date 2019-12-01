import React from "react";



function Input(props){

    function tester(){
        console.log("test");
    }

    

   

    return (
        <div>

            <input id="itemInput"  />
            <button id="myBtn" onClick={props.click}>Add</button>
        </div>
    )
}

export default Input;