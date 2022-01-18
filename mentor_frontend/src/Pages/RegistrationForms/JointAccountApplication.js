import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'


const applicationOptions =[
    {
        'id': '0',
        'loan_period':'Select option'
    },
    {
        'id': '1',
        'loan_period':'six months'
    },
    {
        'id': '2',
        'loan_period':'9 months'
    },
    {
        'id': '3',
        'loan_period':'12 months'
    },
]

const branches=[
    {
        'id':'0',
        'branch_name':"Select Branch",
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

function JointAccountApplication() {
    const [FosaType, setFosaType] = useState('')
    const [fullnames, setFullnames] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accountNo, setAccountNo] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [idNo, setIDNo] = useState('')
    const [postalAddress, setPostalAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [physicalAddress, setPhysicalAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [Employer, setEmployer] = useState('')
    const [workstation, setWorkstation] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [RepaymentPeriod, setRepaymentPeriod] = useState('')
    const [LoanPurpose, setLoanPurpose] = useState('')
    const [LoanSecurity, setLoanSecurity] = useState('')
    const [SecurityDocument, setSecurityDocument] = useState('')
    const [GuarantorName, setGuarantorName] = useState('')
    const [GuarantorPhoneNo, setGuarantorPhoneNo] = useState('')
    const [GuarantorIDNO, setGuarantorIDNO] = useState('')
    const [GuarantorPostalAddress, setGuarantorPostalAddress] = useState('')
    const [GuarantorOccupation, setGuarantorOccupation] = useState('')

    const [applicationType, setApplicationType] = useState('')
    const [collectionBranch, setCollectionBranch] = useState('')
    const [collectionBranchmessage, setcollectionBranchMessage] = useState('')
    


    const [checkmark, setCheckmark] = useState('')
    const [checkmark2, setCheckmark2] = useState('')

    let [FullNamemessage, setFullNameMessage] = useState('')
    const [phoneNomessage, setphoneNoMessage] = useState('')
    const [accountNomessage, setaccountNoMessage] = useState('')
    const [postalAddressmessage, setpostalAddressMessage] = useState('')
    const [postalCodemessage, setpostalCodeMessage] = useState('')
    const [physicalAddressmessage, setphysicalAddressmessage] = useState('')
    
    const [occupationMessage, setOccupationMessage] = useState('')
    const [workstationMessage, setWorkstationMessage] = useState('')
    const [EmployerMessage, setEmployerMessage] = useState('')
    const [loanAmountMessage, setLoanAmountMessage] = useState('')
    const [RepaymentPeriodMessage, setRepaymentPeriodMessage] = useState('')
    const [LoanPurposeMessage, setLoanPurposeMessage] = useState('')
    const [LoanSecurityMessage, setLoanSecurityMessage] = useState('')
    const [SecurityDocumentMessage, setSecurityDocumentMessage] = useState('')
    const [GuarantorNameMessage, setGuarantorNameMessage] = useState('')
    const [GuarantorPhoneNoMessage, setGuarantorPhoneNoMessage] = useState('')
    const [GuarantorIDNOMessage, setGuarantorIDNOMessage] = useState('')
    const [GuarantorPostalAddressMessage, setGuarantorPostalAddressMessage] = useState('')
    const [GuarantorOccupationMessage, setGuarantorOccupationMessage] = useState('')
    const [idNoMessage, setidNoMessage] = useState('')


    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [checked7, setChecked7] = useState(false)
    


    const [checkmarkMessage, setCheckmarkMessage] = useState('')


    useEffect(() => {
        // window.scrollTo(0, 0)
        console.log(FosaType)
    }, [fullnames, phoneNo, accountNo, postalAddress, postalCode, physicalAddress, applicationType, collectionBranch, FosaType ])

    const submitHandler = (e) => {
        setFullNameMessage('')
        setphoneNoMessage('') 
        setaccountNoMessage('')
        setpostalAddressMessage('')
        setpostalCodeMessage('')
        setphysicalAddressmessage('')
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
        if ( !idNo ){
            setidNoMessage('**This field is required') 
            console.log(idNo)
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
        if ( !occupation ){
            setOccupationMessage('**This field is required') 
            console.log(occupation)
        }
        if ( !workstation ){
            setWorkstationMessage('**This field is required') 
            console.log(workstation)
        }
        if ( !Employer ){
            setEmployerMessage('**This field is required') 
            console.log(Employer)
        }
        if ( !loanAmount ){
            setLoanAmountMessage('**This field is required') 
            console.log(loanAmount)
        }
        if ( !RepaymentPeriod ){
            setRepaymentPeriodMessage('**This field is required') 
            console.log(RepaymentPeriod)
        }

        if ( !LoanPurpose ){
            setLoanPurposeMessage('**This field is required') 
            console.log(LoanPurpose)
        }
        if ( !LoanSecurity ){
            setLoanSecurityMessage('**This field is required') 
            console.log(LoanSecurity)
        }
        if ( !SecurityDocument ){
            setSecurityDocumentMessage('**This field is required') 
            console.log(SecurityDocumentMessage)
        }
        if ( !GuarantorName ){
            setGuarantorNameMessage('**This field is required') 
            console.log(GuarantorName)
        }
        if ( !GuarantorPhoneNo ){
            setGuarantorPhoneNoMessage('**This field is required') 
            console.log(GuarantorPhoneNo)
        }
        if ( !setGuarantorIDNO ){
            setGuarantorIDNOMessage('**This field is required') 
            console.log(GuarantorIDNO)
        }
        if ( !GuarantorPostalAddress ){
            setGuarantorPostalAddressMessage('**This field is required') 
            console.log(GuarantorPostalAddress)
        }
        if ( !GuarantorOccupation ){
            setGuarantorOccupationMessage('**This field is required') 
            console.log(GuarantorOccupation)
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
                <span className="breadcrumb-item-override-active">Joint Account Application</span>
                </li>
            </ol>
         </nav>
        <div className="line"></div>


        <div className="container py-5 mb-5">
            <div className="row justify-content-center py-3">
                <div className="col-10 col-md-9">
                    <h2 id="subheader">Joint Account Application Form</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>

                    <p><strong>Membership Elligibility</strong></p>
                    <ul>
                        <li>Fully paid up share capital of Kenya shillings 30, 000</li>
                        <li>Registration fee  of KES. 10, 000</li>
                        <li>Eighteen years and above</li>
                        <li>Minimum monthly contribution of KES. 2, 000</li>
                    </ul>
                    <Form onSubmit={submitHandler}>
                            

                            {/* <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">Account number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your account number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{accountNomessage}</small>
                            </Form.Group>

                            <div controlId = 'collectionBranch' class="col-md-12 py-2">
                                <Form.Label className="px-3">Select Branch*</Form.Label>
                                <select value = {collectionBranch} onChange = {(e) => setCollectionBranch(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {branches.map(branch=>(
                                        <option key={branch.id}>{branch.branch_name}</option>
                                    ))}
                                </select>
                                <small class="form-label px-3 form-error">{collectionBranchmessage}</small>
                            </div>  */}

                            <strong><p>Applicant's Information</p></strong>

                            <Form.Group controlId = 'memberno' className="pb-1">
                                <Form.Label className="px-3">Full Names*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your name'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">Date of Birth*</Form.Label>
                                <Form.Control 
                                    type = 'date' 
                                    placeholder = 'Enter your date of birth'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{accountNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">ID/Passport Number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your ID/passport number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{accountNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'id' className="pb-1">
                                <Form.Label className="px-3">Registration Number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your registration number'  
                                    value = {idNo} 
                                    onChange = {(e) => setIDNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{idNoMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">KRA PIN*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your KRA pin no'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>
                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">Email address*</Form.Label>
                                <Form.Control 
                                    type = 'email' 
                                    placeholder = 'Enter your email address'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">Mobile Phone No*</Form.Label>
                                <Form.Control 
                                    type = 'email' 
                                    placeholder = 'Enter your phone number'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
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

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Occupation*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your phone no'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'employer' className="pb-1">
                                <Form.Label className="px-3">Employer/Business Type*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your occupation'  
                                    value = {Employer} 
                                    onChange = {(e) => setEmployer(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{EmployerMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'workstation' className="pb-1">
                                <Form.Label className="px-3">Estimated Salary Income*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your monthly salary income'  
                                    value = {workstation} 
                                    onChange = {(e) => setWorkstation(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{workstationMessage}</small>
                            </Form.Group>

                            
                            <Form.Group controlId = 'loansecurity' className="pb-1">
                                <Form.Label className="px-3">Upload ID/Passport*</Form.Label>
                                <Form.Control onChange = {(e) => setLoanSecurity(e.target.value)} type="file" />
                                
                                <small class="form-label px-3 form-error">{LoanSecurityMessage}</small>
                            </Form.Group>
                            <Form.Group controlId = 'loansecurity' className="pb-1">
                                <Form.Label className="px-3">Upload Passport Photo*</Form.Label>
                                <Form.Control onChange = {(e) => setLoanSecurity(e.target.value)} type="file" />
                                
                                <small class="form-label px-3 form-error">{LoanSecurityMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <div className="row py-3">
                                <Form.Label className="">Deposit type</Form.Label>
                                    <div className="col-md-6 col-10">
                                        <Form.Check value="Ordinary Deposit" checked={checked1} onClick={buttonStatus1} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Ordinary Deposit" />
                                        <Form.Check value="Mazao Deposits" checked={checked2} onClick={buttonStatus2} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Mazao Deposits" />
                                        <Form.Check value="FOSA deposits" checked={checked3} onClick={buttonStatus3} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="FOSA deposits" />
                                        
                                    </div>
                                </div>
                            </Form.Group>

                            <strong><p>Cashless Services</p></strong>
                            <p>Mobile Banking (Quick Cash)</p>
                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Names*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your name" 
                                    value = {GuarantorName} 
                                    onChange = {(e) => setGuarantorName(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Phone Number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your phone number" 
                                    value = {GuarantorName} 
                                    onChange = {(e) => setGuarantorName(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                            </Form.Group>

                            <p>Visa Card</p>

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Name*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your Name" 
                                    value = {GuarantorName} 
                                    onChange = {(e) => setGuarantorName(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Phone Number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your phone number" 
                                    value = {GuarantorName} 
                                    onChange = {(e) => setGuarantorName(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                            </Form.Group>

                            
                            
                            <div  className="pb-3 green">
                                <strong>Read the terms and conditions</strong>
                            </div>
                        <div className="row justify-content-center">
                            <div class="col-11 form-check pb-2">
                                <input value = 'checked' onChange = {(e) => setCheckmark(e.target.value)} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label text-black" for="flexCheckDefault">
                                I/We accept all terms and conditions related to this service and confirm that the information and 
                                disclosers provided hereIn are true
                                </label>
                                <small class="form-label px-3 form-error">{checkmarkMessage}</small>
                            </div>
                            <Link to="/submit/success">
                                <Button className="col-12 btn btn-success rounded" type='submit' variant='primary'>Submit Application</Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default JointAccountApplication
