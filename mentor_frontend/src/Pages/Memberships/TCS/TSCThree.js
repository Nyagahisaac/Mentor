import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../../../components/RegistrationSteps'
import './pivot_table_kin_details.module.css'

function TSCThree() {
    const [KinRelationship, setKinRelationship] = useState("")


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form className="row justify-content-center py-3">
            <RegistrationSteps step1 step2 step3 step4 />
            <div className="col-11 col-md-8  py-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <div className="row align-items-center">
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
                    <div className="col-12 col-md-11">
                        <div className="row align-items-center justify-content-center">
                            <strong>Registration Fee Payment</strong>
                            <p>Please pay KES XXX Registration fee only OR KES XXX registration fee, Minimum Monthly Deposit and Share Capital contribution to
                            Paybill No: XXXXX
                            Account No: REG
                            Enter the MPESA Reference code in the input field below and click validate to proceed with the registration.</p>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kra_pin" class="col-form-label"><strong>M-Pesa Reference Code</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="M-Pesa transaction code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-outline-success" type="button" id="button-addon2">Validate</button>
                                </div> 
                            </div>

                            <div class="col-12 py-2 col-md-8">
                                <label for="kra_pin" class="col-form-label"><strong>Would you like to get SACCO Link VISA card?</strong></label>
                            </div>
                            <div class="col-12 col-md-4">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                </div>
                            </div>

                                <div class="col-12 py-2 col-md-8">
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
                                <div className="col-12">
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
                            <div className="col-10 col-md-12">
                                <div className="row justify-content-evenly text-center">
                                    <Link className="col-md-6" to='/membership/next_of_kin'>
                                        <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                                    </Link>
                                    
                                    <Link className="col-md-6" to='/registration/account_creation_success'>
                                        <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Finish Application</button></row>
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

export default TSCThree
