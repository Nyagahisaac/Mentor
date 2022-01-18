import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAccountInfo, buisnessSelector, submitAccountInfo } from '../../../store/slices/BuisnessSlice'


export default function AccountOperation(props) {
  const [mandate, setMandate] = useState('')
  const [primaryPhone, setPrimaryPhone] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  //const {isFetching} = useSelector(buisnessSelector)

  const HandleSubmit = () => {
    const values = {
      mandate,
      primary_phone: primaryPhone,
      email
    }
    dispatch(addAccountInfo(values))
  }


    return (
        <div className="card my-5 py-5">
                <div id="headingThree"></div>
                <div >
                     <form
          id="reg1"
          className="row justify-content-center align-items-center py-3"
         >
          <div className="col-10 col-md-8 justify-content-center align-items-center">
            
            <div className="row">
              <div className="col-12 col-md-10">
                <div className="row align-items-center">
                  <div className="col-12 py-3 col-md-3">
                    <label for="mandate" className="col-form-label">
                      Account Operation mandate
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="mandate" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setMandate(e.target.value)}
                    />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="phone" className="col-form-label py-3">
                      Primary phone to be used
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="phone" 
                    className="form-control py-3"
                    required
                    onChange={(e) => setPrimaryPhone(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="email" className="col-form-label py-3">
                     Email address to be used
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="email" 
                    id="email" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  
                
                </div>
              </div>
            </div>
            <div className="row  py-5 ">
              <div className="col-12 col-md-12 ">
                <div className="row">
                 
                    {/* <row className="py-1"> */}
                    <button
                        className="btn btn-transparent-form rounded"
                        style={{width: '25%', marginRight: '50%'}}
                        type="submit"
                       
                        onClick={(e) => {
                        e.preventDefault()
                        props.moveBack(1)}
                        }
                        
                      >
                        back
                      </button>

                      <button
                        className="btn btn-outline-primary rounded"
                        style={{width: '25%'}}
                        type="submit"
                        
                        onClick={(e) => {
                        e.preventDefault()
                        props.moveToNext(3)
                        }}
                      >
                        Proceed
                      </button>
                    {/* </row> */}
                 
                </div>
              </div>
            </div>
          </div>
        </form>
                </div>
            </div>
    )
}
