import React, { useState } from "react";
import './Detail.css';

function Detail() {
    const [isFavorite, setIsFavorite] = useState(false);

    const [likeCount, setLikeCount] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            alert('즐겨찾기에 추가되었습니다!');
        } else {
            alert('즐겨찾기에서 제거되었습니다.');
        }
    };

    const handleLike = () => {
        if (!isLiked) {
            setLikeCount(likeCount + 1);
            setIsLiked(true);
        } else {
            setLikeCount(likeCount - 1);
            setIsLiked(false);
        }
    };

    const handleComment = () => {
        alert('댓글 기능이 곧 추가됩니다!');
    };

    return (
        <div>

            <div className="mainContainer">
                <h2 className="productTitle">메뉴 상세보기</h2>

                <div className="product">
                    <div
                        className={`favoriteIcon ${isFavorite ? 'active' : ''}`}
                        id="favoriteBtn"
                        onClick={handleFavoriteToggle}
                    >
                        {isFavorite ? '😆' : '🙂'}
                    </div>

                    <div className="productContent">
                        <img src="/dessert_imgs/글레이즈드도넛.png" className="productImage" alt="글레이즈드 도넛" />

                        <div className="productRight">
                            <div className="productText">
                                <h3 className="productName">글레이즈드 도넛</h3>
                                <p className="productDetail">
                                    설탕코팅을 입힌 부드러운 도넛으로, 달콤하고 쫄깃한 식감이 특징입니다.
                                </p>
                            </div>

                            <div className="productAction">
                                <button
                                    className={`likeBtn ${isLiked ? 'liked' : ''}`}
                                    onClick={handleLike}
                                >
                                    {isLiked ? '❤️' : '🤍'} <span className="likeCount">{likeCount}</span>
                                </button>
                                <button className="commentBtn" onClick={handleComment}>💬</button>
                            </div>
                        </div>
                    </div>

                    <ul className="productInfo">
                        <li>예상 칼로리: 350kcal(1개당)</li>
                        <li>예상 가격: 4,000원(1개당)</li>
                        <li>예상 알레르기 정보: 우유, 계란, 밀</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Detail;