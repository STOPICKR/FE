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
    padding: 2.5rem;
    background-color: white;
`;

const IntroductionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const IntroductionBoxSubTitle = styled.p`
    font-size: 1rem;
    white-space: pre-line;
    font-family: pretendard;
`;

const IntroductionBoxTitle = styled.p`
    font-size: 1.8em;
    white-space: pre-line;
    line-height: 1.2;
    font-family: pretendard-bold;
`;

const IntroductionBoxContent = styled.p`
    font-size: 1.1em;
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
    font-size: 1em;
    white-space: pre-line;
    opacity: 0.5;
    font-family: pretendard;
`;

const IntroductionBox = ({subTitle, title, content, detail, buttonText, onClick}) => {
    return(
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

export default IntroductionBox;