import React from "react";
import styled from "styled-components";
import selected_image from "../../../../../images/Selected_Image.png"
import analyzed_image from "../../../../../images/Analyzed_Image.png"
import predicted_image from "../../../../../images/Predicted_Image.png"
import {useMediaQuery} from "react-responsive";

const wrapTextWithLang = (text) => {
    return text.split('\n').map((line, index) => (<React.Fragment key={index}>
            {line.split('').map((char, index) => {
                const isKorean = /[가-힣]/.test(char);
                const lang = isKorean ? 'ko' : 'en';
                return <span key={index} lang={lang}>{char}</span>;
            })}
            <br/>
        </React.Fragment>));
};

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

const NavSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 7em;
    width: 100%;
    padding: 4em 0;
`;


const MobileNavSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 100%;
    margin: 6em 0;
`;

const NavTitle = styled.p`
    font-size: 2.5em;
    white-space: pre-line;
    font-weight: bold;
    padding-bottom: 0.5em;
    color: white;
    text-align: center;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const MobileNavTitle = styled.p`
    font-size: 1.1em;
    white-space: pre-line;
    font-weight: bold;
    line-height: 1.2;
    color: white;
    text-align: center;
    padding-bottom: 0.2em;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const NavContent = styled.p`
    font-size: 1.25rem;
    white-space: pre-line;
    line-height: 1.2;
    color: white;
    padding-bottom: 0.5em;
    width: 100%;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const MobileNavContent = styled.p`
    font-size: 0.5em;
    white-space: pre-line;
    line-height: 1.2;
    color: white;
    width: 100%;
    padding-bottom: 0.3em;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
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
        query: "(min-width: 720px) and (max-width: 900px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    return (<>
            {isOverTablet && <NavSectionWrapper>
                <div>
                    <NavTitle>{wrapTextWithLang("서비스가 제공하는")}</NavTitle>
                    <NavTitle style={{marginBottom: "1.5em"}}>{wrapTextWithLang("AI 기반 시스템을 소개합니다")}</NavTitle>
                    <NavSectionContainer>
                        <LogoImage style={{width: "30em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Selected")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("서비스에서 선정된 자산 현황")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("KOSPI 50구성 종목에서\n거래량과 변동%를 기준으로 선정됩니다")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("선정된 자산들의 주가 데이터를 제공합니다")}</NavContent>
                        </div>
                    </NavSectionContainer>
                    <NavSectionContainer>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Analyzed")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 테스트 분석")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("선정된 자산별 AI를 이용한\n테스트 수익 및 데이터를 제공합니다")}</NavContent>
                        </div>
                        <LogoImage style={{width: "25em"}} src={analyzed_image} alt={"image"}/>
                    </NavSectionContainer>
                    <NavSectionContainer>
                        <LogoImage style={{width: "28em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Predicted")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 추천")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("테스트가 완료된 자산별\nAI가 추천하는 예측 행동을 제공합니다")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("예측 행동을 통해 투자 결정을 보조합니다")}</NavContent>
                        </div>
                    </NavSectionContainer>
                </div>
            </NavSectionWrapper>}
            {isMidTablet && <NavSectionWrapper>
                <div>
                    <NavTitle>{wrapTextWithLang("서비스가 제공하는")}</NavTitle>
                    <NavTitle style={{marginBottom: "1.5em"}}>{wrapTextWithLang("AI 기반 시스템을 소개합니다")}</NavTitle>
                    <NavSectionContainer>
                        <LogoImage style={{width: "21em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Selected")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("서비스에서 선정된 자산 현황")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("KOSPI 50구성 종목에서\n거래량과 변동%를 기준으로 선정됩니다")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("선정된 자산들의 주가 데이터를 제공합니다")}</NavContent>
                        </div>
                    </NavSectionContainer>
                    <NavSectionContainer>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Analyzed")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 테스트 분석")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("선정된 자산별 AI를 이용한\n테스트 수익 및 데이터를 제공합니다")}</NavContent>
                        </div>
                        <LogoImage style={{width: "18em"}} src={analyzed_image} alt={"image"}/>
                    </NavSectionContainer>
                    <NavSectionContainer>
                        <LogoImage style={{width: "21em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <NavContent style={{fontSize: "1em"}}>{wrapTextWithLang("Predicted")}</NavContent>
                            <NavContent style={{
                                fontSize: "2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 추천")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("테스트가 완료된 자산별\nAI가 추천하는 예측 행동을 제공합니다")}</NavContent>
                            <NavContent
                                style={{fontSize: "1.2em"}}>{wrapTextWithLang("예측 행동을 통해 투자 결정을 보조합니다")}</NavContent>
                        </div>
                    </NavSectionContainer>
                </div>
            </NavSectionWrapper>}
            {isMobile && <MobileNavSectionWrapper>
                <div>
                    <MobileNavTitle>{wrapTextWithLang("서비스가 제공하는")}</MobileNavTitle>
                    <MobileNavTitle
                        style={{marginBottom: "2em"}}>{wrapTextWithLang("AI 기반 시스템을 소개합니다")}</MobileNavTitle>
                    <MobileNavSectionContainer style={{marginTop: "3em"}}>
                        <MobileLogoImage style={{width: "18em"}} src={selected_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{wrapTextWithLang("Selected")}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("서비스에서 선정된 자산별 현황")}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{wrapTextWithLang("KOSPI 50구성 종목에서 거래량과 변동%를 기준으로 선정됩니다")}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{wrapTextWithLang("선정된 자산들의 주가 데이터를 제공합니다")}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                    <MobileNavSectionContainer>
                        <MobileLogoImage src={analyzed_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{wrapTextWithLang("Analyzed")}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 테스트 분석")}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{wrapTextWithLang("선정된 자산별 AI를 이용한 테스트 수익 및 데이터를 제공합니다")}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                    <MobileNavSectionContainer style={{marginBottom: "2em"}}>
                        <MobileLogoImage style={{width: "17em"}} src={predicted_image} alt={"image"}/>
                        <div>
                            <MobileNavContent
                                style={{fontSize: "0.6em"}}>{wrapTextWithLang("Predicted")}</MobileNavContent>
                            <MobileNavContent style={{
                                fontSize: "1.2em", fontWeight: "bold"
                            }}>{wrapTextWithLang("자산별 AI 추천")}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{wrapTextWithLang("테스트가 완료된 자산별 AI가 추천하는 예측 행동을 제공합니다")}</MobileNavContent>
                            <MobileNavContent
                                style={{fontSize: "0.8em"}}>{wrapTextWithLang("예측 행동을 통해 투자 결정을 보조합니다")}</MobileNavContent>
                        </div>
                    </MobileNavSectionContainer>
                </div>
            </MobileNavSectionWrapper>}
        </>);
};

export default StockListIntroductionSection;
