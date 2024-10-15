import React from "react";
import ContainerTitle from "../../components/ContainerTitle";
import styled from "styled-components";
import BlueButton from "../../components/BlueButton";
import StockGraph from "../../components/StockGraph";

const wrapTextWithLang = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line.split('').map((char, index) => {
                const isKorean = /[가-힣]/.test(char);
                const lang = isKorean ? 'ko' : 'en';
                return <span key={index} lang={lang}>{char}</span>;
            })}
            <br />
        </React.Fragment>
    ));
};

const StockDetailSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #264653;
`;

const StockDetailSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70.625em;
    margin: 2em 1.2em;
    gap: 1.875rem;
`;

const StockDetail = styled.div`
    display: flex;
    padding: 2.5em 2.5em 2em 2.5em;
    gap: 1.875rem;
    background-color: white;
    border-radius: 2.25rem;
`;

const StockDetailLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
`;

const StockDetailRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const StockTitleBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StockTitleInnerBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: baseline;
    gap: 1em;
    padding-left: 1em;
`;

const StockTitle = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockCode = styled.p`
    font-size: 1.1rem;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockGraphWrapper = styled.div`
    width: 100%;
    height: 100%;  /* 원하는 크기로 설정 */
    margin-top: 1rem;
`;

const StockDetailSummary = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2.25rem;
    background-color: #264653;
    padding: 1.875rem;
    gap: 1.25rem;
    width: 12em;
`;

const StockDetailTitle = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1.6em;
    font-weight: bold;
    font-family: pretendard,serif;
    color: white;
`;

const StockDetailList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StockValueText = styled.p`
    font-size: 1.1em;
    font-family: pretendard,serif;
    color: white;
`;

const StockDetailSection = ({ stock }) => {
    if (!stock) {
        return <div>주식 데이터를 불러오는 중입니다...</div>;
    }

    const { itmsNm, isinCd, stockData } = stock;
    const latestData = stockData[0]; // 최신 데이터만 사용 (여기서 가장 최근 데이터를 사용하도록 변경)

    return (
        <StockDetailSectionWrapper>
            <StockDetailSectionContainer>
                <ContainerTitle subTitle={"다양한 주식 추천을 알아보고 투자하세요!"} />
                <StockDetail>
                    <StockDetailLeft>
                        <StockTitleBox>
                            <StockTitleInnerBox>
                                <StockTitle>{wrapTextWithLang(itmsNm)}</StockTitle>
                                <StockCode>{wrapTextWithLang(isinCd)}</StockCode>
                            </StockTitleInnerBox>
                            {/*<BlueButton buttonText={"포트폴리오 추가하기"} />*/}
                        </StockTitleBox>
                        <StockGraphWrapper>
                            <StockGraph stockData={stockData}/>
                        </StockGraphWrapper>
                    </StockDetailLeft>
                    <StockDetailRight>
                        <StockDetailSummary>
                            <StockDetailTitle>주식 정보</StockDetailTitle>
                            <StockDetailList>
                                <StockValueText>기준일</StockValueText>
                                <StockValueText>{latestData.basDt}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>시가</StockValueText>
                                <StockValueText>{latestData.mkp}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>종가</StockValueText>
                                <StockValueText>{latestData.clpr}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>고가</StockValueText>
                                <StockValueText>{latestData.hipr}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>저가</StockValueText>
                                <StockValueText>{latestData.lopr}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>변동</StockValueText>
                                <StockValueText>{latestData.clpr - latestData.mkp}</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>변동 %</StockValueText>
                                <StockValueText>{latestData.fltRt}%</StockValueText>
                            </StockDetailList>
                            <StockDetailList>
                                <StockValueText>거래량</StockValueText>
                                <StockValueText>{latestData.trqu}</StockValueText>
                            </StockDetailList>
                        </StockDetailSummary>
                    </StockDetailRight>
                </StockDetail>
            </StockDetailSectionContainer>
        </StockDetailSectionWrapper>
    );
};

export default StockDetailSection;
