import React from "react";
import Button from "./Button";

function ConfirmDialog(props) {
    return(
        <div className={'div-bg-ivory'}>
            <p>{props.children} 확인 후 버튼을 눌러주세요</p>
            <br/>
            <Button color='green'>확인</Button>&nbsp;
            <Button color='blue'>취소</Button>&nbsp;
            <Button color='yellow'>초기화</Button>
        </div>
    )
}

export default ConfirmDialog;
