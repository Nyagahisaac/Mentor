import React, { useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { authSelector } from '../../store/slices/AuthSlice'
import { useDispatch } from 'react-redux'
import { submitLoanForm } from '../../store/slices/LoanSlice'

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
export default function LoanForm() {
    const {userFromState} = useSelector(authSelector)

    const [fullnames, setFullnames] = useState(userFromState ? `${userFromState.first_name} ${userFromState.last_name}` : '')
    const [phoneNo, setPhoneNo] = useState('')
    const [accountNo, setAccountNo] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [idNo, setIDNo] = useState('')
    const [postalAddress, setPostalAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [physicalAddress, setPhysicalAddress] = useState('')
    const [occupation, setOccupation] = useState('')
    const [employer, setEmployer] = useState('')
    const [workstation, setWorkstation] = useState('')
    const [loanAmount, setLoanAmount] = useState('')
    const [repaymentPeriod, setRepaymentPeriod] = useState('')
    const [loanPurpose, setLoanPurpose] = useState('')
    const [loanSecurity, setLoanSecurity] = useState('')
    const [securityDocument, setSecurityDocument] = useState('')
    const [guarantorName, setGuarantorName] = useState('')
    const [guarantorPhoneNo, setGuarantorPhoneNo] = useState('')
    const [guarantorIDNO, setGuarantorIDNO] = useState('')
    const [guarantorPostalAddress, setGuarantorPostalAddress] = useState('')
    const [guarantorOccupation, setGuarantorOccupation] = useState('')
    const [guarantorMemberNo, setGuarantorMemberNo] = useState('')
    const [guarantorArray, setGuarantorArray] = useState([]) 
    const [checkmark, setCheckmark] = useState('')
    const [checkmark2, setCheckmark2] = useState('')
   
    const location = useLocation()
    const dispatch = useDispatch()
    const {loanType} = location.state

    

    function getBase64(file) {
        console.log('file', file)
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          if(file){
          reader.readAsDataURL(file);
          }
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }

      const clearGState = () => {
            setGuarantorName('')
            setGuarantorIDNO('')
            setGuarantorMemberNo('')
            setGuarantorOccupation('')
            setGuarantorPhoneNo('')
            setGuarantorPostalAddress('')
      }

      const AddGuarantor = () => {
          const newGuarantor = {
            guarantor_name: guarantorName,
            guarantor_phone_number: guarantorPhoneNo,
            guarantor_postal_address: guarantorPostalAddress,
            guarantor_occupation: guarantorOccupation,
            guarantor_member_number: guarantorMemberNo,
            guarantor_id_number: guarantorIDNO
          }
          setGuarantorArray([...guarantorArray, newGuarantor])
          clearGState()
      }

      const RemoveGuarantor = (val) => {
          const newArray = guarantorArray.filter(newVal => {
              return newVal !== val
          })

          setGuarantorArray(newArray)

      }

    const submitHandler = (e) => {
     e.preventDefault()
     const values = {
         full_names: fullnames,
         member_number: memberNo,
         phone_number: phoneNo,
         account_number: accountNo,
         id_number: idNo,
         postal_address: postalAddress,
         postal_code: postalCode,
         physical_address: physicalAddress,
         occupation,
         employer,
         workstation,
         loan_amount: loanAmount,
         repayment_period: repaymentPeriod,
         loan_purpose: loanPurpose,
         loan_security: loanSecurity,
         securityDocument,
         guarantorArray
     }
     dispatch(submitLoanForm(values))
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
                <a href="/borrow" className="breadcrumb-item-override">Loan</a></li>
                
                <li className="breadcrumb-item active" aria-current="page">
                <span className="breadcrumb-item-override-active">Loan Application</span>
                </li>
            </ol>
         </nav>
        <div className="line"></div>


        <div className="container py-5 mb-5">
        <div className="row justify-content-center py-3">
            <div className="col-10 col-md-9">
                <h2>Loan Application and Agreement Form</h2>
                <p>Please enter the required details as outlined below to apply for this service</p>
                <p>You are applying for <span style={{color: '#067C4B', backgroundColor: 'rgba(6, 124, 75, 0.2)', padding:'10px', fontWeight: '550'}}>{loanType}</span> loan</p>
                <Form
                className="needs-validation"
                onSubmit={submitHandler}>
                        
                        <p className='py-3'><strong>Personal information</strong></p>
                        <Form.Group controlId = 'fullnames' className=" pb-1">
                            <Form.Label className="px-3">Full Name *</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your full name'  
                                value = {fullnames} 
                                required
                                onChange = {(e) => setFullnames(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'accountno' className="pb-1">
                            <Form.Label className="px-3">Account Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your account Number'  
                                value = {accountNo} 
                                required
                                onChange = {(e) => setAccountNo(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'memberno' className="pb-1">
                            <Form.Label className="px-3">Member Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your member no'  
                                value = {memberNo} 
                                required
                                onChange = {(e) => setMemberNo(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'id' className="pb-1">
                            <Form.Label className="px-3">ID Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your ID no'  
                                value = {idNo} 
                                required
                                onChange = {(e) => setIDNo(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'phoneno' className="pb-1">
                            <Form.Label className="px-3">Phone Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your phone no'  
                                value = {phoneNo}
                                required 
                                onChange = {(e) => setPhoneNo(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <div className="row">
                            <Form.Group controlId = 'postaladdress' className="pb-1 col-6">
                                <Form.Label className="px-3">Postal Address*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your postal address'  
                                    value = {postalAddress} 
                                    required
                                    onChange = {(e) => setPostalAddress(e.target.value)}
                                ></Form.Control>
                               
                            </Form.Group>

                            <Form.Group controlId = 'postalcode' className="pb-1 col-6">
                                <Form.Label className="px-3">Postal Code*</Form.Label>
                                <Form.Control 
                                    type = 'text' 
                                    placeholder = 'Enter your area postal code'  
                                    value = {postalCode} 
                                    required
                                    onChange = {(e) => setPostalCode(e.target.value)}
                                ></Form.Control>
                                
                            </Form.Group>
                        </div>

                        <Form.Group controlId = 'physicaladdress' className="pb-1">
                            <Form.Label className="px-3">Physical Address*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your passport/ID Number'  
                                value = {physicalAddress} 
                                required
                                onChange = {(e) => setPhysicalAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId = 'occupation' className="pb-1">
                            <Form.Label className="px-3">Occupation*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your phone no'  
                                value = {occupation} 
                                required
                                onChange = {(e) => setOccupation(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'employer' className="pb-1">
                            <Form.Label className="px-3">Employer*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your occupation'  
                                value = {employer}
                                required 
                                onChange = {(e) => setEmployer(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'workstation' className="pb-1">
                            <Form.Label className="px-3">Workstation*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter your workstation'  
                                value = {workstation} 
                                required
                                onChange = {(e) => setWorkstation(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <p className='py-3'><strong>Loan Application and Repayment</strong></p>
                        <Form.Group controlId = 'loanamount' className="pb-1">
                            <Form.Label className="px-3">Loan Amount*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter the amount for which you wish to apply'  
                                value = {loanAmount} 
                                required
                                onChange = {(e) => setLoanAmount(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'repaymentperiod' className="pb-1">
                            <Form.Label className="px-3">Repayment period*</Form.Label>
                            <select value = {repaymentPeriod} onChange = {(e) => setRepaymentPeriod(e.target.value)} id="inputState"  style={{color:'#263238', fontWeight:'bold'}} className="form-select">
                                {applicationOptions.map(branch=>(
                                    <option key={branch.id}>{branch.loan_period}</option>
                                ))}
                            </select>
                            
                        </Form.Group>

                        <Form.Group controlId = 'loanpurpose' className="pb-1">
                            <Form.Label className="px-3">Purpose of the Loan*</Form.Label>
                            <Form.Control 
                                as="textarea" rows={3}
                                placeholder = 'Write a description of the purpose of your loan'  
                                value = {loanPurpose} 
                                required
                                onChange = {(e) => setLoanPurpose(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'loansecurity' className="pb-1">
                            <Form.Label className="px-3">Security for the loan*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = 'Enter a security for the loan'  
                                value = {loanSecurity}
                                required 
                                onChange = {(e) => setLoanSecurity(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>
                        <Form.Group controlId = 'loansecurity' className="pb-1">
                            <Form.Label className="px-3">Security Document Upload*</Form.Label>
                            <Form.Control                         
                            type="file" 
                            onChange={(e) => {
                              const {files} = e.target
                              getBase64(files[0]).then( data => {
                               setSecurityDocument(data) 
                              }).catch (e => {
                               console.log('error', e)
                              })
                            }}
                            />
                            
                            
                        </Form.Group>

                        <p className='py-3 mt-4'><strong>Guarantor Information</strong></p>

                        { guarantorArray.length ?
                        <>
                        <p className='green'>Added Guarantors</p>
             <table className='table table-bordered my-4' style={{width: '100%', margin: 'auto'}}>
                <thead>
                    <th scope="col"> Full Names</th>
                    <th scope='col'>Phone Number</th>
                    <th scope='col'>ID Number</th>
                    <th scope='col'>Member Number</th>
                    <th scope= 'col'></th>
                </thead>
                {guarantorArray.map((val)=> {
                    // console.log('values', val)
                    return(
                        
                   <tbody>
                <tr>
                    <td>{val.guarantor_name}</td>
                    <td>{val.guarantor_phone_number}</td>
                    <td>{val.guarantor_id_number}</td>
                    <td>{val.guarantor_member_number}</td>
                    <td>
                        <button 
                        className='btn'
                        onClick={() => RemoveGuarantor(val)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
                </tbody>
            )
                })}
    </table>
    </>
        
        :null
}

                        <Form.Group controlId = 'occupation' className="pb-1">
                            <Form.Label className="px-3">Full Names*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = "Enter your guarantor's full name" 
                                value = {guarantorName}
                                required 
                                onChange = {(e) => setGuarantorName(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'guarantorphoneno' className="pb-1">
                            <Form.Label className="px-3">Phone Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = "Enter your guarantor's phone Number" 
                                value = {guarantorPhoneNo} 
                                required
                                onChange = {(e) => setGuarantorPhoneNo(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'guarantorIDNo' className="pb-1">
                            <Form.Label className="px-3">ID Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = "Enter your guarantor's ID number" 
                                value = {guarantorIDNO}
                                required 
                                onChange = {(e) => setGuarantorIDNO(e.target.value)}
                            ></Form.Control>
                            
                        </Form.Group>

                        <Form.Group controlId = 'guarantormemberno' className="pb-1">
                            <Form.Label className="px-3">Member Number*</Form.Label>
                            <Form.Control 
                                type = 'text' 
                                placeholder = "Enter your guarantor's member number" 
                                value = {guarantorMemberNo} 
                                required
                                onChange = {(e) => setGuarantorMemberNo(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <div className='row justify-content-center align-items-center py-3' style={{width: '20%', margin: 'auto'}}>
                        <button 
                        className='btn btn-transparent-small-green'
                        onClick={AddGuarantor}
                        disabled={guarantorName === '' || guarantorMemberNo === '' || guarantorIDNO === '' || guarantorPhoneNo === '' ? true : false}
                        >
                        <span className='px-2'>+</span> 
                        Add Guarantor
                        </button>
                    </div>
                    
                        
                    <div className="row justify-content-center py-4 mt-5 ">
                        <div className="col-11 form-check pb-5">
                            <input value = {checkmark} onChange = {(e) => setCheckmark(e.target.value)} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label 
                            className="form-check-label text-black" 
                            for="flexCheckDefault"
                            required
                            >
                                I hereby declare that the foregoing particulars are true to the best of my knowledge and belief and Agree to
                                abide by the By-Laws of the Society, the loan policy and any variations by the Credit Committee from time
                                to time. I hereby authorize the necessary deductions including the applicable monthly interest, to be made from
                                my Salary /pension as repayment for this loan. I also declare that in case the employer delays the deduction,
                                I will be paying personally to the Sacco every month Until Action is taken by the employer.
                            </label>
                            
                        </div>

                        <div className="col-11 form-check pb-5">
                            <input value ={checkmark2} onChange = {(e) => setCheckmark2(e.target.value)} className="form-check-input" type="checkbox" id="flexCheckDefault" />
                            <label 
                            className="form-check-label text-black" 
                            for="flexCheckDefault"
                            required
                            >
                                I hereby confirm that I have authorized the SACCO to share my credit information/access my credit profile for credit
                                appraisal with licensed Credit Reference Bureau (CRBs). I further release the CRB and the SACCO and its officers,
                                employees and agents from all claims, actions or proceedings of whatsoever nature and howsoever arising, suffered or
                                incurred in connection with this sharing and access for the purpose afore stated.
                            </label>
                        </div>
                        {/* <Link to="/submit/success"> */}
                            <Button className="col-12 btn btn-outline-success py-3 rounded" type='submit' variant='primary'>Submit Application</Button>
                        {/* </Link> */}
                    </div>
                </Form>
            </div>
        </div>
    </div>
    </div>
    )
}
