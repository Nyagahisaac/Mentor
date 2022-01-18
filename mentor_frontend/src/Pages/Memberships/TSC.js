import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TSC() {
    const [FosaType, setFosaType] = useState('')
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [checked7, setChecked7] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      const buttonStatus1 = (e) =>{
        setChecked1(true)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
        setChecked6(false)
        setChecked7(false)
    }

    const buttonStatus2 = (e) =>{
        setChecked1(false)
        setChecked2(true)
        setChecked3(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
        setChecked6(false)
    }

    const buttonStatus3 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(true)
        setChecked4(false)
        setChecked5(false)
        setChecked6(false)
        setChecked7(false)
    }

    const buttonStatus4 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(true)
        setChecked5(false)
        setChecked6(false)
        setChecked7(false)
    }

    const buttonStatus5 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(true)
        setChecked6(false)
        setChecked7(false)
    }

    const buttonStatus6 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
        setChecked6(true)
        setChecked7(false)
    }

    const buttonStatus7 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
        setChecked6(false)
        setChecked7(true)
    }
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <div className="col-11 col-md-10">
                <div className="row">
                    <h2 className="py-3">Membership Under The Teachers Service Commission</h2>
                    <strong><p>Note: The minimum monthly contribution is Kshs 2000 for all TSC employees and civil servants.</p></strong>
                    <div className="col-12 col-md-12">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-2">
                                <label for="schoolname" class="col-form-label">Station/School</label>
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
                                <label for="bank" class="col-form-label">Department/Designation</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="bank" class="form-control" name="bank" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="branch" class="col-form-label">Branch</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="branch" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-2">
                                <label for="street" class="col-form-label">TSC/PF Number</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="street" class="form-control" />
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

                            <strong><p className="pt-3">Share Type</p></strong>
                            <Form.Group controlId = 'firstname' className=" pb-1">
                                <div className="row">
                                    <div className="col-md-6 col-10">
                                        <Form.Check value="Ordinary Shares" checked={checked1} onClick={buttonStatus1} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Ordinary Shares" />
                                        <Form.Check value="Mazao Shares" checked={checked2} onClick={buttonStatus2} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Mazao Shares" />
                                        <Form.Check value="FOSA Shares" checked={checked3} onClick={buttonStatus3} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="FOSA Shares" />
                                    </div>
                                </div>
                            </Form.Group>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-10">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-5" to='/memberships'>
                                <button className="col-6 btn btn-outline-primary rounded" type="submit">Back</button>
                            </Link>
                            
                            <Link className="col-md-5" to='/membership/tsc_account_creation'>
                                <button className="col-6 btn btn-outline-primary rounded" type="submit">Proceed</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TSC
