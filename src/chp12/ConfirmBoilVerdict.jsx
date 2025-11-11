import React, {useState} from "react";
import BoilVerdict from "./BoilVerdict";
import './ConfirmBoilVerdict.css';

function ConfirmBoilVerdict() {
    const[temp, setTemp] = useState("");
    const handleTemp = (event)=>{setTemp(event.target.value)};

    return(
        <fieldset className="boil-checker">
            <legend>섭씨 온도를 입력하세요</legend>
            <input value={temp} onChange={handleTemp}/>
            <BoilVerdict celcius={parseInt(temp)}/>
        </fieldset>
    )
}

export default ConfirmBoilVerdict;