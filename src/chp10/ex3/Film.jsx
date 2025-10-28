import React from "react";
import './Film.css'
import img1 from './imgs/2011.jpg'
import img2 from './imgs/2014.jpg'
import img3 from './imgs/2015.jpg'
import img4 from './imgs/2016.jpg'
import img5 from './imgs/2021.jpg'
import img6 from './imgs/2022.jpg'
import img7 from './imgs/2025.jpg'

const contents = [
    {id: 1, name:"뿌리깊은 나무", year:2011, image:img1},
    {id: 2, name:"고교처세왕", year:2014, image:img2},
    {id: 3, name:"밤을 걷는 선비", year:2015, image:img3},
    {id: 4, name:"밤을 걷는 선비", year:2016, image:img4},
    {id: 5, name:"어느날 우리집 현관에 멸망이 들어왔다", year:2021, image:img5},
    {id: 6, name:"내일", year:2022, image:img6},
    {id: 7, name:"S라인", year:2025, image:img7},

]

function Film() {
    return(
        <div className="film_container">
            <h2 className={"film_title"}>이수혁 주요 작품</h2>
            <div className={"card_container"}>
                {contents.map((content) => (
                        <div className={"content-card"}>
                            <img src={content.image} alt={content.name} className={"content-image"}/>
                            <div className={"content-info"}>
                                <h3>{content.name}</h3>
                                <p>{content.year}년도</p>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </div>
    )
}
export default Film;