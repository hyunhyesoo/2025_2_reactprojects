import React, {useState} from "react";
import Toolbar from "./Toolbar";
import './Toolbar.css';

function LandingPage() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const onClickLogin = () => {
        setisLoggedIn(true);
    }
    const onClickLogout = () => {
        setisLoggedIn(false);
    }

    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
            <h2>소플과 함께하는 리액트</h2>
        </div>
    )
}

export default LandingPage;