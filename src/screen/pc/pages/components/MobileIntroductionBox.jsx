import React from "react";
import styled from "styled-components";
import BlueButton from "./BlueButton";

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

const IntroductionBoxWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-radius: 2.25rem;
    padding: 1.8em;
    background-color: white;
`;

const IntroductionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
`;

const IntroductionBoxSubTitle = styled.p`
    font-size: 0.7em;
    white-space: pre-line;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const IntroductionBoxTitle = styled.p`
    font-size: 1.3em;
    font-weight: bold;
    white-space: pre-line;
    line-height: 1.2;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const IntroductionBoxContent = styled.p`
    font-size: 0.8em;
    white-space: pre-line;
    line-height: 1.5;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 1em 0;
`;

const IntroductionBoxDetail = styled.p`
    font-size: 0.8em;
    white-space: pre-line;
    opacity: 0.5;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const MobileIntroductionBox = ({subTitle, title, content, detail, buttonText, onClick}) => {
    return (
        <IntroductionBoxWrapper>
            <IntroductionTitleContainer>
                <IntroductionBoxSubTitle>{wrapTextWithLang(subTitle)}</IntroductionBoxSubTitle>
                <IntroductionBoxTitle>{wrapTextWithLang(title)}</IntroductionBoxTitle>
                <IntroductionBoxContent>{wrapTextWithLang(content)}</IntroductionBoxContent>
            </IntroductionTitleContainer>
            <BottomContainer>
                {detail && <IntroductionBoxDetail>{wrapTextWithLang(detail)}</IntroductionBoxDetail>}
                {buttonText && <BlueButton buttonText={buttonText} onClick={onClick}/>}
            </BottomContainer>
        </IntroductionBoxWrapper>
    );
};

export default MobileIntroductionBox;