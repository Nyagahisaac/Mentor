import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const applicationOptions =[
    {
        'id': '0',
        'application_type':'Select option'
    },
    {
        'id': '1',
        'application_type':'New Card'
    },
    {
        'id': '2',
        'application_type':'Card Replacement'
    },
]


function FosaLoan() {
    const [FosaType, setFosaType] = useState('')
    const [fullnames, setFullnames] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accountNo, setAccountNo] = useState('')
    const [postalAddress, setPostalAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [physicalAddress, setPhysicalAddress] = useState('')
    const [applicationType, setApplicationType] = useState('')
    const [collectionBranch, setCollectionBranch] = useState('')
    


    const [checkmark, setCheckmark] = useState('')

    let [FullNamemessage, setFullNameMessage] = useState('')
    const [phoneNomessage, setphoneNoMessage] = useState('')
    const [accountNomessage, setaccountNoMessage] = useState('')
    const [postalAddressmessage, setpostalAddressMessage] = useState('')
    const [postalCodemessage, setpostalCodeMessage] = useState('')
    const [physicalAddressmessage, setphysicalAddressmessage] = useState('')
    const [applicationTypemessage, setapplicationTypeMessage] = useState('')
    const [collectionBranchmessage, setcollectionBranchMessage] = useState('')
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    


    const [checkmarkMessage, setCheckmarkMessage] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0)
        console.log(FosaType)
    }, [fullnames, phoneNo, accountNo, postalAddress, postalCode, physicalAddress, applicationType, collectionBranch, FosaType ])

    const submitHandler = (e) => {
        setFullNameMessage('')
        setphoneNoMessage('') 
        setaccountNoMessage('')
        setpostalAddressMessage('')
        setcollectionBranchMessage('')
        setpostalCodeMessage('')
        setphysicalAddressmessage('')
        setapplicationTypeMessage('')
        setCheckmarkMessage('')


        // console.log(firstname)
        e.preventDefault()
        if ( !fullnames ){
            setFullNameMessage('**This field is required') 
            console.log(fullnames)
        }

        if ( !phoneNo ){
            setphoneNoMessage('**This field is required') 
            console.log(phoneNo)
        }
        if ( !accountNo ){
            setaccountNoMessage('**This field is required') 
            console.log(accountNo)
        }
        if ( !postalAddress ){
            setpostalAddressMessage('**This field is required') 
            console.log(postalAddress)
        }
        if ( !postalCode ){
            setpostalCodeMessage('**This field is required') 
            console.log(postalCode)
        }
        if ( !physicalAddress ){
            setphysicalAddressmessage('**This field is required') 
            console.log(physicalAddress)
        }
        if ( !applicationType ){
            setapplicationTypeMessage('**This field is required') 
            console.log(applicationType)
        }
        if ( !collectionBranch ){
            setcollectionBranchMessage('**This field is required') 
            console.log(collectionBranchmessage)
        }

        if ( !checkmark ){
            setCheckmarkMessage('**Consent is required to proceed') 
            console.log(checkmark)
        }
        else {
            // dispatch(mentorregister(firstname))
            // history.push('/profile/')
            console.log(fullnames, phoneNo, accountNo, postalAddress, postalCode, physicalAddress, applicationType, collectionBranch)
        }
    }

    const buttonStatus1 = (e) =>{
        setChecked1(true)
        setChecked2(false)
        setChecked3(false)
    }

    const buttonStatus2 = (e) =>{
        setChecked1(false)
        setChecked2(true)
        setChecked3(false)
    }

    const buttonStatus3 = (e) =>{
        setChecked1(false)
        setChecked2(false)
        setChecked3(true)
    }

    return (
        <div className="container">
            <div className="row justify-content-center py-3">
                <div className="col-10 col-md-9">
                    <h2>FOSA Loan Application and Agreement Form</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>
                    <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" id="fosaType">
                            <Form.Label className="">Select your type of FOSA</Form.Label>
                                <Form.Check value="FOSA Pride" checked={checked1} onClick={buttonStatus1} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="FOSA Pride" />
                                <Form.Check value="Jambo FOSA" checked={checked2} onClick={buttonStatus2} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Jambo FOSA" />
                                <Form.Check value="FOSA Imara" checked={checked3} onClick={buttonStatus3} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="FOSA Imara" />
                            </Form.Group>
                            <Form.Group controlId = 'firstname' className=" pb-1">
                                <Form.Label className="px-3">Full Name *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your full name'  
                                    value = {fullnames} 
                                    onChange = {(e) => setFullnames(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{FullNamemessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">Mobile phone number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your phone no'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">Account number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your account number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{accountNomessage}</small>
                            </Form.Group>

                            <div className="row">
                                <Form.Group controlId = 'postaladdress' className="pb-1 col-6">
                                    <Form.Label className="px-3">Postal Address*</Form.Label>
                                    <Form.Control 
                                        type = 'text' 
                                        placeholder = 'Enter your postal address'  
                                        value = {postalAddress} 
                                        onChange = {(e) => setPostalAddress(e.target.value)}
                                    ></Form.Control>
                                    <small class="form-label px-3 form-error">{postalAddressmessage}</small>
                                </Form.Group>

                                <Form.Group controlId = 'postalcode' className="pb-1 col-6">
                                    <Form.Label className="px-3">Postal Code*</Form.Label>
                                    <Form.Control 
                                        type = 'text' 
                                        placeholder = 'Enter your area postal code'  
                                        value = {postalCode} 
                                        onChange = {(e) => setPostalCode(e.target.value)}
                                    ></Form.Control>
                                    <small class="form-label px-3 form-error">{postalCodemessage}</small>
                                </Form.Group>
                            </div>

                            <Form.Group controlId = 'physicaladdress' className="pb-1">
                                <Form.Label className="px-3">Physical Address*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your passport/ID number'  
                                    value = {physicalAddress} 
                                    onChange = {(e) => setPhysicalAddress(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{physicalAddressmessage}</small>
                            </Form.Group>

                            
                            <div controlId = 'applicationType' class="col-md-12 py-2">
                                <Form.Label className="px-3">Select the type of Application*</Form.Label>
                                <select value = {applicationType} onChange = {(e) => setApplicationType(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {applicationOptions.map(branch=>(
                                        <option key={branch.id}>{branch.application_type}</option>
                                    ))}
                                </select>
                                <small class="form-label px-3 form-error">{applicationTypemessage}</small>
                            </div> 

                            

                            
                        <div className="row justify-content-center">
                            <div class="col-11 form-check pb-2">
                                <input value = 'checked' onChange = {(e) => setCheckmark(e.target.value)} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label text-black" for="flexCheckDefault">
                                    I confirm that the information and disclosure provided herein are true and I hereby apply for an ATM Card and undertake to abide with all the terms and conditions in force during the
                                    operation of this account with Mentor Sacco
                                </label>
                                <small class="form-label px-3 form-error">{checkmarkMessage}</small>
                            </div>
                            <Link to="/submit/success">
                                <Button className="col-11 btn btn-outline-primary rounded" type='submit' variant='primary'>Submit Application</Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FosaLoan
