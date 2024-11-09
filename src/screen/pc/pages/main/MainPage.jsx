import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import NavSection from "./section/NavSection";
import StockListIntroductionSection from "./section/StockListIntroductionSection";
import KakaoAdFit from "../../../../KakaoAdfit";
import {useMediaQuery} from "react-responsive";
import styled from "styled-components";

const KakaoAdFitWrapper  =styled.div`
    display: flex;
    background-color: #264653;
    justify-content: center;
    padding: 0.5em;
`

const MainPage = () => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:750px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:750px)"
    });

    return (
        <div>
            <Header/>
            <NavSection/>
            {isOverTablet &&
                <KakaoAdFitWrapper>
                    <KakaoAdFit unit="DAN-q5o3sBajTy2L9S51" width="728" height="90"/>
                </KakaoAdFitWrapper>
            }
            {isMobile &&
                <KakaoAdFitWrapper>
                    <KakaoAdFit unit="DAN-XA23ODbFMaBIwO8b" width="320" height="100"/>
                </KakaoAdFitWrapper>
            }
            <StockListIntroductionSection/>
            <Footer/>
        </div>);
};

export default MainPage;