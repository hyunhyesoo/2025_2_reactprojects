import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"김재영",
        comment:"나는 바보",
        url: "https://avatar.iran.liara.run/public/46"
    },
    {
        name:"김김김",
        comment:"안녕하세요",
        url: "https://avatar.iran.liara.run/public/4"
    },
    {
        name:"김김김",
        comment:"안녕하세요",
        url: "https://avatar.iran.liara.run/public/50"
    }
];

function CommentList() {
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name = {comment.name} comment={comment.comment} url={comment.url}/>
                    );
                    }
                )
            }
        </div>
    )
}

export default CommentList;