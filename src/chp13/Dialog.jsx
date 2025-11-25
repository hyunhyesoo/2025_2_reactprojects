import React from "react";
import FancyBorder from "./FancyBorder";


function Dialog(props) {
    return (
        <FancyBorder className={props.className}>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

export default Dialog;