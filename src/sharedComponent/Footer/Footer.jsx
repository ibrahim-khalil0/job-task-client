import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="px-[4%] sm:px-[6%] lg:px-[8%] border-t border-gray-300 mt-16 py-16 flex gap-5 items-center">
            <div className='flex-1'>
                <h1 className='text-2xl mb-2'>Subscribe Our Newsletter</h1>
                <form>
                    <input type="email" placeholder='Email' name="" id="" className='border border-gray-300 outline-0 px-3 py-2 rounded-l-md' />
                    <input type='submit' value='SEND' className='bg-[#FC9401] text-white py-2 border border-[#FC9401] hover:bg-white hover:text-[#FC9401] hover:border-gray-300 cursor-pointer rounded-r-md px-1' />
                </form>
            </div>

            <div className='flex-1 justify-around flex gap-5 items-center'>
                <ul className='space-y-5'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/pricing'}>Pricing</Link></li>
                </ul>
                <img src={logo} alt="" className="w-10 h-10" />
                <ul className='space-y-5'>
                    <li><Link to={'/features'}>Features</Link></li>
                    <li><Link to={'/dashboard'}>Get Started</Link></li>
                </ul>
            </div>

            <div className='flex-1 text-right'>
                <h1 className='text-2xl mb-2'>Connect with social media</h1>
                <div className="flex justify-end gap-5">
                    <FaLinkedinIn className="text-white border border-[#FC9401] cursor-pointer bg-[#FC9401] hover:bg-white hover:text-[#FC9401] w-10 h-10 p-2 rounded-full"></FaLinkedinIn>
                    <FaTwitter className="text-white border border-[#FC9401] cursor-pointer bg-[#FC9401] hover:bg-white hover:text-[#FC9401] w-10 h-10 p-2 rounded-full"></FaTwitter>
                    <FaFacebookF className="text-white border border-[#FC9401] cursor-pointer bg-[#FC9401] hover:bg-white hover:text-[#FC9401] w-10 h-10 p-2 rounded-full"></FaFacebookF>
                    <FaInstagram className="text-white border border-[#FC9401] cursor-pointer bg-[#FC9401] hover:bg-white hover:text-[#FC9401] w-10 h-10 p-2 rounded-full"></FaInstagram>
                </div>
            </div>
        </div>
    );
};

export default Footer;