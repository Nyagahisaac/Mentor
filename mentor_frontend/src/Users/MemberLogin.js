import {React, useContext, useEffect, useState} from 'react'
import { Link, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/authProvider'
import SideImage from '../images/loginpageImage2.jpg'
import WhiteHeader from '../Navigation/WhiteHeader'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, authSelector, verifyOTP, clearState} from '../store/slices/AuthSlice'
import homeIcon from '../images/icons/homevector.svg'
import Loading from '../components/Loader'


function MemberLogin() {
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(authSelector);
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    // const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    // const {changeEmail, changeAuth} = useContext(AuthContext) 
    const [otpShow, setOtpShow] = useState(false)
    // const [loginError, setLoginError] = useState('')

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('[error message]', errorMessage)
    //     console.log('[error status]',  isError)
    //     console.log('[fetching status]', isFetching)
    //  }, [isFetching, isError])

    const moveToOtp = () => {
        setOtpShow(true)
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        const fields =  {
         username: email,
         password,
         moveToOtp
        }
       dispatch(loginUser(fields))     
    }
    const moveToLanding = () => {
        history.push('/user/landing')
    }
    const handleVerifyOTPCode = (e) => {
        e.preventDefault()
        const fields = {
            otp,
            moveToLanding 
        }
        dispatch(verifyOTP(fields))
    }

    

    return (
       <div>
        <WhiteHeader />
        <div className="line"></div>
                <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
                <ol className="breadcrumb">
                <img
                    src={homeIcon}
                    alt=""
                    style={{ marginRight: 5, width: "20px", height: "20px" }}
                />
                <li className="breadcrumb-item">
                    <a href="/" className="breadcrumb-item-override">Home</a>
                </li>
                <li className="breadcrumb-item">
                    <a href="/user/member_login" className="breadcrumb-item-override-active">Member Login</a>
                </li>
                
                </ol>
                </nav>
            <div className="line mb-1"></div>
        
            <div className="row">
            <div className="col-12">
            <div className="row">

                <div className="col-12 col-md-6 ">                   
                        <img style={{height: '85vh', width: '100%'}} src={SideImage} alt="" />
                </div>

                {isFetching 
                ? 
                <div className="col-12 col-md-6 align-items-center pt-5">
                <Loading /> 
                </div>
                :
                <div className="col-12 col-md-6 align-items-center mt-1r">
                { otpShow ?
                <form 
                className="row align-items-center justify-content-center needs-validation"
                onSubmit={handleVerifyOTPCode}
                >
                <div className="col-10 col-md-8">
                        <h2 className=" py-5" id="subheader">Verify OTP Code</h2>
                        <div className="row">

                        <p className="">You must authenticate with an email or phone one-time password (OTP) prior to accessing your account.</p>
                            <div class="mb-3">
                            <label for="otp" className="form-label">OTP Code</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="otp" 
                            required
                            onChange={(e) => setOtp(e.target.value)}
                            />
                             <div class="invalid-feedback">
                                Please provide a code to proceed.
                            </div>
                            </div>
                     
                                <div className="col-10 col-md-10">
                                    <div className="row py-4 px-3">                                  
                                            <button 
                                            className="col-md-6 btn btn-outline-primary rounded" 
                                            type="submit"
                                            // onClick={handleVerifyOTPCode}                                           
                                            >
                                            Verify Code
                                            </button>                                      
                                    </div>
                                    
                        </div>
                        </div>
                        </div>
                </form>
                :
                        <form 
                        className="row align-items-center px-5 needs-validation"
                        onSubmit={handleLogin}
                        >
                       
                        <div className="col-12 col-md-8">
                        <h2 className=" py-5" id="subheader">Member Login</h2>
         
                        <div className="row">

                         <div class="mb-3  pb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                         <input  
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com" 
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        />
                         <div class="invalid-feedback">
                            Please provide a valid email.
                         </div>
                        </div>

                        {/* <div class="mb-3  pb-3">
                        <label for="username" className="form-label">Username</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="jane doe" 
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        </div> */}

                        <div class="mb-3 pb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="****" 
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        />
                         <div class="invalid-feedback">
                            Please provide a password.
                         </div>
                        </div>
                                                    
                        </div>
                            <div className="row">
                                <div className="col-10 col-md-10">
                                    <div className="row py-4 px-3">                                   
                                            <button 
                                            className="col-md-5 btn btn-outline-primary rounded" 
                                            type="submit"
                                            // onClick={handleLogin}
                                            >
                                            Login
                                            </button>                                       
                                    </div>
                                    
                            </div>

                            <div className='error-message'>
                            {errorMessage === 'Request failed with status code 401' ? 
                            'No user with the provided credentials was found. Please check email and passsword again'
                            : errorMessage === 'Network Error' ? " Seems like you are not connected to the internet" :
                            errorMessage === 'Request failed with status code 500' ? 'Something went wrong. Please try again later':
                            null
                            }
                            </div>

                        </div>           
                        </div>
                    </form> 
                }
            </div>
         }
           </div>              
        </div>
        </div>
        </div>
    
    
    )
}

export default MemberLogin
