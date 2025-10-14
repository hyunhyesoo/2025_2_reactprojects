import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import './MainPage_style.css';

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggle = ()=> {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return(
        <div>
            <WarningBanner warning={showWarning}/>
            <button onClick={handleToggle} className={`toggle-button ${showWarning ? 'hide' : ''}`}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    )
}

export default MainPage;