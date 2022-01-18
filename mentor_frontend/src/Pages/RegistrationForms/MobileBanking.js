import React, { useEffect, useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'


function MobileBanking() {
    const [fullnames, setFullnames] = useState('')
    const [passport, setPassport] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [accountNo, setAccountNo] = useState('')

    const [Namemessage, setNameMessage] = useState('')
    const [Passportmessage, setPassportMessage] = useState('')
    const [MemberNomessage, setMemberNoMessage] = useState('')
    const [PhoneNomessage, setPhoneNoMessage] = useState('')
    const [AccountNomessage, setAccountNoMessage] = useState('')

    const [checkmark, setCheckmarkMessage] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [fullnames, passport, memberNo, phoneNo, accountNo])

    const submitHandler = (e) => {
        // console.log(firstname)
        e.preventDefault()
        if ( !fullnames ){
            setNameMessage('**Full names fields are required') 
            console.log(fullnames)
        }
        if ( !passport ){
            setPassportMessage('**Passport/ID number fields are required') 
            console.log(passport)
        }
        if ( !memberNo ){
            setMemberNoMessage('**Member number fields are required') 
            console.log(memberNo)
        }
        if ( !phoneNo ){
            setPhoneNoMessage('**Phone number fields are required') 
            console.log(phoneNo)
        }
        if ( !accountNo ){
            setAccountNoMessage('**Account number fields are required') 
            console.log(accountNo)
        }
        if ( !checkmark ){
            setCheckmarkMessage('**Consent is required to proceed') 
            console.log(checkmark)
        }
        else {
            // dispatch(mentorregister(firstname))
            // history.push('/profile/')
            console.log(fullnames, passport, memberNo, phoneNo, accountNo)
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
            <div className="row justify-content-center py-3">
                <div className="col-10 col-md-9">
                <h2 id="subheader">Mobile Banking Registration Form</h2>
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
                                <small className="form-label px-3 form-error">{Namemessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'passport' className="pb-1">
                                <Form.Label className="px-3">ID/Passport number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your passport/ID number'  
                                    value = {passport} 
                                    onChange = {(e) => setPassport(e.target.value)}
                                ></Form.Control>
                                <small className="form-label px-3 form-error">{Passportmessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'member number' className="pb-1">
                                <Form.Label className="px-3">Member number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your member number'  
                                    value = {memberNo} 
                                    onChange = {(e) => setMemberNo(e.target.value)}
                                ></Form.Control>
                                <small className="form-label px-3 form-error">{MemberNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'phoneno' className="pb-1">
                                <Form.Label className="px-3">Mobile phone number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your phone no'  
                                    value = {phoneNo} 
                                    onChange = {(e) => setPhoneNo(e.target.value)}
                                ></Form.Control>
                                <small className="form-label px-3 form-error">{PhoneNomessage}</small>
                            </Form.Group>

                            <Form.Group controlId = 'accountno' className="pb-1">
                                <Form.Label className="px-3">Account number*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your account number'  
                                    value = {accountNo} 
                                    onChange = {(e) => setAccountNo(e.target.value)}
                                ></Form.Control>
                                <small className="form-label px-3 form-error">{AccountNomessage}</small>
                            </Form.Group>
                            
                           <p className='py-3'>I would like to subscribe for the following services; kindly tick the applicable</p>
                           <div className='row col-12 col-md-12 justify-content-center align-items-center py-3'>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Cash Withdrawal/Deposit
                                </label>
                               </div>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Mobile Loan
                                </label>
                               </div>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Utility Payment
                                </label>
                               </div>
                           </div>

                           <div className='row col-12 col-md-12 justify-content-center align-items-center py-3'>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Balance Enquiry
                                </label>
                               </div>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Mini-statement
                                </label>
                               </div>
                               <div className='col-12 col-md-4'>
                               <input
                                // onChange = {(e) => setCheckmarkMessage(e.target.value)} 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="flexCheckDefault" 
                                />
                                <label 
                                className="form-check-label text-black px-3" for="flexCheckDefault">
                                    Other Services
                                </label>
                               </div>
                           </div>
                           
                           <p className='py-3'>Want to make ammendments to your existing Mobile banking account?</p>
                           <p 
                           className='green' 
                           style={{cursor: 'pointer'}}>
                           Make ammendments
                           </p>
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-12 form-check py-5">
                                <input onChange = {(e) => setCheckmarkMessage(e.target.value)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label 
                                className="form-check-label text-black" for="flexCheckDefault">
                                    I hereby agree that as long as the Sacco acts in compliance with this Authorization, the Sacco
                                    shall be irrevocably and unconditionally indemnified and held harmless in full by me against
                                    any costs, claims, losses or liabilities of any nature (direct or indirect or consequential)
                                    resulting from any act or omission in connection with the subject of this Authorization,
                                    including but not limited to any act or omission (or any delay) on the Sacco’s part in
                                    responding to instructions received by Sacco.
                                </label>
                                <small className="form-label px-3 form-error">{checkmark}</small>
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

export default MobileBanking
