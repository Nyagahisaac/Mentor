import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'

import Arrow from './orangeArrow.svg'

function AccountDetails() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='container py-5 mb-5 active-detstab'>

            <div className='col-12 col-md-4 photoSection'>
                <div className='photo'>
                    Photo
                </div>
                <div style={{fontWeight: '500', paddingLeft: '10px'}}>
                <p className='pt-3'>Humphrey Nganga</p>
                <p className='pb-1'>ID No: 268737</p>
                <p className='pb-1'>Mentor Acc. No: 10283022</p>
                <p className='pb-1'>Account Type: Ordinary Savings</p>
                </div>            
                <button className='btn' style={{width: '70%'}}>
                    Edit User Details
                </button>
                
            </div>


            <div className='col-12 col-md-1 px-3 detdivider'></div>

            <div className='col-12 col-md-7 px-3 detailssection'>
            <div className="row align-items-center justify-content-between">
                    <div class="col-12 py-2 col-md-7">
                            <label for="birthday" class="col-form-label"><strong>Date of Birth</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            22/09/1975
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="identitycard" class="col-form-label"><strong>Gender</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            Female
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="occupation" class="col-form-label"><strong>Physical Address</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            Uhuru Highway, Muranga County
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="employer" class="col-form-label"><strong>Postal Address</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            387-10200
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="krapin" class="col-form-label"><strong>City/town</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            Muranga
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="krapin" class="col-form-label"><strong>Email Address</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            dummy@mentor.com
                        </div>
    
                        <div class="col-12 py-1 col-md-7">
                            <label for="krapin" class="col-form-label"><strong>Mobile Number</strong></label>
                        </div>
                        <div class="col-12 col-md-5">
                            0721223344
                        </div>
    
                        <div class="col-12 py-1 col-md-10">
                            <label for="kra_pin" class="col-form-label"><strong>Would you like to get SACCO Link VISA card?</strong></label>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            </div>
                        </div>
    
                        <div class="col-12 py-1 col-md-10">
                            <label for="kra_pin" class="col-form-label"><strong>Would you like to enrolled for  Mentor  Quick Cash mobile phone services?</strong></label>
                        </div>
                        <div class="col-12 col-md-2">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                            </div>
                        </div>
    
                        
                    </div>
            </div>
          
        </div>
    )
}

export default AccountDetails
