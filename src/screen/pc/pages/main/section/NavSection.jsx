import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const NavSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0 ;
    width: 100%;
    gap: 0.5em;
`;

const MobileNavSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5em 0;
    width: 100%;
    gap: 0.2em;
`;

const NavTitle = styled.p`
    font-size: 3.5rem;
    white-space: pre-line;
    line-height: 1.2;
    text-align: center;
    font-family: pretendard-bold;
`;

const MobileNavTitle = styled.p`
    font-size: 1.5em;
    white-space: pre-line;
    line-height: 1.2;
    text-align: center;
    font-family: pretendard-bold;
`;

const NavContent = styled.p`
    font-size: 1.25rem;
    white-space: pre-line;
    line-height: 1.2;
    text-align: center;
    font-family: pretendard;
`;

const MobileNavContent = styled.p`
    font-size: 0.8em;
    white-space: pre-line;
    line-height: 1.4;
    text-align: center;
    font-family: pretendard;
`;

const LogoImage = styled.img`
    width: 20rem;
    bottom: 2.5rem;
    right: 2.5rem;
`;

const MobileLogoImage = styled.img`
    width: 7rem;
    bottom: 2.5em;
    right: 2.5em;
`;

const Button = styled.button`
    padding: 12px 0;
    margin-top: 2em;
    font-size: 16px;
    width: 30%;
    background-color: #264653;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: pretendard-bold;
`;

const MobileButton = styled.button`
    padding: 0.6em 0;
    margin-top: 1em;
    font-size: 0.8em;
    width: 30%;
    background-color: #264653;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: pretendard-bold;
`;

const NavSection = () => {

    const navigate = useNavigate();

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    const navigateStockList = () => {
        navigate("/stock-list");
    };

    return (
        <>
            {isOverTablet &&
                <NavSectionWrapper>
                    <NavSectionContainer>
                            <NavTitle style={{color: "#1454FF"}}>{"어려운 주식 투자"}</NavTitle>
                            <NavTitle style={{paddingBottom: "1rem"}}>{"AI 기술과 함께 알아보세요"}</NavTitle>
                            <NavContent>{"AI 모델 성과 및 수익률 분석\n서비스에서 선정된 산별 현황을 확인해보세요"}</NavContent>
                            <Button onClick={navigateStockList}>AI 성과 분석 확인하기</Button>
                        {/*<LogoImage src={Logo} alt={"image"}/>*/}
                    </NavSectionContainer>
                </NavSectionWrapper>
            }
            {isMobile &&
                <NavSectionWrapper>
                    <MobileNavSectionContainer>
                        {/*<div>*/}
                            <MobileNavTitle style={{color: "#1454FF"}}>{"어려운 주식 투자"}</MobileNavTitle>
                            <MobileNavTitle style={{paddingBottom: "0.6rem"}}>{"AI 기술과 함께 알아보세요"}</MobileNavTitle>
                            <MobileNavContent>{"AI 모델 성과 및 수익률 분석\n서비스에서 선정된 자산별 현황을 확인해보세요"}</MobileNavContent>
                            <MobileButton onClick={navigateStockList}>AI 성과 분석 확인하기</MobileButton>
                        {/*</div>*/}
                        {/*<MobileLogoImage src={stock_character} alt={"image"}/>*/}
                    </MobileNavSectionContainer>
                </NavSectionWrapper>
            }
        </>
    );
};

export default NavSection;
