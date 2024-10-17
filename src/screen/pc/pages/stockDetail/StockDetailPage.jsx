import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import StockDetailSection from "./section/StockDetailSection";
import StockDetailAnalyzeSection from "./section/StockDetailAnalyzeSection";
import { fetchTestResultByStockId, fetchPredictionResultByStockId } from "../../../../api/ApiService";
import StockDetailAnalyzeOperationSection from "./section/StockDetailAnalyzeOperationSection";

const StockDetailPage = () => {
    const { state } = useLocation();
    const stock = state?.stock;

    const [testResult, setTestResult] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const testResultResponse = await fetchTestResultByStockId(stock.isinCd);
                setTestResult(testResultResponse.data);

                const predictionResultResponse = await fetchPredictionResultByStockId(stock.isinCd);
                setPredictionResult(predictionResultResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [stock.isinCd]);

    return (
        <div>
            <Header />
            <StockDetailSection stock={stock} />
            <StockDetailAnalyzeSection
                testResult={testResult}
                predictionResult={predictionResult}
            />
            <StockDetailAnalyzeOperationSection
                testResult={testResult}
                predictionResult={predictionResult}/>
            <Footer />
        </div>
    );
};

export default StockDetailPage;
