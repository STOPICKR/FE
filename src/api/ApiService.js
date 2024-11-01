import { apiClient } from "./ApiClient";

export const executeLoginService = (email, password) =>
    apiClient.post(`/api/auth/login`, { email, password });

export const executeRegisterMemberService = (user) =>
    apiClient.post(`/api/auth/signup`, user);

export const executeCheckEmailService = (email) =>
    apiClient.get(`/api/members/${email}`);

export const executeGetLatestIndexData = () =>
    apiClient.get(`/api/v1/index/latest-multiple`);


export const executeGetWeeklyStocksForList = () =>
    apiClient.get(`/stocks/weekly/latest`);

// analyze
export const fetchTestResultByStockId = (stockId) =>
    apiClient.get(`/stocks/weekly/latest/test/${stockId}`);

export const fetchPredictionResultByStockId = (stockId) =>
    apiClient.get(`/stocks/weekly/latest/predict/${stockId}`);

//admin용
// 주식 query로 검색
export const executeSearchStocks = (query) =>
    apiClient.get(`/stocks/`, { params: { query } });

export const executeGetWeeklyStocks = (startDate) =>
    apiClient.get(`/stocks/weekly`, { params: { startDate } });

export const executeAddStockToWeekly = (startDate, stockId) =>
    apiClient.post(`/stocks/weekly/${stockId}`, null, { params: { startDate } });

export const executeRemoveStockFromWeekly = (startDate, stockId) =>
    apiClient.delete(`/stocks/weekly/${stockId}`, { params: { startDate } });

export const executeFetchMultipleStockData = (stockRequests) =>
    apiClient.post(`/stocks/weekly/daily-data`, stockRequests);