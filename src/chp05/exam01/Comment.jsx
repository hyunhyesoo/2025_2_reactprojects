import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css'

const users = [
    {
        name: "abc",
        comment: "hello",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_640.png"
    },
    {
        name: "def",
        comment: "how are you",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/05/02/10/32/avatar-7964941_640.png"
    },
    {
        name: "ghi",
        comment: "thank you",
        avatarUrl: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_640.png"
    }
];

function Comment() {
    const currentDate =new Date();
    return (
        <div>
            {users.map((user) => {
                return (
                    <div className="comment">
                        <UserInfo user={user} />
                        <div className = "comment-text">
                            {user.comment}
                        </div>
                        <div className = "comment-date">
                            {currentDate.toDateString()}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Comment;