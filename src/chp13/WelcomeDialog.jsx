import React from "react";
import Dialog from "./Dialog";
import './Welcomedialog.css';

function WelcomeDialog(props) {
    return(
        <div className="DialogList">
            <Dialog
                className="Dialog-box Dialog1"
                title="안녕하세요"
                message="사이트에 방문하신 것을 환영합니다"
            />

            <Dialog
                className="Dialog-box Dialog2"
                title="안녕하세요"
                message="사이트에 방문하신 것을 환영합니다"
            />

            <Dialog
                className="Dialog-box Dialog3"
                title="안녕하세요"
                message="사이트에 방문하신 것을 환영합니다"
            />
        </div>
    );
}

export default WelcomeDialog;