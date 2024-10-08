import React from "react";
import styled from "styled-components";
import NavBox from "../../components/NavBox";
import stock_character from "../../../../../images/stock_character.png"
import {useMediaQuery} from "react-responsive";

const wrapTextWithLang = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line.split('').map((char, index) => {
                const isKorean = /[가-힣]/.test(char);
                const lang = isKorean ? 'ko' : 'en';
                return <span key={index} lang={lang}>{char}</span>;
            })}
            <br/>
        </React.Fragment>
    ));
};

const NavSectionWrapper = styled.div`
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
`;

const MobileNavSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const NavTitle = styled.p`
    font-size: 3rem;
    white-space: pre-line;
    font-weight: bold;
    line-height: 1.2;
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
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const LogoImage = styled.img`
    width: 25rem;
    bottom: 2.5rem;
    right: 2.5rem;
`;

const MobileLogoImage = styled.img`
    width: 10rem;
    bottom: 2.5em;
    right: 2.5em;
`;

const NavSection = () => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    return (
        <>
            {isOverTablet &&
                <NavSectionWrapper>
                    <NavSectionContainer>
                        <div>
                            <NavTitle style={{color: "#1454FF"}}>{wrapTextWithLang("어려운 주식 투자 선택")}</NavTitle>
                            <NavTitle style={{paddingBottom: "1rem"}}>{wrapTextWithLang("AI 기술과 함께")}</NavTitle>
                            <NavContent>{wrapTextWithLang("AI 모델 성과 및 수익률 분석\n서비스에서 선정된 자산별 현황을 확인해보세요")}</NavContent>
                        </div>
                        <LogoImage src={stock_character} alt={"image"}/>
                    </NavSectionContainer>
                </NavSectionWrapper>
            }
            {isMobile &&
                <NavSectionWrapper>
                    <MobileNavSectionContainer>
                        <div>
                            <MobileNavTitle style={{color: "#1454FF"}}>{wrapTextWithLang("어려운 주식 투자 선택")}</MobileNavTitle>
                            <MobileNavTitle style={{paddingBottom: "0.6rem"}}>{wrapTextWithLang("AI 기술과 함께")}</MobileNavTitle>
                            <MobileNavContent>{wrapTextWithLang("AI 모델 성과 및 수익률 분석\n서비스에서 선정된 자산별 현황을 확인해보세요")}</MobileNavContent>
                        </div>
                        <MobileLogoImage src={stock_character} alt={"image"}/>
                    </MobileNavSectionContainer>
                </NavSectionWrapper>
            }
        </>
    );
};

export default NavSection;
