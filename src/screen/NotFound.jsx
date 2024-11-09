import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NotFoundIcon from "../images/NotFound.png";
import {useMediaQuery} from "react-responsive";

const ErrorBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    height: 100vh;
    background-color: #E7EAF4;
`;

const Icon = styled.img`
    width: 20em;
`;

const MobileIcon = styled.img`
    width: 13em;
`;

const Text = styled.p`
    font-size: 2em;
    font-family: pretendard-bold;
`

const MobileText = styled.p`
    font-size: 1.2em;
    font-family: pretendard-bold;
`

const Link = styled.a`
    cursor: pointer;
    font-size: 1.5em;
    text-decoration: underline;
    color: #264653;
    font-family: pretendard-bold;

    &:hover {
        color: blue;
    }
`;

const MobileLink = styled.a`
    cursor: pointer;
    font-size: 1em;
    text-decoration: underline;
    color: blue;
    font-family: pretendard-bold;
`;

const NotFound = () => {
    const isOverTablet = useMediaQuery({
        query: "(min-width:750px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:750px)"
    });

    const navigate = useNavigate();

    const handleHomePage = () => {
        navigate("/");
    };

    return (
        <>
            {isOverTablet &&
                <>
                    <ErrorBox>
                        <Icon src={NotFoundIcon} />
                        <Text>Sorry, Page not found</Text>
                        <Text>The page you requested could not be found</Text>
                        <Link onClick={handleHomePage}>Go HomePage</Link>
                    </ErrorBox>
                </>
            }
            {isMobile &&
                <>
                    <ErrorBox>
                        <MobileIcon src={NotFoundIcon} />
                        <MobileText>Sorry, Page not found</MobileText>
                        <MobileText>The page you requested could not be found</MobileText>
                        <MobileLink onClick={handleHomePage}>Go HomePage</MobileLink>
                    </ErrorBox>
                </>
            }
        </>
    );
};

export default NotFound;