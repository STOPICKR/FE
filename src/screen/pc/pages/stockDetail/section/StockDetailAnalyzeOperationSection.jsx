import React from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

const StockDetailAnalyzeSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #264653;
`;

const StockDetailAnalyzeSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70.625em;
    margin: 0 1.2em 2em 1.2em;
    gap: 1.875rem;
`;

const StockDetailAnalyzeSectionInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5em 2.5em 2em 2.5em;
    gap: 1.875rem;
    background-color: white;
    border-radius: 2.25rem;
`

const MobileStockDetailAnalyzeSectionInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.8em 1em 1em 1em;
    gap: 1.875rem;
    background-color: white;
    border-radius: 2.25rem;
`

const StockTitleInnerBox = styled.div`
    display: flex;
    justify-content: start;
    align-items: baseline;
    gap: 1em;
`;

const StockTitle = styled.p`
    font-size: 1.8em;
    font-family: pretendard-bold;
`;

const MobileStockTitle = styled.p`
    font-size: 1.2em;
    padding-left: 0.5em;
    font-family: pretendard-bold;
`;

const StockTestAnalyzeBox = styled.div`
    display: flex;
    gap: 1.875rem;
    justify-content: center;
    align-items: center;
`

const StockReturnsPercentBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StockReturnsTextBox = styled.div`
    display: flex;
    flex: 1;
    background-color: #264653;
    padding: 1.2em 0;
    width: 100%;
    border-top-left-radius: 2.25em;
    border-top-right-radius: 2.25em;
`

const MobileStockReturnsTextBox = styled.div`
    display: flex;
    flex: 1.5;
    background-color: #264653;
    padding: 1.2em 0;
    width: 100%;
    border-top-left-radius: 2.25em;
    border-top-right-radius: 2.25em;
`

const StockReturnsText = styled.p`
    display: flex;
    flex: 1;
    justify-content: center;
    font-size: 1.1em;
    font-family: pretendard-bold;
    white-space: pre-line;
    color: white;
`;

const StockReturnsPercentTextBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    border-bottom-left-radius: 2.25em;
    border-bottom-right-radius: 2.25em;
    background-color: rgba(238, 238, 238, 0.87);
`

const StockPredictActionText = styled.p`
    font-size: 1.2em;
    font-family: pretendard-bold;
    color: black;
    white-space: pre-line;
`;

const StockAnalyzeOperationDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    justify-content: space-between;
    gap: 1em;
`

const MobileStockAnalyzeOperationDetailBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.7;
    justify-content: space-between;
    gap: 0.5em;
`

const OperationExplainTitle = styled.p`
    font-size: 1.5em;
    white-space: pre-line;
    font-family: pretendard-bold;
`;

const OperationExplainSubTitle = styled.p`
    font-size: 1em;
    white-space: pre-line;
    font-family: pretendard-bold;
`;

const OperationExplainContent = styled.p`
    font-size: 1.2em;
    white-space: pre-line;
    line-height: 1.3;
    font-family: pretendard;
`;

const MobileOperationExplainContent = styled.p`
    font-size: 0.9em;
    white-space: pre-line;
    line-height: 1.3;
    font-family: pretendard;
`;

const StockDetailAnalyzeOperationSection = ({testResult, predictionResult}) => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    if (!predictionResult) {
        return <p>Loading...</p>; // 데이터를 불러오는 동안 표시할 내용
    }

    return (
        <>
            {isOverTablet &&
                <StockDetailAnalyzeSectionWrapper>
                    <StockDetailAnalyzeSectionContainer>
                        <StockDetailAnalyzeSectionInnerContainer>
                            <StockTitleInnerBox>
                                <StockTitle>{"테스트 결과 기반 매도/매수 전력"}</StockTitle>
                                {/*<StockSubTitle>{wrapTextWithLang("매도/매수 전략")}</StockSubTitle>*/}
                            </StockTitleInnerBox>
                            <StockTestAnalyzeBox>
                                <StockReturnsPercentBox>
                                    <StockReturnsTextBox>
                                        <StockReturnsText>
                                            AI 추천
                                        </StockReturnsText>
                                    </StockReturnsTextBox>
                                    <StockReturnsPercentTextBox>
                                        <StockPredictActionText>
                                            {predictionResult.action}
                                        </StockPredictActionText>
                                    </StockReturnsPercentTextBox>
                                </StockReturnsPercentBox>
                                <StockAnalyzeOperationDetailBox>
                                    <OperationExplainTitle>{"서비스 운영 방식"}</OperationExplainTitle>
                                    <OperationExplainSubTitle>{"매수/매도 전략"}</OperationExplainSubTitle>
                                    <OperationExplainContent>{"AI 모델은 과거 데이터와 현재 시장 상황을 분석하여 다음 날의 주가 움직임을 예측합니다.\n예측 결과에 따라 매수(Buy), 매도(Sell), 또는 보유(Hold) 결정을 내립니다."}</OperationExplainContent>
                                </StockAnalyzeOperationDetailBox>
                            </StockTestAnalyzeBox>
                        </StockDetailAnalyzeSectionInnerContainer>
                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
            {isMobile &&
                <StockDetailAnalyzeSectionWrapper>
                    <StockDetailAnalyzeSectionContainer>
                        <MobileStockDetailAnalyzeSectionInnerContainer>
                            <StockTitleInnerBox>
                                <MobileStockTitle>{"테스트 결과 기반 매도/매수 전략"}</MobileStockTitle>
                            </StockTitleInnerBox>
                            <StockTestAnalyzeBox>
                                <StockReturnsPercentBox>
                                    <MobileStockReturnsTextBox>
                                        <StockReturnsText>
                                            AI 추천
                                        </StockReturnsText>
                                    </MobileStockReturnsTextBox>
                                    <StockReturnsPercentTextBox>
                                        <StockPredictActionText>
                                            {predictionResult.action}
                                        </StockPredictActionText>
                                    </StockReturnsPercentTextBox>
                                </StockReturnsPercentBox>
                                <MobileStockAnalyzeOperationDetailBox>
                                    <OperationExplainSubTitle>{"서비스 운영 방식"}</OperationExplainSubTitle>
                                    <MobileOperationExplainContent>{"매수/매도 전략"}</MobileOperationExplainContent>
                                    <MobileOperationExplainContent>{"AI 모델은 과거 데이터와 현재 시장 상황을 분석하여 다음 날의 주가 움직임을 예측합니다.\n예측 결과에 따라 매수(Buy), 매도(Sell), 또는 보유(Hold) 결정을 내립니다."}</MobileOperationExplainContent>
                                </MobileStockAnalyzeOperationDetailBox>
                            </StockTestAnalyzeBox>
                        </MobileStockDetailAnalyzeSectionInnerContainer>
                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
        </>
    );
};

export default StockDetailAnalyzeOperationSection;
