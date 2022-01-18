import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BusinessMembership() {
    const [BizOwnership, setBizOwnership] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <form id="reg1" className="row justify-content-center py-3">
            <div className="col-11 col-md-10">
                <div className="row">
                    <h2 className="py-3">Membership Under Businesses</h2>
                    <strong><p>Business Information</p></strong>
                    <div className="col-12 col-md-12">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-2">
                                <label for="schoolname" class="col-form-label">Business Name</label>
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
                                <label for="bank" class="col-form-label">Business Location</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="bank" class="form-control" name="bank" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="branch" class="col-form-label">Business Ownership</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select onChange={e=>{setBizOwnership(e.target.value)}} value = "1"  id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option>Select Business Ownership Type</option>
                                    <option>Sole Proprietorship</option>
                                    <option>Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {BizOwnership==="Sole Proprietorship"?
                                <div className="col-12 pt-2">
                                    <div className="row">
                                        <div class="col-12 py-2 col-md-2">
                                            <label for="street" class="col-form-label">Copy of National ID</label>
                                        </div>
                                        <div class="col-12 col-md-9">
                                            <input type="file" id="street" class="form-control" />
                                        </div>
                                    </div>
                                </div>:
                                ""
                            }

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">Copy of KRA PIN</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="file" id="street" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">Resolution to open account (minutes)</label>
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
        </form>
    )
}

export default BusinessMembership
