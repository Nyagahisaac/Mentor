import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BizRegistrationSteps from '../../../components/BizRegistrationSteps'

function BizOne() {
    const [mandate, setMandate] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <BizRegistrationSteps step1 step2 />
            <div className="col-11 col-md-8">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-11">
                        <strong><p className="pt-2">Account Operation</p></strong>
                        <div className="row align-items-center">
                            <div class="col-12 col-md-3">
                                <label for="firstname" class="col-form-label">Account Operation Mandate</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select onChange={e=>{setMandate(e.target.value)}} id="inputState" style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Select mandate</option>
                                    <option>2 to sign</option>
                                    <option>3 to sign</option>
                                    <option>other</option>
                                </select>
                            </div>

                            {mandate==='other'?
                            <div className="col-12 pt-3">
                                <div className="row">
                                    <div class="col-12 py-2 col-md-3">
                                        <label for="firstname" class="col-form-label">Specify</label>
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <input type="text" id="firstname" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            : ''
                            }
                            
                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label">Primary phone to be used</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="firstname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="identitycard" class="col-form-label">Primary email address to be used</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="identitycard" class="form-control" />
                            </div>

                            
                        </div>
                    </div>
                    
                </div>

                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-12">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-6" to='/business_groups/account_creation'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                            </Link>
                            
                            <Link className="col-md-6" to='/business_groups/remittance_details'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Proceed</button></row>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
        </form>
    )
}

export default BizOne
