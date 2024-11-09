import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import logo from "../../../images/logo.png"
import {useMediaQuery} from "react-responsive";

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    border-bottom: 1px solid;
    border-bottom-color: whitesmoke;
`;

const HeaderContainer = styled.div`
    display: flex;
    height: 5em;
    justify-content: space-between;
    align-items: center;
    width: 70.625em;
    padding: 0 1em;
`;

const MobileHeaderContainer = styled.div`
    display: flex;
    height: 4em;
    justify-content: space-between;
    align-items: center;
    width: 70.625em;
    padding: 0 1em;
`;

const NavBox = styled.div`
    display: flex;
    gap: 1em;
`;

const Nav = styled.div`
    font-family: pretendard-bold;
    font-size: 1.2em;
    cursor: pointer;
`;

const MobileNav = styled.div`
    font-family: pretendard-bold;
    font-size: 0.9em;
    cursor: pointer;
`;

const LogoImage = styled.img`
    width: 10em;
    cursor: pointer;
`;

const MobileLogoImage = styled.img`
    width: 7.5em;
    cursor: pointer;
`;

const Header = () => {

    const navigate = useNavigate();

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    function titleOnClickHandler() {
        navigate('/');
    }

    function stockListOnClickHandler() {
        navigate('/stock-list');
    }

    function portfolioOnClickHandler() {
        alert("서비스 준비중입니다.")
    }

    return (
        <>
            {
                isOverTablet &&
                <>
                    <HeaderWrapper>
                        <HeaderContainer>
                            <LogoImage src={logo} alt={"image"} onClick={titleOnClickHandler}/>
                            <NavBox>
                                <Nav onClick={stockListOnClickHandler}>AI 성과 분석</Nav>
                                <Nav onClick={portfolioOnClickHandler}>내 포트폴리오</Nav>
                            </NavBox>
                        </HeaderContainer>
                    </HeaderWrapper>
                </>
            }
            {
                isMobile &&
                <>
                    <HeaderWrapper>
                        <MobileHeaderContainer>
                            <MobileLogoImage src={logo} alt={"image"} onClick={titleOnClickHandler}/>
                            <NavBox>
                                <MobileNav onClick={stockListOnClickHandler}>AI 성과 분석</MobileNav>
                                <MobileNav onClick={portfolioOnClickHandler}>내 포트폴리오</MobileNav>
                            </NavBox>
                        </MobileHeaderContainer>
                    </HeaderWrapper>
                </>
            }
        </>
    );
};

export default Header;