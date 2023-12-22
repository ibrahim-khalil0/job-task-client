import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center py-3 px-[4%] sm:px-[6%] lg:px-[8%] shadow-lg shadow-gray-300">
            <div className="flex gap-2 items-center">
                <img src={logo} alt="" className="w-10" />
                <h1 className="logo font-bold text-3xl text-[#FC9401]">Make Task</h1>
            </div>
            <div className="sm:text-right text-center text-lg font-medium space-x-5 sm:space-x-10">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/pricing'}>Pricing</NavLink>
                <NavLink to={'/features'}>Features</NavLink>
                <NavLink to={'/dashboard/list'}>Get Started</NavLink>
                {
                    user ? <a onClick={logOut} className="bg-[#FC9401] text-white px-5 py-1 rounded-lg border border-[#FC9401] hover:bg-white hover:text-[#FC9401] cursor-pointer">Logout</a>
                    : 
                    <Link to={'/login'} className="bg-[#FC9401] text-white px-5 py-1 rounded-lg border border-[#FC9401] hover:bg-white hover:text-[#FC9401]">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;