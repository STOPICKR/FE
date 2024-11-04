import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavSection from "./section/NavSection";
import StockListIntroductionSection from "./section/StockListIntroductionSection";

const MainPage = () => {
    return (<div>
            <Header/>
            <NavSection/>
            <StockListIntroductionSection/>
            <Footer/>
        </div>);
};

export default MainPage;