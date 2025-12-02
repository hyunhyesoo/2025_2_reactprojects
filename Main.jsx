import React, { useState } from "react";
import Top from "./Top";
import Home from "./Home";
import Filter from "./Filter";
import Detail from "./Detail";

function Main() {
    const [page, setPage] = useState("home"); // 기본값

    const renderPage = () => {
        if (page === "home") return <Home onNavigate={setPage}/>;
        if (page === "filter") return <Filter />;
        if (page === "detail") return <Detail />;
        return <Home onNavigate={setPage}/>;
    };

    return (
        <div>
            <Top onNavigate={setPage} />
            {renderPage()}
        </div>
    );
}

export default Main;
