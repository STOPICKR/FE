import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import StockListPage from "./pages/stockList/StockListPage";
import StockDetailPage from "./pages/stockDetail/StockDetailPage";

const PcScreen = () => {

    return (<BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/stock-list' element={<StockListPage/>}/>
                <Route path='/stock-detail/:stockId' element={<StockDetailPage/>}/>
            </Routes>
        </BrowserRouter>);
};

export default PcScreen;
