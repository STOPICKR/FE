import React from "react";
import styled from "styled-components";

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
    font-size: 1.3em;
    font-family: pretendard-bold;
`;

const MobileContainerTitle = ({subTitle}) => {
    return(
        <TitleWrapper>
            <Title>{"STOPICKR에서"}</Title>
            <Title>{subTitle}</Title>
        </TitleWrapper>
    );
};

export default MobileContainerTitle;