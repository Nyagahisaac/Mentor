import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmploymentInfo, submitEmploymentInfo, tscSelector } from '../../../store/slices/TscSlice'


export default function EmploymentDetails(props) {
    const [school, setSchool] = useState('')
    const [postal, setPostal] = useState('')
    const [county, setCounty] = useState('')
    const [department, setDepartment] = useState('')
    const [tscNumber, setTscNumber] = useState('')
    const [name, setName] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [ordinaryShareChecked, setOrdinaryShareChecked] = useState(false)
    const [mazaoShareChecked, setMazaoShareChecked] = useState(false)
    const [FOSAShareChecked, setFOSAShareChecked] = useState(false)

    const dispatch = useDispatch()
    // const {isFetching, isError, isSucces} = useSelector(tscSelector)

    function submitEmploymentDetails(e) {
      e.preventDefault()
      console.log('clicked')
        const values = {
          data: {
            station: school,
            postal_address: postal,
            county,
            department,
            tsc_pf_no: tscNumber,
            introducer_name: name,
            introducer_member_number: memberNo,
            introducer_phone_number: phoneNo,
            introducer_email: email,
            introducer_id: 1,
            share_type: ordinaryShareChecked ? 'Ordinary Shares' : mazaoShareChecked ? 'Mazao Shares' : FOSAShareChecked ? 'FOSA Shares' : '',
          },
          moveToNext: props.moveToNext,
          moveBack: props.moveBack
        }
      dispatch(addEmploymentInfo(values))
    }

    return (
        <div className="card my-5 py-5">
                <div id="headingTwo"></div>
                <div>
                <form
          id="reg1"
          className="row justify-content-center align-items-center py-3 needs-validation"
          onSubmit={submitEmploymentDetails}
        >

          <div className="col-10 col-md-10 justify-content-center align-items-center">           
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row align-items-center">
                  <div className="col-12 py-3 col-md-3">
                    <label for="school" className="col-form-label py-3">
                      School/Station
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="school" 
                    className="form-control py-3"
                    required
                    onChange={(e) => setSchool(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="postal" className="col-form-label py-3">
                      Postal Address
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="postal" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setPostal(e.target.value)}
                    />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="county" className="col-form-label py-3">
                      County
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="county" 
                    className="form-control py-3"
                    required
                    onChange={(e) => setCounty(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="dep" className="col-form-label py-3">
                      Department/Designation
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="dep" 
                    className="form-control py-3"
                    value={department}
                    required
                    onChange={(e) => setDepartment(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="tscno" className="col-form-label py-3">
                      TSC/PF Number
                    </label>
                  </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="tscno" 
                    className="form-control py-3"
                    required
                    onChange={(e) => setTscNumber(e.target.value)}
                    value={tscNumber}
                     />
                  </div>

                  <p id="subheaderform">Introducer's Information</p>

                  <div className="col-12 py-3 col-md-3">
                    <label for="name" className="col-form-label py-3">
                      Name
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="name" 
                    className="form-control py-3"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="memberno" className="col-form-label py-3">
                      Member Number
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="memberno" 
                    className="form-control py-3"
                    required
                    onChange={(e)=> setMemberNo(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="phoneno" className="col-form-label py-3">
                      Phone Number
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="phoneno" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setPhoneNo(e.target.value)}
                    />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="email" className="col-form-label py-3">
                      Email Address
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

                  <p id="subheaderform">Share Type</p>
                 
                  <div className="col-12 col-md-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-check py-3">
                          <input
                            className="form-check-input mr-2"
                            type="checkbox"
                            
                            checked={ordinaryShareChecked}
                            onChange={()=> setOrdinaryShareChecked(!ordinaryShareChecked)}
                            id="ordinary"
                          />
                          <label
                            className="form-check-label text-black"
                            for="ordinary"
                          >
                            Ordinary Shares
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-check py-3">
                          <input
                            className="form-check-input mr-2"
                            type="checkbox"
                            
                            id="mazao"
                            checked={mazaoShareChecked}
                            onChange={() => setMazaoShareChecked(!mazaoShareChecked)}
                          />
                          <label
                            className="form-check-label text-black"
                            for="mazao"
                          >
                            Mazao Shares
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-check py-3">
                          <input
                            className="form-check-input mr-2"
                            type="checkbox"
                            id="fosa"
                            
                            checked={FOSAShareChecked}
                            onChange={() => setFOSAShareChecked(!FOSAShareChecked)}
                          />
                          <label
                            className="form-check-label text-black"
                            for="fosa"
                          >
                            FOSA Shares
                          </label>
                        </div>
                      </div>
                    </div>
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
                        // type="submit"
                        onClick={() => props.moveBack(0)}
                        
                      >
                        back
                      </button>

                      <button
                        className="btn btn-outline-primary rounded"
                        style={{width: '25%'}}
                        type="submit"
                        // onClick={() => props.moveToNext(2)}
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
