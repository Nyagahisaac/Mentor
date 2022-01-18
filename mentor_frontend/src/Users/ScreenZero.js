import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'

function ScreenZero() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <RegistrationSteps step1 />
            <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-3">
                                <label for="email" class="col-form-label"><strong>Last Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <input type="email" id="email" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="email" class="col-form-label"><strong>First Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <input type="email" id="email" class="form-control" />
                            </div>

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

                            <div className="row justify-content-center py-3">
                            <div className="col-4">
                                <Link to='/registration/member_details'>
                                    <button className="col-12 btn btn-outline-primary rounded" type="submit">Register</button>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        {/* Blank col */}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ScreenZero
