import React from "react";
import Button from "../chp04/Button";

function LogoutButton(props) {
    return(
        <button onClick={props.onClick} style={{backgroundColor: 'red', color: 'white'}}>로그아웃</button>
    );
}

export default LogoutButton;