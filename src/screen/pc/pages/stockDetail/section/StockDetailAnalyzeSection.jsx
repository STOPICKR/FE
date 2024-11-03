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

const MobileStockTitleInnerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: baseline;
    gap: 0.5em;
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
    font-size: 1.3em;
    font-weight: bold;
    padding-left: 0.5em;

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

const StockTestAnalyzeBox = styled.div`
    display: flex;
    gap: 1.875rem;
    justify-content: center;
    align-items: center;
`

const MobileStockTestAnalyzeBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2em;
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

const MobileStockReturnsPercentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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

const StockReturnsText = styled.p`
    display: flex;
    flex: 1;
    justify-content: center;
    font-size: 1.3em;
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
    border-bottom-left-radius: 2.25em;
    border-bottom-right-radius: 2.25em;
    background-color: rgba(238, 238, 238, 0.87);
`

const StockReturnsPercentText = styled.p`
    font-size: 1.8em;
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

const StockAnalyzeValueColumnBox = styled.div`
    display: flex;
    flex: 3;
    gap: 1.875rem;
`;

const MobileStockAnalyzeValueColumnBox = styled.div`
    display: flex;
    flex: 3;
    width: 100%;
    gap: 1.2em;
`;

const StockAnalyzeValueColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1.875rem;
`;

const MobileStockAnalyzeValueColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1.2em;
`;

const StockAnalyzeValueTextBox = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 1.25em;
    border-radius: 1.125em;
    gap: 0.5em;
    background-color: rgba(238, 238, 238, 0.87);
`

const MobileStockAnalyzeValueTextBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.25em;
    border-radius: 1.125em;
    gap: 0.5em;
    background-color: rgba(238, 238, 238, 0.87);
`

const StockAnalyzeValueText = styled.p`
    font-size: 1.1em;
    font-family: pretendard;
    font-weight: bold;
    color: #5F6466;
`

const MobileStockAnalyzeValueText = styled.p`
    font-size: 1em;
    font-family: pretendard;
    font-weight: bold;
    color: #5F6466;
`

const StockAnalyzeValueTextRight = styled.div`
    font-size: 1.1em;
    font-family: pretendard;
    font-weight: bold;
`

const MobileStockAnalyzeValueTextRight = styled.div`
    font-size: 1em;
    font-family: pretendard;
    font-weight: bold;
`

const StockDetailAnalyzeSection = ({testResult, predictionResult}) => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    if (!testResult) {
        return <p>Loading...</p>; // 데이터를 불러오는 동안 표시할 내용
    }

    const initialCapital = parseInt(testResult.test_starting_cash, 10)
    const endCapital = initialCapital + testResult.average_profit;
    const testCount = '10회'
    const tradingUnit = '10주';
    const profitRate = ((endCapital - initialCapital) / initialCapital) * 100;
    const formattedAverageProfit = profitRate !== undefined ? `${profitRate.toFixed(2)}%` : "N/A";

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
                                        <StockReturnsPercentText profit={testResult.average_profit}>
                                            {wrapTextWithLang(formattedAverageProfit)}
                                        </StockReturnsPercentText>
                                    </StockReturnsPercentTextBox>
                                </StockReturnsPercentBox>
                                <StockAnalyzeValueColumnBox>
                                    <StockAnalyzeValueColumn>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>초기 자본금</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(initialCapital.toLocaleString())}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>테스트 시작일</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(testResult.test_start_date || "N/A")}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>테스트 종료일</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(testResult.test_end_date || "N/A")}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                    </StockAnalyzeValueColumn>
                                    <StockAnalyzeValueColumn>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>종료 후 자본금</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(endCapital.toLocaleString())}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>거래 단위</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(tradingUnit.toLocaleString())}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                        <StockAnalyzeValueTextBox>
                                            <StockAnalyzeValueText>테스트 횟수</StockAnalyzeValueText>
                                            <StockAnalyzeValueTextRight>{wrapTextWithLang(testCount.toLocaleString())}</StockAnalyzeValueTextRight>
                                        </StockAnalyzeValueTextBox>
                                    </StockAnalyzeValueColumn>
                                </StockAnalyzeValueColumnBox>
                            </StockTestAnalyzeBox>
                        </StockDetailAnalyzeSectionInnerContainer>
                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
            {isMobile &&
                <StockDetailAnalyzeSectionWrapper>
                    <StockDetailAnalyzeSectionContainer>
                        <MobileStockDetailAnalyzeSectionInnerContainer>
                            <MobileStockTitleInnerBox>
                                <MobileStockTitle>{wrapTextWithLang("STOPICKR AI 테스트 결과 분석")}</MobileStockTitle>
                                {/*<MobileStockSubTitle>{wrapTextWithLang("테스트 결과 분석")}</MobileStockSubTitle>*/}
                            </MobileStockTitleInnerBox>
                            <MobileStockTestAnalyzeBox>
                                <MobileStockReturnsPercentBox>
                                    <StockReturnsTextBox>
                                        <StockReturnsText>
                                            테스트 수익률
                                        </StockReturnsText>
                                    </StockReturnsTextBox>
                                    <StockReturnsPercentTextBox>
                                        <StockReturnsPercentText profit={testResult.average_profit}>
                                            {wrapTextWithLang(formattedAverageProfit)}
                                        </StockReturnsPercentText>
                                    </StockReturnsPercentTextBox>
                                </MobileStockReturnsPercentBox>
                                <MobileStockAnalyzeValueColumnBox>
                                    <MobileStockAnalyzeValueColumn>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>초기 자본금</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(initialCapital.toLocaleString())}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>테스트 시작일</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(testResult.test_start_date || "N/A")}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>테스트 종료일</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(testResult.test_end_date || "N/A")}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                    </MobileStockAnalyzeValueColumn>
                                    <MobileStockAnalyzeValueColumn>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>종료 후 자본금</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(endCapital.toLocaleString())}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>거래 단위</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(tradingUnit.toLocaleString())}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                        <MobileStockAnalyzeValueTextBox>
                                            <MobileStockAnalyzeValueText>테스트 횟수</MobileStockAnalyzeValueText>
                                            <MobileStockAnalyzeValueTextRight>{wrapTextWithLang(testCount.toLocaleString())}</MobileStockAnalyzeValueTextRight>
                                        </MobileStockAnalyzeValueTextBox>
                                    </MobileStockAnalyzeValueColumn>
                                </MobileStockAnalyzeValueColumnBox>
                            </MobileStockTestAnalyzeBox>
                        </MobileStockDetailAnalyzeSectionInnerContainer>
                    </StockDetailAnalyzeSectionContainer>
                </StockDetailAnalyzeSectionWrapper>
            }
        </>
    );
};

export default StockDetailAnalyzeSection;
