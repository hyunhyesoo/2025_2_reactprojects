import React, { useState } from "react";
import './Reservation.css';

function Reservation() {
    const[haveBreakfast, setHaveBreakfast] = useState(true);
    const[numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event)=>{
        alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                아침식사 여부:
                <input type={"checkbox"} checked={haveBreakfast} onChange={(event)=>{
                setHaveBreakfast(event.target.checked)}}/>
            </label>
            <br/>
            <label>
                방문객 수:
                <input type={"number"} checked={numberOfGuest} onChange={(event)=>{
                    setNumberOfGuest(event.target.value)}}/>
            </label>
            <br/>
            <button type={"submit"}>제출</button>
        </form>
    )
}

export default Reservation;