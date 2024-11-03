import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import StockListPage from "./pages/stockList/StockListPage";
import StockDetailPage from "./pages/stockDetail/StockDetailPage";
import * as ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(gaTrackingId);

const history = createBrowserHistory();
history.listen((response) => {
    console.log(response.location.pathname);
    ReactGA.set({ page: response.location.pathname });
    ReactGA.pageview(response.location.pathname);
});

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
