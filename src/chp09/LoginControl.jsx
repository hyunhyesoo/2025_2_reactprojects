import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //괄호 안에 값을 넣으면 그게 초기값
    const handleLoginClick = ()=> {
        setIsLoggedIn(true)
    }
    const handleLogoutClick = ()=> {
        setIsLoggedIn(false)
    }

    let btn;
    if(isLoggedIn) {
        btn = <LogoutButton onClick={handleLogoutClick}/>
    } else {
        btn = <LoginButton onClick={handleLoginClick}/>
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl;