import React, { useState } from 'react'
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { addRemittance, completeRegistration, submitRemittanceInfo, tscSelector } from '../../../store/slices/TscSlice';
import axios from 'axios';
import Loading, { smallerLoader } from '../../Loader';
import { useHistory } from 'react-router-dom';

export default function Remittance(props) {
    const [remittanceMode, setRemittanceMode] = useState('')
    const [monthlyDeposit, setMonthlyDeposit] = useState('')
    const [monthlyShare, setMonthlyShare] = useState('')
    const [mpesaCode, setMpesaCode] = useState('')
    const [enrollChecked, setEnrollChecked] = useState(false)
    const [visaChecked, setVisaChecked] = useState(false)
    const [termsChecked, setTermsChecked] = useState(false)
    const [phoneNo, setPhoneNo] = useState('')
    const [getstk, setGetStk] = useState(false)
    const [getconfirmation, setGetconfirmation] = useState(false)
    const [validateCode, setValidateCode] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()
    const {isFetching} = useSelector(tscSelector)
   
    const {personalInfo, employmentInfo, nextOfKinInfo, remittanceinfo} = useSelector(tscSelector)
    

    
    const moveToLanding = () => {
      history.push('/user/landing')
    }


    const handleCompeleteRegistation = (e) => {
      e.preventDefault()
      const values1 = {
        remittance_id: remittanceMode,
        monthly_depo: monthlyDeposit,
        share_capital: monthlyShare,
        bank_code: mpesaCode,
        quick_cash: enrollChecked,
        visa_card: visaChecked,
        terms_condition: termsChecked,
      }
      const values2 = {
        account: {...employmentInfo, ...values1, id: 1},
        personal_info: [{...personalInfo, visa_card: visaChecked, quick_cash: enrollChecked}],
        next_of_kin: nextOfKinInfo
      }

     
      dispatch(addRemittance(values1))
      const data = {
        values: values2,
        moveToLanding
      }

      dispatch(completeRegistration(data))
    }

    const PayMpesa = async() => {
      setGetStk(true)
      try{
        
        const token = localStorage.getItem('token')
        const res = await axios.post('https://demo-mentorapp.herokuapp.com/api/send_mpesa_stkpush', {
          phone_number: phoneNo,
          account_id: 1
        },
        {
          headers: {
              'Authorization' : `Bearer ${token}`
            }
          }
     )
    setGetStk(false)
     console.log('res', res.data)
     setValidateCode(res.data.checkout_request_id)
     
    } catch (e) {
      setGetStk(false)
      console.log(e)
    }
    }

    const confirmPayment = async () => {
      setGetconfirmation(true)
      try{
        
        const token = localStorage.getItem('token')
        const res = await axios.get(`https://demo-mentorapp.herokuapp.com/api/confirmPayment/${validateCode}/v1`, 
        {
          headers: {
              'Authorization' : `Bearer ${token}`
            }
          }
     )
    setGetconfirmation(false)
     console.log('res', res.data)
     setValidateCode(res.data.checkout_request_id)
     setPaymentSuccess(res.data.is_success)
     
    } catch (e) {
      setGetconfirmation(false)
      console.log(e)
    }
    }


    return (
        <div className="card my-5 py-5">
                <div id="headingFour"></div>
{isFetching ?
<Loading />
:




                <div>
                    <form
          id="reg1"
          className="row justify-content-center align-items-center py-3 needs-validation"
          noValidate
          onSubmit={handleCompeleteRegistation}
         >
          <div className="col-10 col-md-10 justify-content-center align-items-center">
            
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row align-items-center">
                  <div class="col-12 py-3 col-md-3">
                    <label for="remittance" class="col-form-label py-3">
                      Remittance Mode
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="remittance" 
                    class="form-control py-3"
                    required
                    onChange={(e) => setRemittanceMode(e.target.value)}
                     />
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label for="deposit" class="col-form-label py-3">
                      Monthly Deposit Contribution
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="deposit" 
                    class="form-control py-3"
                    required
                    onChange={(e) => setMonthlyDeposit(e.target.value)}
                     />
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label for="capital" class="col-form-label py-3">
                      Monthly share Capital Distribution
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="capital" 
                    class="form-control py-3" 
                    required
                    onChange={(e) => setMonthlyShare(e.target.value)}
                    />
                  </div>

                  <p id="subheaderform">Registration Fee Payment</p>

                  <p>Please pay KES 2000 Registration fee. Minimum Monthly Deposit and Share Capital contribution to Paybill No: XXXXX Account No: REG Enter the MPESA Reference code in the input field below and click validate to proceed with the registration.</p>
                  
                  {
                    getstk ?
                  <smallerLoader />
                  :
                  <><div class="col-12 py-3 col-md-3">
                          <label for="mpesa" class="col-form-label">
                            MPESA Phone Number
                          </label>
                        </div><div class="col-12 col-md-9">
                            <div class="input-group py-3">
                              <input
                                type="text"
                                className="form-control py-3"
                                id="mpesa"
                                placeholder='25407...'
                                aria-describedby="newsletter"
                                aria-label="newsletter"
                                onChange={(e) => setPhoneNo(e.target.value)} />
                              <button
                                className="btn btn-outline-success"
                                type="button"
                                id="newsletter"
                                onClick={PayMpesa}
                              >
                                Pay
                              </button>
                            </div>
                          </div></>

                  }
                  {/* <div class="col-12 py-3 col-md-3">
                    <label for="mpesa" class="col-form-label">
                      MPESA Confirmation Code
                    </label>
                  </div> */}
                 
                  <div class="col-12 col-md-9">
                  {/* <div class="input-group py-3">
                                <input 
                                type="text" 
                                className="form-control py-3" 
                                id="mpesa" 
                                aria-describedby="newsletter" 
                                aria-label="newsletter" 
                                onChange={(e) => setMpesaCode(e.target.value)}
                                />
                                 <button className="btn btn-outline-success" type="button" id="newsletter">Validate</button>
                                </div>
                  </div> */}
{getconfirmation ? 
<smallerLoader />
:
                  <button 
                  className="btn btn-outline-success py-4" 
                  type="button" 
                  id="newsletter"
                  onClick={confirmPayment}
                  >
                  Confirm payment
                  </button>
}
                  </div>

                  
                  <div class="col-12 py-3 col-md-11">
                    <label for="password" class="col-form-label">
                    Would you like to get SACCO Link VISA card?
                    </label>
                  </div>
                  <div class="col-12 col-md-1">
                  <Switch 
                  checked={visaChecked} 
                  onChange={() => setVisaChecked(!visaChecked)} 
                  onColor='#f5811e' 
                  offColor='#c4c4c4'                     
                  />
                  </div>

                  <div class="col-12 py-3 col-md-11">
                    <label for="password" class="col-form-label">
                    Would you like to enrolled for Mentor Quick Cash mobile phone services?
                    </label>
                  </div>
                  <div class="col-12 col-md-1">
                  <Switch  
                  checked={enrollChecked} 
                  onChange={() => setEnrollChecked(!enrollChecked)} 
                  onColor='#f5811e'
                  offColor='#c4c4c4'                     
                  />
                  </div>


                  <div className="col-12 col-md-12">
                    <div className="row">
                      <div className="col-12">
                        <div class="form-check py-3">
                          <input
                            class="form-check-input mr-2"
                            type="checkbox"
                            value={termsChecked}
                            id="terms"
                            checked={termsChecked}
                            onChange={() => setTermsChecked(!termsChecked)}
                          />
                          <label
                            class="form-check-label text-black"
                            for="terms"
                          >
                           I agree to Mentor Sacco Membership Terms and Conditions. Click here to read the Terms and Conditions
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="row  py-5">
              <div className="col-12 col-md-12 ">
                <div className="row">
                 
                    {/* <row className="py-1"> */}
                    <button
                        className="btn btn-transparent-form rounded"
                        style={{width: '25%', marginRight: '50%'}}
                        // type="submit"
                        onClick={() => props.moveBack(2)}
                        
                      >
                        Back
                      </button>

                      <button
                        className="btn btn-outline-primary rounded"
                        style={{width: '25%'}}
                        type="submit"
                        disabled={!paymentSuccess}
                        // onClick={() => handleProceedto(2)}
                      >
                        Finish Member Application
                      </button>
                    {/* </row> */}
                 
                </div>
              </div>
            </div>
          </div>
        </form>
                </div>
}
            </div>
    )
}
