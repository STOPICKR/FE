import React from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

const wrapTextWithLang = (text) => {
    if (!text) return null; // text가 undefined나 null인 경우 아무것도 반환하지 않음
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

const StockTitleInnerBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: baseline;
    gap: 1em;
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

const MobileStockTitle = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockSubTitle = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const MobileStockCode = styled.p`
    font-size: 0.8em;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockTitleContainer = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
    padding: 1.25rem 2.5rem 2.5rem 2.5rem;
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
    flex: 1.5;
    justify-content: center;
    align-items: center;
`;

const StockReturnsTextBox = styled.div`
    display: flex;
    flex: 1;
    background-color: #264653;
    padding: 1.2em 0;
    width: 100%;
    border: solid 1px #264653;
    border-top-left-radius: 2.25em;
    border-top-right-radius: 2.25em;
`

const StockReturnsText = styled.p`
    display: flex;
    flex: 1;
    justify-content: center;
    font-size: 1.6em;
    font-family: pretendard;
    font-weight: bold;
    white-space: pre-line;
    color: white;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }
    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockReturnsPercentTextBox = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1em 0;
    border: solid 1px #264653;
    border-bottom-left-radius: 2.25em;
    border-bottom-right-radius: 2.25em;
`

const StockReturnsPercentText = styled.p`
    font-size: 2.5em;
    font-family: pretendard;
    font-weight: bold;
    color: ${({profit}) => (profit >= 0 ? 'red' : 'blue')};
    white-space: pre-line;
    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockAIRecommendText = styled.p`
    font-size: 2rem;
    font-family: pretendard;
    font-weight: bold;
    color: red;
    white-space: pre-line;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockAnalyzeValueColumn = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    gap: 1.875rem;
`;

const OperationExplain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem 2.5rem;
    gap: 1.875rem;
`;

const OperationExplainTitle = styled.p`
    font-size: 2.25rem;
    font-weight: bold;
    white-space: pre-line;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const OperationExplainSubTitle = styled.p`
    font-size: 2rem;
    white-space: pre-line;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const OperationExplainContent = styled.p`
    font-size: 1.5rem;
    white-space: pre-line;
    line-height: 1.3;

    [lang="en"] {
        font-family: 'Inter', sans-serif;
    }

    [lang="ko"] {
        font-family: 'pretendard', sans-serif;
    }
`;

const StockAnalyzeValue = ({valueText, value}) => {
    return (
        <div style={{
            display: "flex",
            flex: "1",
            justifyContent: "space-between",
            padding: "1.25rem",
            borderRadius: "1.125rem",
            backgroundColor: "#BEC8CC"
        }}>
            <p style={{
                fontSize: "1.1em",
                fontFamily: "pretendard",
                fontWeight: "bold",
                color: "#5F6466"
            }}>{wrapTextWithLang(valueText)}</p>
            <p style={{fontSize: "1.1em", fontFamily: "pretendard", fontWeight: "bold"}}>{wrapTextWithLang(value)}</p>
        </div>
    );
};

const StockDetailAnalyzeSection = ({testResult, predictionResult}) => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    if (!testResult || !predictionResult) {
        return <p>Loading...</p>; // 데이터를 불러오는 동안 표시할 내용
    }

    const initialCapital = 1000000;
    const endCapital = initialCapital + testResult.averageProfit;
    const testCount = '10회'
    const tradingUnit = '10주';
    const profitRate = ((endCapital - initialCapital) / initialCapital) * 100;

    const formattedEndCapital = testResult.endCapital ? testResult.endCapital.toLocaleString() : "N/A";
    const formattedAverageProfit = profitRate !== undefined ? `${profitRate}%` : "N/A";

    return (
        <>
            {isOverTablet &&
                <StockDetailAnalyzeSectionWrapper>
                    <StockDetailAnalyzeSectionContainer>
                        <StockDetailAnalyzeSectionInnerContainer>
                            <StockTitleInnerBox>
                                <StockTitle>{wrapTextWithLang("STOPICKR AI")}</StockTitle>
                                <StockSubTitle>{wrapTextWithLang("테스트 결과 분석")}</StockSubTitle>
                            </StockTitleInnerBox>
                            <StockTestAnalyzeBox>
                                <StockReturnsPercentBox>
                                    <StockReturnsTextBox>
                                        <StockReturnsText>
                                            테스트 수익률
                                        </StockReturnsText>
                                    </StockReturnsTextBox>
                                    <StockReturnsPercentTextBox>
                                        <StockReturnsPercentText profit={testResult.averageProfit}>
                                            {wrapTextWithLang(formattedAverageProfit)}
                                        </StockReturnsPercentText>
                                    </StockReturnsPercentTextBox>
                                </StockReturnsPercentBox>
                                <StockAnalyzeValueColumn>
                                    <StockAnalyzeValue valueText={"초기 자본금"} value={initialCapital.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"테스트 시작일"} value={testResult.startDate || "N/A"}/>
                                    <StockAnalyzeValue valueText={"테스트 종료일"} value={testResult.endDate || "N/A"}/>
                                </StockAnalyzeValueColumn>
                                <StockAnalyzeValueColumn>
                                    <StockAnalyzeValue valueText={"종료 후 자본금"} value={endCapital.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"거래 단위"} value={tradingUnit.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"테스트 횟수"} value={testCount.toLocaleString()}/>
                                </StockAnalyzeValueColumn>
                            </StockTestAnalyzeBox>
                            <div>
                                <p>{wrapTextWithLang(`AI 추천 : ${predictionResult.action}`)}</p>
                                <p>{wrapTextWithLang("서비스 운영 방식")}</p>
                                <p>{wrapTextWithLang("매수/매도 전략")}</p>
                                <p>{wrapTextWithLang("AI 모델은 과거 데이터와 현재 시장 상황을 분석하여 다음 날의 주가 움직임을 예측합니다. 예측 결과에 따라 매수, 매도, 또는 보유 결정을 내립니다.")}</p>
                            </div>
                        </StockDetailAnalyzeSectionInnerContainer>
                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
            {isMobile &&
                <StockDetailAnalyzeSectionWrapper>
                    <StockDetailAnalyzeSectionContainer>
                        <StockDetailAnalyzeSectionInnerContainer>
                            <p>{wrapTextWithLang("STOPICKR AI 기반 주식 분석")}</p>
                            <div>
                                <div>
                                    <p profit={testResult.averageProfit}>
                                        {wrapTextWithLang(formattedAverageProfit)}
                                    </p>
                                </div>
                                <StockAnalyzeValueColumn>
                                    <StockAnalyzeValue valueText={"초기 자본금"} value={initialCapital.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"테스트 시작일"} value={testResult.startDate || "N/A"}/>
                                    <StockAnalyzeValue valueText={"테스트 종료일"} value={testResult.endDate || "N/A"}/>
                                </StockAnalyzeValueColumn>
                                <StockAnalyzeValueColumn>
                                    <StockAnalyzeValue valueText={"종료 후 자본금"} value={endCapital.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"거래 단위"} value={tradingUnit.toLocaleString()}/>
                                    <StockAnalyzeValue valueText={"테스트 횟수"} value={testCount.toLocaleString()}/>
                                </StockAnalyzeValueColumn>
                            </div>
                            <div>
                                <p>{wrapTextWithLang(`AI 추천 : ${predictionResult.action}`)}</p>
                                <p>{wrapTextWithLang("서비스 운영 방식")}</p>
                                <p>{wrapTextWithLang("매수/매도 전략")}</p>
                                <p>{wrapTextWithLang("AI 모델은 과거 데이터와 현재 시장 상황을 분석하여 다음 날의 주가 움직임을 예측합니다. 예측 결과에 따라 매수, 매도, 또는 보유 결정을 내립니다.")}</p>
                            </div>
                        </StockDetailAnalyzeSectionInnerContainer>

                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
        </>
    );
};

export default StockDetailAnalyzeSection;
