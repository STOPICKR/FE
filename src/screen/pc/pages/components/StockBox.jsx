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
    padding: 2.5rem;
    background-color: white;
    cursor: pointer; // 클릭 가능하도록 커서 스타일 추가
    gap: 1.1em;
`;

const StockNumber = styled.p`
    font-size: 1em;
    font-family: pretendard;
`;

const StockTitle = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    font-family: pretendard;
`;

const StockCode = styled.p`
    font-size: 1.1rem;
    font-family: pretendard;
`;

const StockGraphWrapper = styled.div`
    width: 100%;
`;

const StockDetailBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StockTag = styled.p`
    font-size: 1.25rem;
    font-family: pretendard-bold;
`;

const StockValue = styled.p`
    font-size: 1.25rem;
    font-family: pretendard;
`;

const StockBox = ({ stockNumber, stockTitle, stockCode, stockData, onClick }) => {
    const [latestPrice, setLatestPrice] = useState(null);
    const [latestDate, setLatestDate] = useState(null);

    useEffect(() => {
        if (stockData && stockData.length > 0) {
            // 최신 날짜 기준으로 데이터 정렬 (가장 최근이 첫 번째로 오도록)
            const sortedData = [...stockData].sort((a, b) => new Date(b.bas_dt) - new Date(a.bas_dt));
            const latestData = sortedData[0]; // 가장 최근 날짜의 데이터를 가져옴
            setLatestPrice(latestData.clpr);
            setLatestDate(latestData.bas_dt);
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
                <StockValue>{latestPrice !== null ? latestPrice.toLocaleString() : 'N/A'}</StockValue>
            </StockDetailBox>
            <StockDetailBox>
                <StockTag>기준일</StockTag>
                <StockValue>{latestDate !== null ? latestDate : 'N/A'}</StockValue>
            </StockDetailBox>
        </StockBoxWrapper>
    );
};

export default StockBox;
