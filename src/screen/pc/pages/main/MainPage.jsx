import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavSection from "./section/NavSection";
import StockListIntroductionSection from "./section/StockListIntroductionSection";
import StockAnalyzeIntroductionSection from "./section/StockAnalyzeIntroductionSection";

const MainPage = () => {
    return(
        <div>
            <Header/>
            <NavSection/>
            <StockListIntroductionSection/>
            {/*<StockAnalyzeIntroductionSection/>*/}
            {/*<StockSection/>*/}
            {/*<IndexSection/>*/}
            <Footer/>
        </div>
    );
};

export default MainPage;