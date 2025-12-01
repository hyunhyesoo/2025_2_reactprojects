import React, { useState } from "react";
import './Filter.css';

function Filter() {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [openSections, setOpenSections] = useState({
        taste: true,
        temperature: false,
        allergy: false
    });

    const tastes = ['달달한', '짭짤한', '고소한', '담백한', '상큼한', '쫄깃한', '부드러운', '바삭한'];
    const temperatures = ['차가운', '따뜻한', '봄', '여름', '가을', '겨울'];
    const allergies = ['우유', '계란', '밀', '대두', '땅콩', '복숭아' ];

    const handleFilterClick = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(f => f !== filter));
        } else if (selectedFilters.length < 3) {
            setSelectedFilters([...selectedFilters, filter]);
        } else {
            alert('최대 3개까지 선택 가능합니다!');
        }
    };

    const toggleSection = (section) => {
        setOpenSections({
            ...openSections,
            [section]: !openSections[section]
        });
    };

    const handleReset = () => {
        setSelectedFilters([]);
    };

    const handleApply = () => {
        if (selectedFilters.length === 0) {
            alert('필터를 선택해주세요!');
        } else {
            alert(`'${selectedFilters.join(', ')}' 필터를 선택하셨습니다`);
        }
    };

    return (
        <div>

            <main className="filterPage">
                <div className="filterHeader">
                    <span className="backArrow">←</span> <strong>필터 (최대 3개)</strong>
                    <span className="selectedCount">{selectedFilters.length}/3</span>
                </div>

                {/* 맛 섹션 */}
                <div className="filterSection">
                    <div
                        className="filterCategory"
                        onClick={() => toggleSection('taste')}
                    >
                        <span>맛 / 식감</span>
                        <span className="arrow">{openSections.taste ? '▲' : '▼'}</span>
                    </div>
                    {openSections.taste && (
                        <div className="filterOptions">
                            {tastes.map((taste) => (
                                <button
                                    key={taste}
                                    className={`optionBtn ${selectedFilters.includes(taste) ? 'selected' : ''}`}
                                    onClick={() => handleFilterClick(taste)}
                                >
                                    {taste}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* 온도/계절 섹션 */}
                <div className="filterSection">
                    <div
                        className="filterCategory"
                        onClick={() => toggleSection('temperature')}
                    >
                        <span>온도 / 계절 메뉴</span>
                        <span className="arrow">{openSections.temperature ? '▲' : '▼'}</span>
                    </div>
                    {openSections.temperature && (
                        <div className="filterOptions">
                            {temperatures.map((temp) => (
                                <button
                                    key={temp}
                                    className={`optionBtn ${selectedFilters.includes(temp) ? 'selected' : ''}`}
                                    onClick={() => handleFilterClick(temp)}
                                >
                                    {temp}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* 알레르기 섹션 */}
                <div className="filterSection">
                    <div
                        className="filterCategory"
                        onClick={() => toggleSection('allergy')}
                    >
                        <span>알레르기 여부</span>
                        <span className="arrow">{openSections.allergy ? '▲' : '▼'}</span>
                    </div>
                    {openSections.allergy && (
                        <div className="filterOptions">
                            {allergies.map((allergy) => (
                                <button
                                    key={allergy}
                                    className={`optionBtn ${selectedFilters.includes(allergy) ? 'selected' : ''}`}
                                    onClick={() => handleFilterClick(allergy)}
                                >
                                    {allergy}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="filterFooter">
                    <button className="resetBtn" onClick={handleReset}>🔄</button>
                    <button className="applyBtn" onClick={handleApply}>필터 적용</button>
                </div>
            </main>
        </div>
    );
}

export default Filter;