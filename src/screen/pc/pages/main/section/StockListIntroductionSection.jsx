import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import selected_image from "../../../../../images/Selected_Image.png"
import analyzed_image from "../../../../../images/Analyzed_Image.png"
import predicted_image from "../../../../../images/Predicted_Image.png"
import {useMediaQuery} from "react-responsive";

const NavSectionWrapper = styled.div`
    padding: 8em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #264653;
`;

const MobileNavSectionWrapper = styled.div`
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #264653;
`;

const NavSectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 7em;
    width: 100%;
    padding: 4em 0;
`;


const MobileNavSectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 100%;
    margin: 6em 0;
`;

const NavTitle = styled(motion.p)`
    font-size: 2.5em;
    white-space: pre-line;
    padding-bottom: 0.5em;
    color: white;
    text-align: center;
    font-family: pretendard-bold;
`;

const MobileNavTitle = styled(motion.p)`
    font-size: 1.1em;
    white-space: pre-line;
    line-height: 1.2;
    color: white;
    text-align: center;
    padding-bottom: 0.2em;
    font-family: pretendard-bold;
`;

const NavContent = styled.p`
    font-size: 1.25rem;
    white-space: pre-line;
    line-height: 1.2;
    color: white;
    padding-bottom: 0.5em;
    width: 100%;
    font-family: pretendard;
`;

const MobileNavContent = styled.p`
    font-size: 0.5em;
    white-space: pre-line;
    line-height: 1.2;
    color: white;
    width: 100%;
    padding-bottom: 0.3em;
    font-family: pretendard;
`;

const LogoImage = styled.img`
    width: 18rem;
    bottom: 2.5rem;
    right: 2.5rem;
`;

const MobileLogoImage = styled.img`
    width: 15rem;
    bottom: 2.5em;
    right: 2.5em;
`;

const StockListIntroductionSection = () => {

    const isOverTablet = useMediaQuery({
        query: "(min-width: 900px)"
    });
    const isMidTablet = useMediaQuery({
        query: "(min-width: 750px) and (max-width: 900px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:750px)"
    });

    return (<>
            {isOverTablet && <NavSectionWrapper>
                <div>
                    <NavTitle
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"서비스가 제공하는"}
                    </NavTitle>
                    <NavTitle
                        style={{marginBottom: "1.5em"}}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"AI 기반 시스템을 소개합니다"}
                    </NavTitle>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <LogoImage style={{width: "30em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{("Selected")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"서비스에서 선정된 자산 현황"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"KOSPI 50구성 종목에서\n거래량과 변동%를 기준으로 선정됩니다"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"선정된 자산들의 주가 데이터를 제공합니다"}</NavContent>
                        </div>
                    </NavSectionContainer>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{"Analyzed"}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 테스트 분석"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"선정된 자산별 AI를 이용한\n테스트 수익 및 데이터를 제공합니다"}</NavContent>
                        </div>
                        <LogoImage style={{width: "25em"}} src={analyzed_image} alt={"image"}/>
                    </NavSectionContainer>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <LogoImage style={{width: "28em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{"Predicted"}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 추천"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"테스트가 완료된 자산별\nAI가 추천하는 예측 행동을 제공합니다"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"예측 행동을 통해 투자 결정을 보조합니다"}</NavContent>
                        </div>
                    </NavSectionContainer>
                </div>
            </NavSectionWrapper>}
            {isMidTablet && <NavSectionWrapper>
                <div>
                    <NavTitle
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"서비스가 제공하는"}
                    </NavTitle>
                    <NavTitle
                        style={{marginBottom: "1.5em"}}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"AI 기반 시스템을 소개합니다"}
                    </NavTitle>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <LogoImage style={{width: "21em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{"Selected"}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"서비스에서 선정된 자산 현황"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"KOSPI 50구성 종목에서\n거래량과 변동%를 기준으로 선정됩니다"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"선정된 자산들의 주가 데이터를 제공합니다"}</NavContent>
                        </div>
                    </NavSectionContainer>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{"Analyzed"}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 테스트 분석"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"선정된 자산별 AI를 이용한\n테스트 수익 및 데이터를 제공합니다"}</NavContent>
                        </div>
                        <LogoImage style={{width: "18em"}} src={analyzed_image} alt={"image"}/>
                    </NavSectionContainer>
                    <NavSectionContainer
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <LogoImage style={{width: "21em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{"Predicted"}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 추천"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"테스트가 완료된 자산별\nAI가 추천하는 예측 행동을 제공합니다"}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{"예측 행동을 통해 투자 결정을 보조합니다"}</NavContent>
                        </div>
                    </NavSectionContainer>
                </div>
            </NavSectionWrapper>}
            {isMobile && <MobileNavSectionWrapper>
                <div>
                    <MobileNavTitle
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"서비스가 제공하는"}
                    </MobileNavTitle>
                    <MobileNavTitle
                        style={{marginBottom: "2em"}}
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {"AI 기반 시스템을 소개합니다"}
                    </MobileNavTitle>
                    <MobileNavSectionContainer
                        style={{marginTop: "3em"}}
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <MobileLogoImage style={{width: "18em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{"Selected"}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontFamily: "pretendard-bold"
                            }}>{"서비스에서 선정된 자산별 현황"}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{"KOSPI 50구성 종목에서 거래량과 변동%를 기준으로 선정됩니다"}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{"선정된 자산들의 주가 데이터를 제공합니다"}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                    <MobileNavSectionContainer
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <MobileLogoImage src={analyzed_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{"Analyzed"}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 테스트 분석"}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{"선정된 자산별 AI를 이용한 테스트 수익 및 데이터를 제공합니다"}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                    <MobileNavSectionContainer
                        style={{marginBottom: "2em"}}
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <MobileLogoImage style={{width: "17em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{"Predicted"}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontFamily: "pretendard-bold"
                            }}>{"자산별 AI 추천"}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{"테스트가 완료된 자산별 AI가 추천하는 예측 행동을 제공합니다"}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{"예측 행동을 통해 투자 결정을 보조합니다"}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                </div>
            </MobileNavSectionWrapper>}
        </>);
};

export default StockListIntroductionSection;
