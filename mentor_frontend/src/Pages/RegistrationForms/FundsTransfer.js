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

function FundsTransfer() {
    const [TransferOption, setTransferOption] = useState('')
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
        console.log(TransferOption)
    }, [fullnames, phoneNo, accountNo, postalAddress, postalCode, physicalAddress, applicationType, collectionBranch, TransferOption ])

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
                <span className="breadcrumb-item-override-active">Funds Transfer Application</span>
                </li>
            </ol>
         </nav>
        <div className="line"></div>


        <div className="container py-5 mb-5">
            <div className="row justify-content-center py-3">
                <div className="col-10 col-md-9">
                    <h2 id="subheader">Application for Funds Transfer</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>
                    <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" id="fosaType">
                            <Form.Label className="">Select your type of BOSA</Form.Label>
                                <div className="row">
                                    <div className="col-md-6 col-10">
                                        <Form.Check value="Internal Transfer" checked={checked1} onClick={buttonStatus1} onChange={(e)=>setTransferOption(e.target.value)} type="checkbox" label="Internal Transfer" />
                                        <Form.Check value="External Funds Transfer/RTOS" checked={checked2} onClick={buttonStatus2} onChange={(e)=>setTransferOption(e.target.value)} type="checkbox" label="External Funds Transfer/RTOS" />
                                    </div>
                                </div>
                                <small className='my-3 form-error'>**All monies are transferred at member's instructions and the Sacco bears no liability for any mistake</small>
                            </Form.Group>

                            <strong><p>Member Details</p></strong>

                            <Form.Group controlId = 'fullnames' className=" pb-1">
                                <Form.Label className="px-3">Full Names *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter account name'  
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

                            <Form.Group controlId = 'memberno' className="pb-1">
                                <Form.Label className="px-3">Amount*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter amount to transfer'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            {/* <Form.Group controlId = 'id' className="pb-1">
                                <Form.Label className="px-3">ID number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'upload abstract document if mobile line is lost'  
                                    value = {idNo} 
                                    onChange = {(e) => setIDNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{idNoMessage}</small>
                            </Form.Group> */}

                            <strong><p>Beneficiary Details</p></strong>

                            <Form.Group controlId = 'fullnames' className=" pb-1">
                                <Form.Label className="px-3">Full Names *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter account name'  
                                    value = {fullnames} 
                                    onChange = {(e) => setFullnames(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{FullNamemessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">ID/Passport number *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your account number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{accountNomessage}</small>
                            </Form.Group>
                            

                            {/* <Form.Group controlId = 'memberno' className="pb-1">
                                <Form.Label className="px-3">Beneficiary *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter amount to transfer'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group> */}

                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">Beneficiary/Bank*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter bank'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'postaladdress' className="pb-1">
                                    <Form.Label className="px-3">Branch Name*</Form.Label>
                                    <Form.Control 
                                        type = 'text' 
                                        placeholder = 'Enter branch name'  
                                        value = {postalAddress} 
                                        onChange = {(e) => setPostalAddress(e.target.value)}
                                    ></Form.Control>
                                    <small class="form-label px-3 form-error">{postalAddressmessage}</small>
                                </Form.Group>

                                <Form.Group controlId = 'memberno' className="pb-1">
                                <Form.Label className="px-3">Account No *</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter amount to transfer'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{phoneNomessage}</small>
                            </Form.Group>

                            <div class="col-11 form-check pb-2">
                                <input value = 'checked' onChange = {(e) => setCheckmark(e.target.value)} class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label text-black" for="flexCheckDefault">
                                I confirm that the information and disclosure provided herein are true and I hereby apply for Funds Transfer and undertake to abide with all the terms and conditions in force during the
                                operation of this account with Mentor Sacco
                                </label>
                                <small class="form-label px-3 form-error">{checkmarkMessage}</small>
                            </div>

                        <div className="row justify-content-center">
                            
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

export default FundsTransfer
