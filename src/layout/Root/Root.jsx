import { Outlet, useLocation } from "react-router-dom";
import Header from "../../sharedComponent/Header/Header";
import Footer from "../../sharedComponent/Footer/Footer";

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
            {
                noHeaderFooter || <Header></Header>
            }
            <div className="px-[0%] sm:px-[6%] lg:px-[8%]">
                <Outlet></Outlet>
            </div>
            {
                noHeaderFooter || <Footer></Footer>
            }
        </div>
    );
};

export default Root;