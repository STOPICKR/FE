import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import StockDetailSection from "./section/StockDetailSection";
import StockDetailAnalyzeSection from "./section/StockDetailAnalyzeSection";
import {fetchTestResultByStockId, fetchPredictionResultByStockId} from "../../../../api/ApiService";
import StockDetailAnalyzeOperationSection from "./section/StockDetailAnalyzeOperationSection";
import KakaoAdFit from "../../../../KakaoAdfit";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

const KakaoAdFitWrapper  =styled.div`
    display: flex;
    background-color: #264653;
    justify-content: center;
    padding: 0.5em;
`

const StockDetailPage = () => {
    const {state} = useLocation();
    const stock = state?.stock;

    const [testResult, setTestResult] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);

    const isOverTablet = useMediaQuery({
        query: "(min-width:750px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width:750px)"
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testResultResponse = await fetchTestResultByStockId(stock.isin_code);
                setTestResult(testResultResponse.data);

                const predictionResultResponse = await fetchPredictionResultByStockId(stock.isin_code);
                setPredictionResult(predictionResultResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [stock.isin_code]);

    return (
        <div>
            <Header/>
            <StockDetailSection stock={stock}/>
            {isOverTablet &&
                <KakaoAdFitWrapper>
                    <KakaoAdFit unit="DAN-q5o3sBajTy2L9S51" width="728" height="90"/>
                </KakaoAdFitWrapper>
            }
            {isMobile &&
                <KakaoAdFitWrapper>
                    <KakaoAdFit unit="DAN-XA23ODbFMaBIwO8b" width="320" height="100"/>
                </KakaoAdFitWrapper>
            }
            <StockDetailAnalyzeSection
                testResult={testResult}
                predictionResult={predictionResult}
            />
            <StockDetailAnalyzeOperationSection
                testResult={testResult}
                predictionResult={predictionResult}/>
            <Footer/>
        </div>);
};

export default StockDetailPage;
