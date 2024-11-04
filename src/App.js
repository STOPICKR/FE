import { useMediaQuery } from "react-responsive"
import AuthProvider from "./context/security/AuthContext";
import DateProvider from "./context/date/DateContext";
import PcScreen from "./screen/pc/PcScreen";

function App() {

    const isPc = useMediaQuery({
        query : "(min-width:1220px)"
    });
    const isTablet = useMediaQuery({
        query : "(min-width:720px) and (max-width:1220px)"
    });
    const isMobile = useMediaQuery({
        query : "(max-width:720px)"
    });

    return (
        <AuthProvider>
            <DateProvider>
                <PcScreen />
                {/*{isPc && <PcScreen/>}*/}
                {/*{isTablet && <TabletScreen/>}*/}
                {/*{isMobile && <MobileScreen/>}*/}
            </DateProvider>
        </AuthProvider>
    );
}

export default App;
