import React from "react";

function Mybutton_Argument() {

    const handleClick = (id, event) => {
        console.log(id + ":" + event.target);
    }

    return(
        <div align="center" style={{margin: 200}}>
            <button onClick={(event) => {
                handleClick(7, event);
            }}>Argument 전달</button>
        </div>
    )
}

export default Mybutton_Argument;