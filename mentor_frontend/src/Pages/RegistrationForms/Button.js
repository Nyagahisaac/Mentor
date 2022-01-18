import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
// import {
//     GuarantorPhoneNoMessage,
//     GuarantorNameMessage,
//     GuarantorOccupationMessage,
//     GuarantorPostalAddressMessage,
//     GuarantorIDNOMessage}
//  from "../RegistrationForms/LoanForm";



export const Button = ({ props }) => {


    const [GuarantorNameMessage, setGuarantorNameMessage] = useState('')
    const [GuarantorPhoneNoMessage, setGuarantorPhoneNoMessage] = useState('')
    const [GuarantorIDNOMessage, setGuarantorIDNOMessage] = useState('')
    const [GuarantorPostalAddressMessage, setGuarantorPostalAddressMessage] = useState('')
    const [GuarantorOccupationMessage, setGuarantorOccupationMessage] = useState('')


    const [GuarantorName, setGuarantorName] = useState('')
    const [GuarantorPhoneNo, setGuarantorPhoneNo] = useState('')
    const [GuarantorIDNO, setGuarantorIDNO] = useState('')
    const [GuarantorPostalAddress, setGuarantorPostalAddress] = useState('')
    const [GuarantorOccupation, setGuarantorOccupation] = useState('')



    return (
        <div>
            <p className='py-3 mt-4'><strong>Guarantor Information</strong></p>
            <div id='form'>
                <Form.Group controlId='occupation' className="pb-1">
                    <Form.Label className="px-3">Full Names*</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter your guarantor's full name"
                        value={GuarantorName}
                        onChange={(e) => setGuarantorName(e.target.value)}
                    ></Form.Control>
                    <small class="form-label px-3 form-error">{GuarantorNameMessage}</small>
                </Form.Group>

                <Form.Group controlId='guarantorphoneno' className="pb-1">
                    <Form.Label className="px-3">Phone number*</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter your guarantor's phone number"
                        value={GuarantorPhoneNo}
                        onChange={(e) => setGuarantorPhoneNo(e.target.value)}
                    ></Form.Control>
                    <small class="form-label px-3 form-error">{GuarantorPhoneNoMessage}</small>
                </Form.Group>

                <Form.Group controlId='guarantorIDNo' className="pb-1">
                    <Form.Label className="px-3">ID number*</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter your guarantor's ID number"
                        value={GuarantorIDNO}
                        onChange={(e) => setGuarantorIDNO(e.target.value)}
                    ></Form.Control>
                    <small class="form-label px-3 form-error">{GuarantorIDNOMessage}</small>
                </Form.Group>

                <Form.Group controlId='guarantorpostaladdress' className="pb-1">
                    <Form.Label className="px-3">Postal Address*</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter your guarantor's postal address"
                        value={GuarantorPostalAddress}
                        onChange={(e) => setGuarantorPostalAddress(e.target.value)}
                    ></Form.Control>
                    <small class="form-label px-3 form-error">{GuarantorPostalAddressMessage}</small>
                </Form.Group>

                <Form.Group controlId='GuarantorOccupation' className="pb-1">
                    <Form.Label className="px-3">Occupation*</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="Enter your guarantor's occupation"
                        value={GuarantorOccupation}
                        onChange={(e) => setGuarantorOccupation(e.target.value)}
                    ></Form.Control>
                    <small class="form-label px-3 form-error">{GuarantorOccupationMessage}</small>
                </Form.Group>
            </div>
            <div>
                {/* <div className='pt-3'
                    onClick={Button}
                    className="col-3 btn btn-outline-success py-3 rounded pl-3 "
                    type='button' variant='primary' >
                    + Add Guarantor
                </div> */}
            </div>
        </div>
    )
}

// export default Button
