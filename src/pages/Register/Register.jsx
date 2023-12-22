import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGooglePlus } from "react-icons/fa6";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import logo from '../../assets/logo.png'
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
    const [error, setError] = useState()

    const {loginWithGoogle, createNewUser, user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)


    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            navigate(location?.state ? location.state : "/")
        })
    }



    const handleRegister = e => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value

        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{6,}$/.test(password)){
            setError('Password will be minimum 6 character, one Uppercase letter, one special character and one number')
            return
        }

        createNewUser(email, password)
        .then( result => {
            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            navigate(location?.state ? location.state : "/")
        })
        .catch( error => {
            if(error.message == 'Firebase: Error (auth/email-already-in-use).'){
                setError('This Email Already Used')
            }

        })
    }
    console.log(user)

    return (
        <div>
           <div className='flex'>
                <div className='w-1/2 bg-white min-h-screen'>

                    <Link to={'/'}>
                        <div className='flex justify-center sm:justify-start items-center gap-1 pt-4'>
                            <img src={logo} alt="" className='rounded-md w-10' />
                            <h1 className="logo font-bold text-3xl text-[#FC9401]">Make Task</h1>
                        </div>
                    </Link>

                    <img src="https://img.freepik.com/premium-vector/security-password-concept-illustration_251005-470.jpg" alt="" />
                </div>
                <div className='w-1/2 bg-gray-50 pb-10 px-20'>
                    <h1 className='pt-4 text-right mb-16 text-lg'>Already have an account? <Link className='border border-[#FC9401] px-8 py-2 rounded-full ml-3 text-base' to={'/login'}>Login</Link></h1>
                    <h5 className='mb-4 text-2xl'>Register Your Account</h5>
                    <form onSubmit={handleRegister}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' name="name" placeholder='Enter Your Name' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" placeholder='Enter Your Email' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>

                        <label htmlFor="photo">Photo</label>
                        <input type="url" id='photo' name="photo" placeholder='Enter Your Photo URL' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>

                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name="password" placeholder='Enter Your Password' className="border p-3 w-full rounded-md focus:outline-none focus:border-black mt-2 mb-5" required/>

                        <div className="flex items-center justify-between mt-5">
                            <input type="submit" value="Register" className='cursor-pointer bg-[#FC9401] hover:bg-[#FC9401] text-white px-8 py-2 rounded-md text-xl' />
                            <h3>Or</h3>

                            <span onClick={handleGoogleLogin} className='cursor-pointer bg-[#FC9401] hover:bg-[#FC9401] text-white px-8 py-2 rounded-md text-xl flex items-center gap-4'>Login With Google <FaGooglePlus></FaGooglePlus></span>
                        </div>
                    </form>
                    {
                        error && <p className="text-red-400">{error}</p>
                    }
                </div>
           </div>
        </div>
    );
};

export default Register;