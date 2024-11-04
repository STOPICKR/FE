import React from "react";
import styled from "styled-components";
import BlueButton from "./BlueButton";

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
    font-family: pretendard;
`;

const IntroductionBoxTitle = styled.p`
    font-size: 1.3em;
    white-space: pre-line;
    line-height: 1.2;
    font-family: pretendard-bold;
`;

const IntroductionBoxContent = styled.p`
    font-size: 0.8em;
    white-space: pre-line;
    line-height: 1.5;
    font-family: pretendard;
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
    font-family: pretendard;
`;

const MobileIntroductionBox = ({subTitle, title, content, detail, buttonText, onClick}) => {
    return (
        <IntroductionBoxWrapper>
            <IntroductionTitleContainer>
                <IntroductionBoxSubTitle>{subTitle}</IntroductionBoxSubTitle>
                <IntroductionBoxTitle>{title}</IntroductionBoxTitle>
                <IntroductionBoxContent>{content}</IntroductionBoxContent>
            </IntroductionTitleContainer>
            <BottomContainer>
                {detail && <IntroductionBoxDetail>{detail}</IntroductionBoxDetail>}
                {buttonText && <BlueButton buttonText={buttonText} onClick={onClick}/>}
            </BottomContainer>
        </IntroductionBoxWrapper>
    );
};

export default MobileIntroductionBox;