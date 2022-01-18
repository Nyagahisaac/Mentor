import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BizRegistrationSteps from '../../../components/BizRegistrationSteps'

function BizZero() {
    const [formValues, setFormValues] = useState([{ firstname:"",  lastname:"", email:"" }])
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    let handleChange = (i,e) => {
        let newFormValues = [...formValues]
        newFormValues[i][e.target.name] = e.target.value
        setFormValues(newFormValues)
    }

    let addFormFields = () => {
        setMessage('')
        setCount(count+1)
        if (count<3){
            setFormValues([ ...formValues, { firstname:"",  lastname:"", email:"" } ])
            console.log(count)
        }
        else if (count>=3){
            setMessage('Limit for multiple members has been reached')
            setCount(3)
        }
    }

    let removeFormFields = (i) => {
        setCount(count-1)
        let newFormValues = [...formValues]
        newFormValues.splice(i, 1)
        setFormValues(newFormValues)
    }

    // let handleSubmit = (e) =>{
    //     e.preventDefault()
    //     alert(JSON.stringify(formValues))
    // }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <form id="reg1" className="row justify-content-center py-3">
            <BizRegistrationSteps step1 />
            <div className="col-11 col-md-8 py-1">
            <strong><p className="pt-2">You can only create a joint membership account for a maximum of 4 members</p></strong>
                {formValues.map((element, index) => (
                    <div className="row">
                        {index>0?<strong><p className="pt-2 text-center">Applicant {index+1}</p></strong>:''}
                        <div className="col-12 col-md-6">
                            <div className="row align-items-center">

                                <div class="col-12 py-2 col-md-3">
                                    <label for="lastname" class="col-form-label">Last Name</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="lastname" value={element.lastname || ""} onChange = {e => handleChange(index, e)} class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="firstname" class="col-form-label">First Name</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="firstname" value={element.firstname || ""} onChange = {e => handleChange(index, e)} class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="email" class="col-form-label">Email</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="email" id="email" value={element.email || ""} onChange = {e => handleChange(index, e)} class="form-control" />
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
                                <div class="col-12 py-2 col-md-3">
                                    <label for="lastname" class="col-form-label">Date of Birth</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="date" id="lastname" class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="firstname" class="col-form-label">KRA PIN</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="firstname" class="form-control" />
                                </div>
                                <div class="col-12 py-2 col-md-3">
                                    <label for="photofile" class="col-form-label">Attach Photo</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input class="form-control" type="file" accept="image/jpeg" id="photofile" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="signature" class="col-form-label">Attach Signature</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input class="form-control" type="file" accept="image/jpeg" id="signature" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="id-front" class="col-form-label">Attach ID Front</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input class="form-control" type="file" accept="image/jpeg" id="id-front" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="id-back" class="col-form-label">Attach ID Back</label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input class="form-control" type="file" accept="image/jpeg" id="id-back" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="kra" class="col-form-label">KRA Certificate (<span style={{color:"red"}}>*pdf</span>)</label>
                                    <label for="inputState" class="form-label">
                                    <small></small>
                                </label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input class="form-control" type="file" accept="application/pdf" id="kra" />
                                </div>
                            </div>
                        </div>
                        {index>0?<div className="col-12 col-md-4">
                            <div className="row justify-content-center">
                                <button onClick = {() => removeFormFields()} className="col-md-10 col-10 text-center btn btn-outline-success rounded" type="button">- Remove this applicant</button>
                            </div>
                        </div>:''}
                    </div>
                ))}
                {/* {formValues.map((element, index) => (
                    <div key={index} className="row align-items-center">
                        <div className="col-12 col-md-8">
                            <div className="row">
                                {index>0?<strong><p className="pt-2 text-center">Applicant {index+1}</p></strong>:''}
                                <div class="col-12 py-2 col-md-3">
                                    <label for="firstname" class="col-form-label"><strong>First Name</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="firstname" value={element.firstname || ""} onChange = {e => handleChange(index, e)} class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="lastname" class="col-form-label"><strong>Last Name</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="lastname" value={element.lastname || ""} onChange = {e => handleChange(index, e)} class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="email" class="col-form-label"><strong>Email Address</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="email" id="email" value={element.email || ""} onChange = {e => handleChange(index, e)} class="form-control" />
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                ))} */}
                
                {/* <button onClick = {() => addFormFields()} className="col-12 btn btn-outline-success rounded" type="button">+ Add a new applicant's information</button> */}
                <div className="col-12 col-md-8">
                    <div className="row justify-content-center py-3">
                        {message?
                            <p className="text-center">{message}</p>
                            :
                            ''
                        }
                        <button onClick = {() => addFormFields()} className="col-10 col-md-5 text-center btn btn-outline-success rounded" type="button">+ Add a new applicant</button>
                    </div>
                    <div className="row align-items-center">
                        <div class="col-12 py-2 col-md-3">
                            <label for="password" class="col-form-label"><strong>Password</strong></label>
                        </div>
                        <div class="col-12 col-md-9">
                            <input type="password" id="password" class="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-12">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-6" to='/membership/businesses'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                            </Link>
                            
                            <Link className="col-md-6" to='/business_groups/account_operation'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Proceed</button></row>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

                

            {/* <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-3">
                                <label for="email" class="col-form-label"><strong>First Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <input type="email" id="email" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="email" class="col-form-label"><strong>Last Name</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <input type="email" id="email" class="form-control" />
                            </div>


                            <div class="col-12 py-2 col-md-3">
                                <label for="email" class="col-form-label"><strong>Email Address</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                            <input type="email" id="email" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                            <label for="password" class="col-form-label"><strong>Password</strong></label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="password" id="password" class="form-control" />
                            </div>
                        </div>
                    </div>
                        <div className="row justify-content-center py-3">
                            <div className="col-10 col-md-4">
                                
                            </div>
                        </div>

                        <strong><p className="text-center pt-3">You can only create a joint membership account for a maximum of 4 members</p></strong>

                        <div className="row justify-content-center py-3">
                            <div className="col-4">
                                <Link to='/business_groups/account_operation'>
                                    <button className="col-12 btn btn-outline-primary rounded" type="submit">Proceed</button>
                                </Link>
                            </div>
                        </div>
                </div> 
            </div> */}
        </form>
    )
}

export default BizZero
