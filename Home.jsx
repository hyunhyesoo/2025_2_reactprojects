import React, { useState } from "react";
import './Home.css';

function Home({ onNavigate }) {
    const goDetail = () => {
        if (onNavigate) {
            onNavigate('detail');
        }};
    const [hoveredDessert, setHoveredDessert] = useState(null);

    const [isParticipating, setIsParticipating] = useState(false);

    const topDesserts = [
        '딸기생크림케이크',
        '자몽에이드',
        '소금빵',
        '복숭아타르트',
        '바나나누텔라와플'
    ];

    const handleMouseEnter = (index) => {
        setHoveredDessert(index);
    };

    const handleMouseLeave = () => {
        setHoveredDessert(null);
    };

    const handleParticipate = () => {
        setIsParticipating(!isParticipating);
    };

    return (
        <div>

            {/* 상단: 이달의 테마 + 인기 디저트 TOP5 */}
            <section className="topContainer">
                <div className="topMain">
                    <div className="theme">
                        <h3>이달의 테마</h3>
                        <h2>복숭아 정원 피크닉</h2>
                        <p>복숭아의 달콤함과 상큼함을 가득 담은 디저트들을 만나보세요!</p>
                    </div>
                    <div className="top5">
                        <h3>오늘의 인기 디저트 TOP5</h3>
                        <ul className="top-desserts">
                            {topDesserts.map((dessert, index) => (
                                <li
                                    key={index}
                                    className={hoveredDessert === index ? 'hovered' : ''}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a href="#" onClick={(e) => {
                                            e.preventDefault(); goDetail();}}>
                                        {index + 1}위 {dessert}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 하단: 추천 디저트 + 댓글 이벤트 & 푸터 */}
                <div className="btmContainer">
                    <div className="recommended">
                        <h2>오늘의 추천 디저트</h2>
                    </div>
                    <div className="right-btm">
                        <div className="comment-event">
                            <h3>댓글을 남겨주세요!</h3>
                            <p>추첨을 통해 디저트 카페 상품권을 드립니다!</p>
                            <button
                                onClick={handleParticipate}
                                className={isParticipating ? 'participating' : 'participate-btn'}
                            >
                                {isParticipating ? '참여 완료!' : '이벤트 참여하기'}
                            </button>
                        </div>
                        <footer className="footer">
                            <img src="/dessert_imgs/로고.jpg" alt="로고" className="footer-logo" />
                            <p>서울특별시 용산구 보광로 73</p>
                            <p>사업자등록번호: 123-45-67890 | 대표 번호: 02-123-4567</p>
                            <p>Copyright ⓒ12345647890</p>
                        </footer>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;