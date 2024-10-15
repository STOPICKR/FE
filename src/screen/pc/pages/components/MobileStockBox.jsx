import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StockGraph from './StockGraph';

const StockBoxWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-radius: 2.25rem;
    padding: 1.8em;
    background-color: white;
    gap: 0.7em;
    cursor: pointer;
`;

const StockNumber = styled.p`
    font-size: 0.7em;
    font-family: pretendard;
`;

const StockTitle = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    font-family: pretendard;
`;

const StockCode = styled.p`
    font-size: 0.8rem;
    font-family: pretendard;
`;

const StockGraphWrapper = styled.div`
    height: 13em;
    width: 100%;
`;

const StockDetailBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StockTag = styled.p`
    font-size: 0.8em;
    font-family: pretendard;
    font-weight: bold;
`;

const StockValue = styled.p`
    font-size: 0.8em;
    font-family: pretendard;
`;

const MobileStockBox = ({ stockNumber, stockTitle, stockCode, stockData, onClick }) => {
    const [latestPrice, setLatestPrice] = useState(null);
    const [latestDate, setLatestDate] = useState(null);

    useEffect(() => {
        if (stockData && stockData.length > 0) {
            // 최신 날짜 기준으로 데이터 정렬 (가장 최근이 첫 번째로 오도록)
            const sortedData = [...stockData].sort((a, b) => new Date(b.basDt) - new Date(a.basDt));
            const latestData = sortedData[0]; // 가장 최근 날짜의 데이터를 가져옴
            setLatestPrice(latestData.clpr);
            setLatestDate(latestData.basDt);
        }
    }, [stockData]);

    return (
        <StockBoxWrapper onClick={onClick}>
            <StockNumber>{stockNumber}</StockNumber>
            <StockTitle>{stockTitle}</StockTitle>
            <StockCode>{stockCode}</StockCode>
            <StockGraphWrapper>
                <StockGraph stockData={stockData} />
            </StockGraphWrapper>
            <StockDetailBox>
                <StockTag>현재가</StockTag>
                <StockValue>{latestPrice !== null ? latestPrice : 'N/A'}</StockValue>
            </StockDetailBox>
            <StockDetailBox>
                <StockTag>기준일</StockTag>
                <StockValue>{latestDate !== null ? latestDate : 'N/A'}</StockValue>
            </StockDetailBox>
        </StockBoxWrapper>
    );
};

export default MobileStockBox;
