import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'

function ScreenFour() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form className="row justify-content-center py-3">
            <RegistrationSteps step1 step2 step3 step4/>
            <div className="col-11 col-md-6">
                <h2 className="text-center py-2">Phone Number Confirmation</h2>
                <div className="row align-items-center">
                    <div class="col-12 py-2 col-md-3">
                        <label for="email" class="col-form-label"><strong>Email Address</strong></label>
                        </div>
                        <div class="col-12 col-md-9">
                        <input type="email" id="email" class="form-control" />
                        </div>

                        <div class="col-12 py-2 col-md-3">
                        <label for="password" class="col-form-label"><strong>Password</strong></label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="password" id="password" class="form-control" />
                        </div>
                    </div>


                    <div className="row justify-content-center py-3">
                        <div className="col-10 col-md-10">
                            <div className="row justify-content-center text-center">
                                <Link to='/registration/next_of_kin_details'>
                                    <button className="btn btn-outline-primary rounded" type="submit">Get OTP</button>
                                </Link>
                            </div>
                            
                    </div>
                </div>

                <div className="row align-items-center">
                    <div class="col-12 py-2 col-md-3">
                        <label for="otp" class="col-form-label"><strong>Enter OTP</strong></label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="text" id="otp" class="form-control" />
                        </div>
                    </div>


                    <div className="row justify-content-center py-3">
                        <div className="col-10 col-md-10">
                            <div className="row justify-content-center text-center">
                                <div className="col-10">
                                    <div class="form-check pb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-black" for="flexCheckDefault">
                                        I attest that the information provided is true and valid and agree to the terms and conditions
                                    </label>
                                </div>
                            </div>
                            <Link to='/registration/account_creation_success'>
                                <button className="btn btn-outline-primary rounded" type="submit">Create Account</button>
                            </Link>
                        </div>
                            
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ScreenFour
    