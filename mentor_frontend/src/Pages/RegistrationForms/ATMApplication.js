import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'



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

const branches=[
    {
        'id':'0',
        'branch_name':"Select Option",
        'location':'Mentor Complex, Uhuru Highway',
        'contact': '0111026000, 0704066827',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'1',
        'branch_name':"Head Office, Murang'a Town",
        'location':'Mentor Complex, Uhuru Highway',
        'contact': '0111026000, 0704066827',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'2',
        'branch_name':'Thika Town Branch',
        'location':'Thika',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'3',
        'branch_name':'Kenol Town Branch',
        'location':'Highway Villa Building',
        'contact': '0704350662, 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'4',
        'branch_name':'Nairobi Branch',
        'location':'Ngara',
        'contact': '0713072137',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'5',
        'branch_name':'Kiriaini Town Branch',
        'location':'Kiriaini Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'6',
        'branch_name':'Ithanga Branch',
        'location':'Ithanga Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'7',
        'branch_name':'Kangari Town Branch',
        'location':'Kangari Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'8',
        'branch_name':'Kandara Town Kandara',
        'location':' Kandara Town',
        'contact': ' 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
]

function ATMApplication() {
    const [fullnames, setFullnames] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accountNo, setAccountNo] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [postalAddress, setPostalAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [physicalAddress, setPhysicalAddress] = useState('')
    const [applicationType, setApplicationType] = useState('')
    const [collectionBranch, setCollectionBranch] = useState('')
    const [checkmark, setCheckmark] = useState('')

    let [FullNamemessage, setFullNameMessage] = useState('')
    const [phoneNomessage, setphoneNoMessage] = useState('')
    const [accountNomessage, setaccountNoMessage] = useState('')
    const [memberNomessage, setmemberNoMessage] = useState('')
     const [postalAddressmessage, setpostalAddressMessage] = useState('')
     const [postalCodemessage, setpostalCodeMessage] = useState('')
     const [physicalAddressmessage, setphysicalAddressmessage] = useState('')
    const [applicationTypemessage, setapplicationTypeMessage] = useState('')
    const [collectionBranchmessage, setcollectionBranchMessage] = useState('')
    


    const [checkmarkMessage, setCheckmarkMessage] = useState('')


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [fullnames, phoneNo, accountNo, postalAddress, postalCode, physicalAddress, applicationType, collectionBranch ])

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
        if ( !memberNo ){
            setmemberNoMessage('**This field is required') 
            console.log(memberNo)
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

    return (
        <div>
        <WhiteHeader />
        <div className="line"></div>
         <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
            <ol className="breadcrumb">
            <img src={homeIcon} alt="" style={{marginRight: 5, width: '20px', height: '20px'}}/>
                <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-item-override">Home</a></li>
                <li className="breadcrumb-item">
                <a href="/saccoservices" className="breadcrumb-item-override">Sacco Services</a></li>
                
                <li className="breadcrumb-item active" aria-current="page">
                <span className="breadcrumb-item-override-active">ATM/VISA Card Application</span>
                </li>
            </ol>
         </nav>
        <div className="line"></div>


        <div className="container py-5 mb-5">
            <div className="row justify-content-center ">
                <div className="col-10 col-md-9">
                    <h2 id="subheader">ATM/VISA Card Application Form</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>
                    <Form onSubmit={submitHandler}>
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
                                <Form.Label className="px-3">Member number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your member number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{memberNomessage}</small>
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
                            {/* <div className="row">
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
                            </Form.Group> */}

                            
                            <div controlId = 'applicationType' class="col-md-12 py-2">
                                <Form.Label className="px-3">Select the type of Application*</Form.Label>
                                <select value = {applicationType} onChange = {(e) => setApplicationType(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {applicationOptions.map(branch=>(
                                        <option key={branch.id}>{branch.application_type}</option>
                                    ))}
                                </select>
                                <small class="form-label px-3 form-error">{applicationTypemessage}</small>
                            </div> 

                            <div controlId = 'collectionBranch' class="col-md-12 py-2">
                                <Form.Label className="px-3">Select the branch collect your atm card*</Form.Label>
                                <select value = {collectionBranch} onChange = {(e) => setCollectionBranch(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {branches.map(branch=>(
                                        <option key={branch.id}>{branch.branch_name}</option>
                                    ))}
                                </select>
                                <small class="form-label px-3 form-error">{collectionBranchmessage}</small>
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
                                <Button className="col-12 btn btn-success rounded py-3" type='submit' variant='primary'>Submit Application</Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ATMApplication
