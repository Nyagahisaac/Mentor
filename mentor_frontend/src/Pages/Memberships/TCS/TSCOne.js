import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../../../components/RegistrationSteps'

function TSCOne() {
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
                                <label for="firstname" class="col-form-label">KRA PIN</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="firstname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="lastname" class="col-form-label">Date of Birth</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="date" id="lastname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="identitycard" class="col-form-label">Gender</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="identitycard" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="occupation" class="col-form-label">Address</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="occupation" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="employer" class="col-form-label">Postal Code</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="employer" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label">County</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label">City/Town</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="krapin" class="col-form-label">Phone Number</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="krapin" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-4">
                                <label for="photofile" class="col-form-label">Attach Photo</label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="photofile" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="signature" class="col-form-label">Attach Signature</label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="signature" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="id-front" class="col-form-label">Attach ID Front</label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="id-front" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="id-back" class="col-form-label">Attach ID Back</label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="image/jpeg" id="id-back" />
                            </div>

                            <div class="col-12 py-2 col-md-4">
                                <label for="kra" class="col-form-label">KRA Certificate (<span style={{color:"red"}}>*pdf</span>)</label>
                                <label for="inputState" class="form-label">
                                <small></small>
                            </label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" type="file" accept="application/pdf" id="kra" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-12">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-6" to='/membership/tsc_account_creation'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                            </Link>
                            
                            <Link className="col-md-6" to='/membership/next_of_kin'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Proceed</button></row>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    )
}

export default TSCOne
