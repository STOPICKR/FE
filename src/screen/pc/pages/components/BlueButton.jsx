import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.div`
    font-size: 1rem;
    text-align: center;
    white-space: pre-line;
    color: white;
    width: auto;
    height: auto;
    font-family: pretendard-bold;

    cursor: pointer;
    border-radius: 30px;
    padding: 0.625rem 1.2rem;
    background-color: #1454FF;
`;

const BlueButton = ({buttonText, onClick}) => {
    return (
        <ButtonWrapper onClick={onClick}>{buttonText}</ButtonWrapper>
    );
};

export default BlueButton;