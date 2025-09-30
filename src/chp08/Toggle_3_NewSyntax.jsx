import React, {Component} from "react";
import button from "../chp04/Button";

class Toggle_3_NewSyntax extends Component{
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}
    }
//     Event Handler형 함수로 정의
/*요즘은 이렇게 많이 작성함*/
    handleClick = ()=> {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return(
            <div align="center" style={{margin: 200}}>
                <button onClick={this.handleClick}>
                   최신 {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Toggle_3_NewSyntax;