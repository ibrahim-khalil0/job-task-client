import { useContext, useState } from "react";
import { FaGooglePlus } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {

    const {loginWithGoogle, loginWithPassword} = useContext(AuthContext)
    const [error, setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            navigate(location?.state ? location.state : "/")
        })
    }


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        loginWithPassword(email, password)
        .then(result => {
            // alert('success')
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            setError('invalid email or password')
        })
    }
    return (
        <div>
           <div className='flex'>
                <div className='min-h-screen border border-l-gray-50'>

                    <Link to={'/'}>
                        <div className='flex justify-center sm:justify-start items-center gap-1 pt-4'>
                            <img src={logo} alt="" className='rounded-md w-10' />
                            <h1 className="logo font-bold text-3xl text-[#FC9401]">Make Task</h1>
                        </div>
                    </Link>

                    <img src="https://img.freepik.com/premium-vector/security-password-concept-illustration_251005-470.jpg" alt="" />
                </div>
                <div className='w-1/2 bg-gray-50 pb-10 px-20'>
                    <h1 className='pt-4 text-right mb-16 text-lg'>Don't have an account? <Link className='border border-[#FC9401] px-8 py-2 rounded-full ml-3 text-base' to={'/register'}>Register</Link></h1>
                    <h5 className='mb-4 text-2xl'>Login Your Account</h5>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder='Enter Your Email' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name="password" placeholder='Enter Your Password' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>
                        <div className="flex items-center justify-between mt-5">
                            <input type="submit" value="Login" className='cursor-pointer bg-[#FC9401] hover:bg-[#FC9401] text-white px-8 py-2 rounded-md text-xl' />
                            <h3>Or</h3>

                            <span onClick={handleGoogleLogin} className='cursor-pointer bg-[#FC9401] hover:bg-[#FC9401] text-white px-8 py-2 rounded-md text-xl flex items-center gap-4'>Login With Google <FaGooglePlus></FaGooglePlus></span>
                        </div>
                        {
                            error && <p className="text-red-400">{error}</p>
                        }
                    </form>
                </div>
           </div>
        </div>
    );
};

export default Login;