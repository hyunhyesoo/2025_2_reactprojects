import React, {useState} from "react";

//hook을 사용하여 실시간 문자 입력받기
function InputTest() {
    const[InputValue, setInputValue] = useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
    }

    // const handleChange2 = (event) => {
    //     setInputValue(event.target.value);
    // }
    //ㄴ>handleChange2로 변경해서 호출 / 똑같이 실행됨

    return(
        <div>
            <h3>텍스트 박스에 입력하신 내용이 변경될 때마다 알림창에 표시됩니다.</h3>
            <input size={50} type="text" onChange={handleChange} placeholder={"Input Text..."}/>
            <h2 id={"result"}>입력된 내용: {InputValue}</h2>
        </div>
    );
}

export default InputTest;

// function InputTest() {
//     const [text, setText] = useState(""); // 누적 문자열 상태
//
//     function handleChange(event) {
//         const newValue = event.target.value;      // 현재 입력창 전체 값
//         setText(newValue);                        // 상태 업데이트
//         alert(newValue);                          // 알림창에 전체 값 출력
//     }
//
//     return (
//         <div>
//             <input type="text" onChange={handleChange} value={text} />
//         </div>
//     );
// }