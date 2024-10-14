import React from "react";
import styled from "styled-components";

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

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.5rem;
    width: 100%;
`;

const Title = styled.span`
    color: white;
    font-family: pretendard,serif;
    font-size: 1.3em;
    font-weight: bold;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const MobileContainerTitle = ({subTitle}) => {
    return(
        <TitleWrapper>
            <Title>{wrapTextWithLang("STOPICKR에서")}</Title>
            <Title>{wrapTextWithLang(subTitle)}</Title>
        </TitleWrapper>
    );
};

export default MobileContainerTitle;