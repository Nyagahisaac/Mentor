import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

function BosaLoan() {
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
        <div className="container">
            <div className="row justify-content-center py-3">
                <div className="col-10 col-md-9">
                    <h2>BOSA Loan Application and Agreement Form</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>
                    <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" id="fosaType">
                            <Form.Label className="">Select your type of BOSA</Form.Label>
                                <div className="row">
                                    <div className="col-md-6 col-10">
                                        <Form.Check value="Normal" checked={checked1} onClick={buttonStatus1} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Normal" />
                                        <Form.Check value="Jijenge" checked={checked2} onClick={buttonStatus2} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Jijenge" />
                                        <Form.Check value="Instant" checked={checked3} onClick={buttonStatus3} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Instant" />
                                        <Form.Check value="Emergency" checked={checked4} onClick={buttonStatus4} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Emergency" />
                                    </div>
                                    <div className="col-md-6 col-10">
                                        <Form.Check value="School Fees" checked={checked5} onClick={buttonStatus5} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="School Fees" />
                                        <Form.Check value="Boresha" checked={checked6} onClick={buttonStatus6} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Boresha" />
                                        <Form.Check value="Imara Loan" checked={checked7} onClick={buttonStatus7} onChange={(e)=>setFosaType(e.target.value)} type="checkbox" label="Imara Loan" />
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group controlId = 'fullnames' className=" pb-1">
                                <Form.Label className="px-3">Full Name *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your full name'  
                                    value = {fullnames} 
                                    onChange = {(e) => setFullnames(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{FullNamemessage}</small>
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

                            <Form.Group controlId = 'memberno' className="pb-1">
                                <Form.Label className="px-3">Member number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your member no'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'id' className="pb-1">
                                <Form.Label className="px-3">ID number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your ID no'  
                                    value = {idNo} 
                                    onChange = {(e) => setIDNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{idNoMessage}</small>
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
                                <Form.Label className="px-3">Employer*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your occupation'  
                                    value = {Employer} 
                                    onChange = {(e) => setEmployer(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{EmployerMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'workstation' className="pb-1">
                                <Form.Label className="px-3">Workstation*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your workstation'  
                                    value = {workstation} 
                                    onChange = {(e) => setWorkstation(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{workstationMessage}</small>
                            </Form.Group>

                            <strong><p>Loan Application and Repayment</p></strong>
                            <Form.Group controlId = 'loanamount' className="pb-1">
                                <Form.Label className="px-3">Loan Amount*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter the amount for which you wish to apply'  
                                    value = {loanAmount} 
                                    onChange = {(e) => setLoanAmount(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{loanAmountMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'repaymentperiod' className="pb-1">
                                <Form.Label className="px-3">Repayment period*</Form.Label>
                                <select value = {RepaymentPeriod} onChange = {(e) => setRepaymentPeriod(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {applicationOptions.map(branch=>(
                                        <option key={branch.id}>{branch.loan_period}</option>
                                    ))}
                                </select>
                                <small class="form-label px-3 form-error">{RepaymentPeriodMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'loanpurpose' className="pb-1">
                                <Form.Label className="px-3">Purpose of the Loan*</Form.Label>
                                <Form.Control 
                                    as="textarea" rows={3}
                                    placeholder = 'Write a description of the purpose of your loan'  
                                    value = {LoanPurpose} 
                                    onChange = {(e) => setLoanPurpose(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{LoanPurposeMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'loansecurity' className="pb-1">
                                <Form.Label className="px-3">Security for the loan*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter a security for the loan'  
                                    value = {LoanSecurity} 
                                    onChange = {(e) => setLoanSecurity(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{LoanSecurityMessage}</small>
                            </Form.Group>
                            <Form.Group controlId = 'loansecurity' className="pb-1">
                                <Form.Label className="px-3">Security Document Upload*</Form.Label>
                                <Form.Control onChange = {(e) => setLoanSecurity(e.target.value)} type="file" />
                                
                                <small class="form-label px-3 form-error">{LoanSecurityMessage}</small>
                            </Form.Group>

                            <strong><p>Guarantor Information</p></strong>

                            <Form.Group controlId = 'occupation' className="pb-1">
                                <Form.Label className="px-3">Full Names*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your guarantor's full name" 
                                    value = {GuarantorName} 
                                    onChange = {(e) => setGuarantorName(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'guarantorphoneno' className="pb-1">
                                <Form.Label className="px-3">Phone number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your guarantor's phone number" 
                                    value = {GuarantorPhoneNo} 
                                    onChange = {(e) => setGuarantorPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorPhoneNoMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'guarantorIDNo' className="pb-1">
                                <Form.Label className="px-3">ID number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your guarantor's ID number" 
                                    value = {GuarantorIDNO} 
                                    onChange = {(e) => setGuarantorIDNO(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorIDNOMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'guarantorpostaladdress' className="pb-1">
                                <Form.Label className="px-3">Postal Address*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your guarantor's postal address" 
                                    value = {GuarantorPostalAddress} 
                                    onChange = {(e) => setGuarantorPostalAddress(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorPostalAddressMessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'GuarantorOccupation' className="pb-1">
                                <Form.Label className="px-3">Occupation*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = "Enter your guarantor's occupation" 
                                    value = {GuarantorOccupation} 
                                    onChange = {(e) => setGuarantorOccupation(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{GuarantorOccupationMessage}</small>
                            </Form.Group>
                        
                            
                        <div className="row justify-content-center">
                            <div class="col-11 form-check pb-2">
                                <input value = 'checked' onChange = {(e) => setCheckmark(e.target.value)} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label text-black" for="flexCheckDefault">
                                    I agree to abide by all the conditions given above. This application serves as a mutual and voluntary agreement between myself and the society and will terminate on full settlement of the advance and interest
                                </label>
                                <small class="form-label px-3 form-error">{checkmarkMessage}</small>
                            </div>

                            <div class="col-11 form-check pb-2">
                                <input value = 'checked' onChange = {(e) => setCheckmark2(e.target.value)} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label text-black" for="flexCheckDefault">
                                    I hereby confirm that I have authorized the SACCO to share my credit information/access my credit profile
                                    for credit appraisal with licensed Credit Reference Bureau (CRBs). I further release the CRB and the SACCO
                                    and its officers, employees and agents from all claims, actions or proceedings of whatsoever nature and
                                    howsoever arising, suffered or incurred in connection with this sharing and access for the purpose afore stated
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

export default BosaLoan
