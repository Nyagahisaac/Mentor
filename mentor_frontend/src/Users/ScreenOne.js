import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'

function ScreenOne() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <RegistrationSteps step1 step2 />
            <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label"><strong>ID/PP Number</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="firstname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="lastname" class="col-form-label"><strong>Confirm ID/PP Number</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="lastname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kra_pin" class="col-form-label"><strong>KRA PIN</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="kra_pin" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="birthday" class="col-form-label"><strong>Date of Birth</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="date" id="birthday" class="form-control" name="birthday" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="identitycard" class="col-form-label"><strong>Gender</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="identitycard" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="occupation" class="col-form-label"><strong>Address</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="occupation" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="employer" class="col-form-label"><strong>Postal Code</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="employer" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label"><strong>Country</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label"><strong>City</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label"><strong>Mobile Number</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>

                            {/* <h2 className="text-center py-2">Other Information</h2>

                            <div class="col-12 py-2 col-md-3">
                                <label for="account_type" class="col-form-label"><strong>Account Type</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Teacher's account</option>
                                    <option>Trader's account</option>
                                    <option>Mazao account</option>
                                </select>
                            </div>


                            <div class="col-12 py-2 col-md-3">
                                <label for="phonenumber" class="col-form-label"><strong>Phone Number</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="phonenumber" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="address" class="col-form-label"><strong>Physical Address</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="address" class="form-control" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-4">
                                <label for="photofile" class="col-form-label"><strong>Attach Photo</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="photofile" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="signature" class="col-form-label"><strong>Attach Signature</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="signature" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="id-front" class="col-form-label"><strong>Attach ID Front</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="id-front" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="id-back" class="col-form-label"><strong>Attach ID Back</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="id-back" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="kra" class="col-form-label"><strong>KRA Certificate (<span style={{color:"red"}}>*pdf</span>)</strong></label>
                                <label for="inputState" class="form-label">
                                <small></small>
                            </label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="application/pdf" id="kra" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="kra_pin" class="col-form-label"><strong>Phone OTP Confirmation</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter OTP" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-success" type="button" id="button-addon2">Get OTP</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-5">
                        <Link to='/registration/next_of_kin_details'>
                            <button className="col-12 btn btn-outline-primary rounded" type="submit">Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ScreenOne
