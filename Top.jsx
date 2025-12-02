import React from "react";
import './Top.css';

function Top({ onNavigate }) {
    const goPage = (target) => {
        if (onNavigate) {
            onNavigate(target);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        goPage("home");
    };
    return (
        <>
            {/* 헤더 */}
            <header>
                <a href="#" onClick={handleLogoClick}>
                    <img src="/dessert_imgs/로고.jpg" alt="로고" className="logo" />
                </a>
                <h1>오늘의 디저트</h1>
            </header>

            {/* 네비게이션 바 */}
            <nav className="navbar">
                <ul className="navMenu">
                    <li><a href="#" className="goIntro">홈페이지소개</a></li>
                    <li><a href="#" className="goCategory">카테고리</a></li>
                </ul>
                <div className="searchBar">
                    <input type="text" placeholder="검색어 입력" className="searchInput"/>
                </div>
                <div className="navIcons">
                    <button className="iconBtn searchBtn" aria-label="필터"
                            onClick={() => goPage("filter")}>
                        <span className="tuneIcon"></span>
                    </button>
                    <button className="iconBtn userBtn" aria-label="사용자">
                        <span className="userIcon"></span>
                    </button>
                    <button className="iconBtn goCategory" aria-label="메뉴">
                        <span className="menuIcon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Top;