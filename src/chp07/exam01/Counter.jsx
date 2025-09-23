import React, {useState} from "react";
//useState Hook을 사용하여 상태 설정이 변경될 때마다 다시 렌더링할 수 있게 코드 수정

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    );
}

export default Counter;