import React from "react";
import Button from "../chp04/Button";

function LoginButton(props) {
    return(
        <button onClick={props.onClick} style={{backgroundColor: 'blue', color: 'white'}}>로그인</button>
    );
}

export default LoginButton;