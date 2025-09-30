import React, {useState} from "react";

function ConfirmButtonFunction() {
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm() {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed)
    }

    return(
      <div>
          ConfirmButton Test Function Type &nbsp;
          <button onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? "Confirmed" : "Check"}</button>
      </div>
        //비활성화 = disabled 사용, 공백 = &nbsp 사용
    );
}

export default ConfirmButtonFunction;