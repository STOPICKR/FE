import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ContainerTitle from "../../components/ContainerTitle";
import styled from "styled-components";
import IntroductionBox from "../../components/IntroductionBox";
import StockBox from "../../components/StockBox";
import {executeGetWeeklyStocksForList} from "../../../../../api/ApiService";
import {useDate} from "../../../../../context/date/DateContext";
import {useMediaQuery} from "react-responsive";
import MobileIntroductionBox from "../../components/MobileIntroductionBox";
import MobileContainerTitle from "../../components/MobileContainerTitle";
import MobileStockBox from "../../components/MobileStockBox";

const StockDetailSectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #264653;
`;

const StockDetailSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70.625em;
    gap: 1.875rem;
    margin: 2em 1.2em;
`;

const StockDetailBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.875rem;
    width: 100%;
`;

const StockDetailBoxRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    gap: 1.875em;
`;

const MobileStockDetailBoxRow = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 1.875em;
`;

const StockBoxStyled = styled.div`
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05); /* 5% 확대 */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* 확대될 때 그림자 추가 */
    }
`

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {month: "long", day: "numeric"});
}

const getYear = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}년`;
};

const StockListSection = () => {

    const isOverTablet = useMediaQuery({
        query: "(min-width:720px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:720px)"
    });

    const {startDate, endDate} = useDate();

    const [stocks, setStocks] = useState([]); // 주식 데이터를 저장할 상태 변수
    const navigate = useNavigate(); // useNavigate 훅을 사용

    useEffect(() => {
        // API 호출
        executeGetWeeklyStocksForList() // 필요에 따라 날짜를 수정하세요.
            .then(response => {
                setStocks(response.data); // 모든 데이터를 설정
            })
            .catch(error => {
                console.error('Error fetching weekly stocks:', error);
            });
    }, []);

    const handleStockClick = (stock) => {
        navigate(`/stock-detail/${stock.isin_code}`, {state: {stock}}); // 주식 데이터와 함께 이동
    };

    return (<>
            {isOverTablet && <StockDetailSectionWrapper>
                <StockDetailSectionContainer>
                    <ContainerTitle subTitle={"다양한 주식 추천을 알아보고 투자하세요!"}/>
                    <StockDetailBoxContainer>
                        <IntroductionBox
                            subTitle={"Selected"}
                            title={`${getYear(startDate)}\n${formatDate(startDate)} ~ ${formatDate(endDate)}\nSTOPICKR 선정 주식 종목`}
                            content={"1. 서비스에서 선정된 자산별 현황을 확인해보세요\n" + "2. 선정된 종목의 AI 분석을 확인해보세요\n" + "3. 선정된 종목을 확인하고 개인 포트폴리오에 추가해보세요\n"}
                            detail={"⦁ 종목은 매주 KOSPI 50구성 종목에서 거래량과 변동%를 기준으로 선정됩니다"}/>
                        <StockDetailBoxRow>
                            {stocks.slice(0, 10).map((stock, index) => (<StockBoxStyled>
                                    <StockBox
                                        key={index}
                                        stockNumber={index + 1}
                                        stockTitle={stock.itms_name}
                                        stockCode={stock.isin_code}
                                        stockData={stock.daily_stock_data}
                                        onClick={() => handleStockClick(stock)} // 클릭 이벤트 추가
                                    />
                                </StockBoxStyled>))}
                        </StockDetailBoxRow>
                    </StockDetailBoxContainer>
                </StockDetailSectionContainer>
            </StockDetailSectionWrapper>}
            {isMobile && <StockDetailSectionWrapper>
                <StockDetailSectionContainer>
                    <MobileContainerTitle subTitle={"다양한 주식 추천을 알아보고 투자하세요!"}/>
                    <StockDetailBoxContainer>
                        <MobileIntroductionBox
                            subTitle={"Selected"}
                            title={`${getYear(startDate)}\n${formatDate(startDate)} ~ ${formatDate(endDate)}\nSTOPICKR 선정 주식 종목`}
                            content={"1. 서비스에서 선정된 자산별 현황을 확인해보세요\n" + "2. 선정된 종목의 AI 분석을 확인해보세요\n" + "3. 선정된 종목을 확인하고 개인 포트폴리오에 추가해보세요\n"}
                            detail={"⦁ 종목은 매주 KOSPI 50구성 종목에서 거래량과 변동%를 기준으로 선정됩니다"}/>
                        <MobileStockDetailBoxRow>
                            {stocks.slice(0, 10).map((stock, index) => (<MobileStockBox
                                    key={index}
                                    stockNumber={index + 1}
                                    stockTitle={stock.itms_name}
                                    stockCode={stock.isin_code}
                                    stockData={stock.daily_stock_data}
                                    onClick={() => handleStockClick(stock)} // 클릭 이벤트 추가
                                />))}
                        </MobileStockDetailBoxRow>
                    </StockDetailBoxContainer>
                </StockDetailSectionContainer>
            </StockDetailSectionWrapper>}
        </>);
};

export default StockListSection;
