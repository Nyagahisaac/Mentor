import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../../../components/RegistrationSteps'

function TSCZero() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <RegistrationSteps step1 />
            <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-9">
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

                            
                        </div>
                    </div>
                </div> 
                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-12">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-6" to='/membership/tsc'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                            </Link>
                            
                            <Link className="col-md-6" to='/membership/personal_information'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Proceed</button></row>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TSCZero
