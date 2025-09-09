import React from "react";

function Clock(props) {
    return (
        <div className={'clock'}>
            {new Date().toLocaleTimeString()}
        </div>
    )
}

export default Clock;