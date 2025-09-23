import React from "react";
import Notification from "./Notification";

const reservedNotifications=[
    {
        id:1,
        message: "땅콩이는 예쁘구요"
    },
    {
        id:1,
        message: "장군이는 귀여워요"
    },
    {
        id:1,
        message: "제가 바로 주인입니다"
    }
]

var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(()=>{
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications
                })
            } else {
                this.setState({
                    notifications:[] //state 초기화는 아무것도 할당 안 하면 됨
                })
                clearInterval(timer);
            }
        }, 2000);
    }

    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification)=>{
                        return <Notification //대소문자 주의(철자 모두 같아야함)
                                    key={notification.id}
                                    id={notification.id}
                                    message={notification.message}/>
                    })
                }
            </div>
        );
    }
}

export default NotificationList;
