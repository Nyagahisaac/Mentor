import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Employed() {
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <div className="col-11 col-md-10">
                <div className="row">
                    <h2 className="py-3">Membership Under The Employed (Salaried) Persons</h2>
                    <p>Note: The minimum monthly contribution is Kshs 2000.</p>
                    <div className="col-12 col-md-12">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-2">
                                <label for="schoolname" class="col-form-label">Employer/Company</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="schoolname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="schooladdress" class="col-form-label">Postal Address</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="schooladdress" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="primary_phone" class="col-form-label">County</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="primary_phone" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="bank" class="col-form-label">Role/Designation</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="bank" class="form-control" name="bank" />
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

                            <div class="col-12 py-2 col-md-2">
                                <label for="bank_code" class="col-form-label"><strong>Bank Code</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="bank_code" class="form-control" />
                            </div>
                            
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

export default Employed
