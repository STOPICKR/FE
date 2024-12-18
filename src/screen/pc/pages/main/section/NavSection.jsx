import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import { motion } from "framer-motion";
import double_arrow_down from "../../../../../images/double_arrow_down.svg";

const NavSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavSectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5em 0  2em 0;
    width: 100%;
    height: 60vh;
    gap: 0.5em;
`;

const MobileNavSectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5em 0 1em 0;
    width: 100%;
    height: 30vh;
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

const Button = styled(motion.div)`
    text-align: center;
    padding: 15px 0;
    margin-top: 2em;
    font-size: 16px;
    width: 25%;
    background-color: #264653;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: pretendard-bold;
    
    &:hover {
        background-color: #1454FF;
    }
`;

const MobileButton = styled.button`
    padding: 0.6em 0;
    margin-top: 1em;
    font-size: 0.8em;
    font-size: 0.8em;
    width:40%;
    background-color: #264653;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: pretendard-bold;
`;

const Arrow = styled(motion.img)`
    padding-top: 2em;
    width: 70px;
    opacity: 0.6;
`

const MobileArrow = styled(motion.img)`
    padding-top: 1em;
    width: 40px;
    opacity: 0.6;
`

const NavSection = () => {

    const navigate = useNavigate();

    const isOverTablet = useMediaQuery({
        query: "(min-width:750px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:750px)"
    });

    const navigateStockList = () => {
        navigate("/stock-list");
    };

    return (
        <>
            {isOverTablet &&
                <NavSectionWrapper>
                    <NavSectionContainer
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                            <NavTitle style={{color: "#1454FF"}}>{"어려운 주식 투자"}</NavTitle>
                            <NavTitle style={{paddingBottom: "1rem"}}>{"AI 기술과 함께 알아보세요"}</NavTitle>
                            <NavContent>{"AI 모델 성과 및 수익률 분석\n서비스에서 선정된 자산별 현황을 확인해보세요"}</NavContent>
                        <Button onClick={navigateStockList}>AI 성과 분석 상세 보기</Button>
                        <Arrow
                            src={double_arrow_down}
                            alt="double_arrow_down"
                            animate={{
                                y: [0, 7, 0]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </NavSectionContainer>
                </NavSectionWrapper>
            }
            {isMobile &&
                <NavSectionWrapper>
                    <MobileNavSectionContainer
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                            <MobileNavTitle style={{color: "#1454FF"}}>{"어려운 주식 투자"}</MobileNavTitle>
                            <MobileNavTitle style={{paddingBottom: "0.6rem"}}>{"AI 기술과 함께 알아보세요"}</MobileNavTitle>
                            <MobileNavContent>{"AI 모델 성과 및 수익률 분석\n서비스에서 선정된 자산별 현황을 확인해보세요"}</MobileNavContent>
                            <MobileButton onClick={navigateStockList}>AI 성과 분석 상세 보기</MobileButton>
                        <MobileArrow
                            src={double_arrow_down}
                            alt="double_arrow_down"
                            animate={{
                                y: [0, 5, 0]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </MobileNavSectionContainer>
                </NavSectionWrapper>
            }
        </>
    );
};

export default NavSection;
