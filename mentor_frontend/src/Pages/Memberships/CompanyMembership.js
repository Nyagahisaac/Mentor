import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CompanyMembership() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <form id="reg1" className="row justify-content-center py-3">
            <div className="col-11 col-md-10">
                <div className="row">
                    <h2 className="py-3">Membership Under Companies</h2>
                    <strong><p>Company Information</p></strong>
                    <div className="col-12 col-md-12">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-2">
                                <label for="schoolname" class="col-form-label">Company Name</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="schoolname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="schooladdress" class="col-form-label">Proprietor's ID/Passport No.</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="schooladdress" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="primary_phone" class="col-form-label">Postal Address</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="primary_phone" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="bank" class="col-form-label">Company Location</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="bank" class="form-control" name="bank" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="branch" class="col-form-label">Company Ownership</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select value = "1"  id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option>Select</option>
                                    <option>Limited Liability Company</option>
                                    <option>Limited By Guarantee</option>
                                    <option>Public Limited Company</option>
                                </select>
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">If Other, Specify</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="street" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">Certificate of Incorporation</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="file" id="street" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">Copy of KRA PIN</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="file" id="street" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">Board resolution to open account (minutes)</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="file" id="street" class="form-control" />
                            </div>

                            <strong><p className="py-3">Introducer's Information</p></strong>

                            <div class="col-12 pb-2 col-md-2">
                                <label for="province" class="col-form-label">Name</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="province" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="tsc_dept" class="col-form-label">Member Number</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="tsc_dept" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="dept_specify" class="col-form-label">Phone Number</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" placeholder="" id="dept_specify" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="tsc_no" class="col-form-label">Email Address</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="tsc_no" class="form-control" />
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-10 col-md-10">
                            <div className="row justify-content-center text-center">
                                <div className="col-10">
                                    <div class="form-check pb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label text-black" for="flexCheckDefault">
                                    I/We have read and understood the <Link to="/membership/terms_conditions">Terms and Conditions</Link> set out above governing the use of your account and the services to be provided together with your
                                    account offered by Mentor Sacco and I/we hereby accept them and will abide by them.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center py-3">
                            <div className="col-10 col-md-10">
                                <div className="row justify-content-evenly text-center">
                                    <Link className="col-md-5" to='/membership/businesses_companies'>
                                        <button className="col-6 btn btn-outline-primary rounded" type="submit">Back</button>
                                    </Link>
                                    
                                    <Link className="col-md-5" to='/business_groups/account_creation'>
                                        <button className="col-6 btn btn-outline-primary rounded" type="submit">Proceed</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CompanyMembership
