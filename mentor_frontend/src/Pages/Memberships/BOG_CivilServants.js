import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

function BOG_CivilServants() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <div className="col-11 col-md-8">
                <div className="row">
                    <h1 className="text-center">Account Opening Form</h1>
                <strong><p>Note: The minimum monthly contribution is as follows Kshs 1000 for BOG/PTA employees</p></strong>
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <h3>Account Details</h3>
                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label"><strong>Account Type</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select id="inputState" style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Select Account Type</option>
                                    <option>Ordinary Shares</option>
                                    <option>Business Account</option>
                                    <option>Mentor Junior</option>
                                    <option>Holiday Account</option>
                                </select>
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="introducer_name" class="col-form-label"><strong>Account No. </strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="introducer_name" class="form-control" />
                            </div>

                            {/* Take Date as a backend database param */}


                            <h3>Second Applicant</h3>
                            <div class="col-12 py-2 col-md-3">
                                <label for="introducer_name" class="col-form-label"><strong>Full Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="introducer_name" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="introducer_member_no" class="col-form-label"><strong>Member No.</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" placeholder="Second Applicant's member no." id="introducer_member_no" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kra_pin" class="col-form-label"><strong>Second Applicant Confirmation</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Second Applicant email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-success" type="button" id="button-addon2">Send Request</button>
                                </div> 
                            </div>

                            <h3>Introducer</h3>
                            <div class="col-12 py-2 col-md-3">
                                <label for="introducer_name" class="col-form-label"><strong>Full Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="introducer_name" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="introducer_member_no" class="col-form-label"><strong>Member No.</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="introducer_member_no" class="form-control" />
                            </div>

                            <h3>Share type</h3>

                            <div class="col-12 py-2 col-md-3">
                                <label for="share_type" class="col-form-label"><strong>Share Type</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select id="share_type" style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Select Share Type</option>
                                    <option>Ordinary Shares</option>
                                    <option>Mazao Shares</option>
                                    <option>FOSA Shares</option>
                                </select>
                            </div>

                            <strong><i>I/We authorize you to make monthly deductions and remit to Mentor Sacco as below: </i></strong>

                            <div class="col-12 py-2 col-md-3">
                                <label for="monthly_deductions" class="col-form-label"><strong>Monthly Deductions</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" placeholder="Amount to be deducted monthly"  id="monthly_deductions" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="share_type" class="col-form-label"><strong>Remittance Mode</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select id="share_type" style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Select Remittance Mode</option>
                                    <option>Check-off</option>
                                    <option>Standing Order</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                            <h3>Account Details</h3>

                            <div className="row align-items-center">
                            <div class="col-12 col-md-4">
                                <label for="national_id" class="col-form-label"><strong>Account Operations Mandate</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <select id="inputState" style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Select Account Mandate</option>
                                    <option>Singly</option>
                                    <option>Either to sign</option>
                                    <option>All to sign</option>
                                </select>
                            </div>


                            

                            <div class="col-12 py-2 col-md-4">
                                <label for="bank_account_proof" class="col-form-label"><strong>Proof of Bank Account (<span style={{color:"red"}}>latest payslip/Bank Card</span>)</strong></label>
                                <label for="inputState" class="form-label">
                                <small></small>
                            </label>
                            </div>
                            <div class="col-12 col-md-7">
                                <input class="form-control" id="bank_account_proof" type="file" />
                            </div>

                            <strong><i>I/We conĮrm that the informaton and disclosers provided herein are true.</i></strong>

                            {/* <div class="col-12 py-2 col-md-4">
                                <label for="birthday" class="col-form-label"><strong>Date of Application</strong></label>
                            </div> 'select today's date'
                            <div class="col-12 col-md-7">
                                <input type="date" id="birthday" class="form-control" name="birthday" />
                            </div> */}
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


                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-10">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-5" to='/memberships'>
                                <button className="col-6 btn btn-outline-primary rounded" type="submit">Back</button>
                            </Link>
                            
                            <Link className="col-md-5" to='/registration/account_register'>
                                <button className="col-6 btn btn-outline-primary rounded" type="submit">Proceed</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default BOG_CivilServants
