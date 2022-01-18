import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'


const applicationOptions =[
    {
        'id': '0',
        'loan_period':'Select orders'
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

function StandingOrderVariation() {
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
    const [selectedorders, setSelectedOrders] = useState([])


    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)
    const [checked7, setChecked7] = useState(false)
    const [checked8, setChecked8] = useState(false)
    const [checked9, setChecked9] = useState(false)
    const [checked10, setChecked10] = useState(false)
    const [checked11, setChecked11] = useState(false)
    const [checked12, setChecked12] = useState(false)
    const [checked13, setChecked13] = useState(false)
    const [checked14, setChecked14] = useState(false)
    const [checked15, setChecked15] = useState(false)
    const [checked16, setChecked16] = useState(false)

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
            <span className="breadcrumb-item-override-active">Standing Order Application</span>
            </li>
        </ol>
        </nav>
        <div className="line"></div>

        <div className="container py-5">
            <div className="row justify-content-center py-4">
                <div className="col-10 col-md-9">
                    <h2 id="subheader">Standing Order Variation</h2>
                    <p>Please enter the required details as outlined below to apply for this service</p>
                    <Form onSubmit={submitHandler}>
                        <strong><p>Personal Information</p></strong>
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
                                <Form.Label className="px-3">Member Number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your member number'  
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

                             <strong><p>Standing Order(s) to increase, reduce, or stop my</p></strong>

                            <Form.Group controlId = 'repaymentperiod' className="pb-1">
                                {/* <select value = {RepaymentPeriod} onChange = {(e) => setRepaymentPeriod(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    {applicationOptions.map(branch=>(
                                        <option key={branch.id}>{branch.loan_period}</option>
                                    ))}
                                </select> */}
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Select'  
                                    disabled= 'true'
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{RepaymentPeriodMessage}</small>
                            </Form.Group>

                            {
                                selectedorders.length ? 
                                selectedorders.map((val) => {
                                   return(
                                       <div className='py-3'>
                                       <Form.Label className="px-3">{val}</Form.Label>
                                       <div className='row justify-content-between align-items-center'>
                                        <div className='col-12 col-md-4'>
                                        <Form.Control 
                                    type = 'text' 
                                    placeholder = 'From'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                        <Form.Control 
                                    type = 'text' 
                                    placeholder = 'To'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                        </div>
                                        <div className='col-12 col-md-4'>
                                        <input type="checkbox"                       
                        
                                       />
                                 <label className="px-3">Stop Order</label>   
                                        </div>
                                       </div>
                                       </div>
                                   )
                                })
                                
                                : null
                            }

                            <Form.Group controlId = 'employer' className="py-3">
                                <Form.Label className="px-1">With Effect from*</Form.Label>
                                <Form.Control 
                                    type = 'date' 
                                    placeholder = 'Pick a date'  
                                    value = {Employer} 
                                    onChange = {(e) => setEmployer(e.target.value)}
                                ></Form.Control>
                                <small class="form-label px-3 form-error">{EmployerMessage}</small>
                            </Form.Group>

                            
                        <div className="row justify-content-center py-3">
                            <Link to="/submit/success">
                                <Button className="col-12 btn btn-outline-success rounded" type='submit' variant='primary'>Submit Application</Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>


            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Select Orders</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="container-fluid">
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                    
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked1}
                        onChange={() => {
                            setChecked1(!checked1)
                            setSelectedOrders([...selectedorders, "Ordinary Shares"])
                        }}
                         />
                        <label className="px-3">Ordinary shares</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked2}
                        onChange={() => {
                            setChecked2(!checked2)
                            setSelectedOrders([...selectedorders, "Fosa Shares"])
                        }}
                         />
                        <label className="px-3">Fosa shares</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked3}
                        onChange={() => {
                            setChecked3(!checked3)
                            setSelectedOrders([...selectedorders, "Mazao Shares"])
                        }}

                        />
                        <label className="px-3">Mazao shares</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked4}
                        onChange={() => {
                            setChecked4(!checked4)
                            setSelectedOrders([...selectedorders, "Children Account"])
                        }}
                         />
                        <label className="px-3">Children Account</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked5}
                        onChange={() => {
                            setChecked5(!checked5)
                            setSelectedOrders([...selectedorders, "Holiday Account"])
                        }} 

                        />
                        <label className="px-3">Holiday Account</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked6}
                        onChange={() => {
                            setChecked6(!checked6)
                            setSelectedOrders([...selectedorders, "Normal/Jijenge/Imara"])
                        }}
                        />
                        <label className="px-3">Normal/Jijenge/Imara</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked7}
                        onChange={() => {
                            setChecked7(!checked7)
                            setSelectedOrders([...selectedorders, "School Fees Loan"])
                        }}
                         />
                        <label className="px-3">School Fees Loan</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked8}
                        onChange={() => {
                            setChecked8(!checked8)
                            setSelectedOrders([...selectedorders, "Boresha Loan"])
                        }}   
                        />
                        <label className="px-3">Boresha Loan</label>               
                    </div>

                    </div>

                    <div className='col-12 col-md-6'>

                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked9}
                        onChange={() => {
                            setChecked9(!checked9)
                            setSelectedOrders([...selectedorders, "Instant Loan"])
                        }}
                        />
                        <label className="px-3">Instant Loan</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked10}
                        onChange={() => {
                            setChecked10(!checked10)
                            setSelectedOrders([...selectedorders, "Special Emergency"])
                        }} 

                        />
                        <label className="px-3">Special Emergency</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked11}
                        onChange={() => {
                            setChecked11(!checked11)
                            setSelectedOrders([...selectedorders, "Fosa Pride Loan"])
                        }}
                         />
                        <label className="px-3">Fosa Pride Loan</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked12}
                        onChange={() => {
                            setChecked12(!checked12)
                            setSelectedOrders([...selectedorders, "Jambo Fosa Loan"])
                        }}
                        />
                        <label className="px-3">Jambo Fosa Loan</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked13}
                        onChange={() => {
                            setChecked13(!checked13)
                            setSelectedOrders([...selectedorders, "Fosa Imara Loan"])
                        }}
                        />
                        <label className="px-3">Fosa Imara Loan</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox"
                        checked={checked14}
                        onChange={() => {
                            setChecked14(!checked14)
                            setSelectedOrders([...selectedorders, "Salary Advance"])
                        }} />
                        <label className="px-3">Salary Advance</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked15}
                        onChange={() => {
                            setChecked15(!checked15)
                            setSelectedOrders([...selectedorders, "Chai/Dairy/Buisness"])
                        }}
                        />
                        <label className="px-3">Chai/Dairy/Buisness</label>               
                    </div>
                    <div className='py-2'>
                        <input 
                        type="checkbox" 
                        checked={checked16}
                        onChange={() => {
                            setChecked16(!checked16)
                            setSelectedOrders([...selectedorders, "Chai/Dairy/Buisness"])
                        }}
                        />
                        <label className="px-3">Others</label>               
                    </div>

                    </div>


                  </div>
                </div>
                </div>
                
                </div>
            </div>
            </div>


        </div>
        </div>
    )
}

export default StandingOrderVariation
