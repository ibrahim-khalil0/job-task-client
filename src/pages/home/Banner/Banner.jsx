import { Link } from "react-router-dom";
import banner from "../../../assets/logo.png"

const Banner = () => {
    return (
        <div className="flex justify-between items-center py-16">
            <div className="flex-1">
                <h1 className="text-5xl sm:text-7xl mb-4">A smarter way <br /> to work</h1>
                <p className="text-base tracking-wider">With Make Task, you can drive clarity and impact at scale by connecting work and workflows to company-wide goals.</p>
                <Link to={'/dashboard'} className="bg-black hover:bg-white hover:text-black border border-black text-white px-5 py-2 rounded-md text-lg mt-8 inline-block">Let's Explore</Link>
            </div>
            <div className="flex-1 text-right">
                <img src={banner} alt="" className="inline" />
            </div>
        </div>
    );
};

export default Banner;