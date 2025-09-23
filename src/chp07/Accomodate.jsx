import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";

const MAX_Count = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0) //Costom useState 사용

    useEffect(() => {
        console.log("==================");
        console.log("useEffect() isFull is called");
        console.log(`isFull: ${isFull}`);
    }, []);

    useEffect(() => {
        setIsFull(count >= MAX_Count)
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div>
            <p>{`총 ${count}명을 수용했습니다`}</p>
            <button onClick={increaseCount} disabled={isFull} style={{marginRight: 15}}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color: "red"}}>수용 가능한 정원이 가득 찼습니다</p>}
        </div>
    )
}

export default Accomodate;