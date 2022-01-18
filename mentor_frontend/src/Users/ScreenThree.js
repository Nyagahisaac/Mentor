import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'
import './pivot_table_kin_details.module.css'

function ScreenThree() {
    const [KinRelationship, setKinRelationship] = useState("")


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form className="row justify-content-center py-3">
            <RegistrationSteps step1 step2 step3 step4 />
            <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label"><strong>Employment Details</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <select id="inputState" onChange={e=>{setKinRelationship(e.target.value)}}  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Employed</option>
                                    <option>Non-Employed</option>
                                    <option>Self-Employed</option>
                                </select>
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label"><strong>Remittance Mode</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <select id="inputState" onChange={e=>{setKinRelationship(e.target.value)}}  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Checkoff</option>
                                    <option>M-Pesa</option>
                                    <option>Standing Order</option>
                                    <option>FOSA Standing Order</option>
                                </select>
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="lastname" class="col-form-label"><strong>Monthly Deposit Contribution</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="lastname" placeholder="Monthly Deposit Contribution" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kra_pin" class="col-form-label"><strong>Monthly Share Capital Contribution</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="kra_pin" placeholder="Monthly share capital Contribution" class="form-control" />
                            </div>

                            
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <strong>Registration Fee Payment</strong>
                            <p>Please pay KES XXX Registration fee only OR KES XXX registration fee, Minimum Monthly Deposit and Share Capital contribution to
                            Paybill No: XXXXX
                            Account No: REG
                            Enter the MPESA Reference code in the input field below and click validate to proceed with the registration.</p>

                            <div class="col-12 py-2 col-md-4">
                                <label for="kra_pin" class="col-form-label"><strong>M-Pesa Reference Code</strong></label>
                            </div>
                            <div class="col-12 col-md-7">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="M-Pesa transaction code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-success" type="button" id="button-addon2">Validate</button>
                                </div> 
                            </div>

                            <div class="col-12 py-2 col-md-7">
                                <label for="kra_pin" class="col-form-label"><strong>Would you like to get SACCO Link VISA card?</strong></label>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                </div>
                            </div>

                                <div class="col-12 py-2 col-md-7">
                                    <label for="kra_pin" class="col-form-label"><strong>Would you like to enrolled for  Mentor  Quick Cash mobile phone services?</strong></label>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                    </div>
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
                                        I agree to Mentor Sacco Loan Terms and Conditions. Click here to read the Terms and Conditions
                                    </label>
                                </div>
                            </div>
                            <Link to='/registration/account_creation_success'>
                                <button className="btn btn-outline-primary rounded" type="submit">Finish Member Application</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form> 
    )
}

export default ScreenThree
