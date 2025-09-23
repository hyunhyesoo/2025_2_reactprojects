import React, {useEffect, useState} from "react";
//useState Hook을 사용하여 상태 설정이 변경될 때마다 다시 렌더링할 수 있게 코드 수정

function Counter() {
    const [count, setCount] = useState(0);
//useEffect Hook은 클래스형 컴포넌트에서 컴포넌트가 마운트되었을 때, 업데이트(변경)되었을 때 자동으로 호출되는 콜백 메서드가 함수형 컴포넌트에는 없기 때문에 useEffect Hook을 대신 사용
//count useState 설정이 변경될 때마다 제목표시줄의 문자열을 변경하고자 한다
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다`;
        
        //클래스형 컴포넌트에서 컴포넌트가 언마운트되었을 때
        return ()=>{

        }
    });
    return(
        <div>
            <p>총 {count}번 클릭했습니다</p>
            <button onClick={()=>setCount(count+1)}>클릭</button>
        </div>
    );
}

export default Counter;