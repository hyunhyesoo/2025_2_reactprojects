import React from "react";

function FancyBorder(props) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default FancyBorder;