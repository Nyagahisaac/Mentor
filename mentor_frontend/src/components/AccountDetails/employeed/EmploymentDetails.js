import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { useDispatch, useSelector } from 'react-redux'
import { addEmploymentInfo, employedSelector, submitEmploymentInfo } from '../../../store/slices/EmployedSlice'

export default function EmploymentDetails(props) {
    const [employer, setEmployer] = useState('')
    const [address, setAddress] = useState('')
    const [postal, setPostal] = useState('')
    const [county, setCounty] = useState('')
    const [role, setRole] = useState('')
    const [name, setName] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    // const {isFetching} = useSelector(employedSelector)

    const SubmitEmploymentInfo = (e) => {
      e.preventDefault()
        const values = {
            data: {
            employer,
            location: address,
            postal_address: postal,
            county,
            role,
            introducer_name: name,
            introducer_member_number: memberNo,
            introducer_phone_number: phoneNo,
            introducer_email: email
            },
            moveToNext: props.moveToNext
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
            noValidate
            onSubmit={SubmitEmploymentInfo}
            >
  <div className="col-10 col-md-10 justify-content-center align-items-center">           
    <div className="row">
      <div className="col-12 col-md-12">
        <div className="row align-items-center">
          <div class="col-12 py-3 col-md-3">
            <label for="employer" class="col-form-label py-3">
              Employer/Company
            </label>
          </div>
          <div class="col-12 col-md-9">
            <input 
            type="text" 
            id="employer" 
            class="form-control py-3" 
            required
            onChange={(e) => setEmployer(e.target.value)}
            
            />
          </div>

          <div class="col-12 py-3 col-md-3">
            <label for="add" class="col-form-label py-3">
              Physical Address
            </label>
          </div>
          <div class="col-12 col-md-9">
            <input 
            type="text" 
            id="add" 
            class="form-control py-3" 
            required
            onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div class="col-12 py-3 col-md-3">
            <label for="postal" class="col-form-label">
              Postal Address
            </label>
          </div>
            <div class="col-12 col-md-9">
            <input type="text" id="postal" 
            class="form-control py-3" 
            required
            onChange={(e) => setPostal(e.target.value)}
            />
          </div>

          <div class="col-12 py-3 col-md-3">
            <label for="county" class="col-form-label py-3">
              County
            </label>
          </div>
          <div class="col-12 col-md-9">
            <input 
            type="text" 
            id="county" 
            class="form-control py-3"
            required
            onChange={(e) => setCounty(e.target.value)}
            />
          </div>

          <div class="col-12 py-3 col-md-3">
            <label for="role" class="col-form-label py-3">
              Designation/Role
            </label>
          </div>
          <div class="col-12 col-md-9">
            <input 
            type="text" 
            id="role" 
            class="form-control py-3"
            required
            onChange={(e) => setRole(e.target.value)}
             />
          </div>

          

          <p id="subheaderform">Introducer's Information</p>

          <div className="col-12 py-3 col-md-3">
            <label 
            for="name" 
            className="col-form-label py-3"
            >
            Name
            </label>
            </div>
            <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="name" 
            className="form-control py-3" 
            required
            onChange={(e) => setName(e.target.value)}   
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="member" className="col-form-label py-3">
            Member Number
            </label>
            </div>
            <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="member" 
            className="form-control py-3" 
            required
            onChange={(e) => setMemberNo(e.target.value)}  
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="phoneNo" className="col-form-label py-3">
            Phone Number
            </label>
            </div>
            <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="phoneNo" 
            className="form-control py-3" 
            required
            onChange={(e) => setPhoneNo(e.target.value)}
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="email" className="col-form-label">
            Email Address
            </label>
            </div>
            <div className="col-12 col-md-9 py-3">
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
                    props.moveBack(0)
                }}
                
              >
                back
              </button>

              <button
                className="btn btn-outline-primary rounded"
                style={{width: '25%'}}
                type="submit"
                // onClick={(e) => {
                //     e.preventDefault()
                //     props.moveToNext(2)
                //     }}
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
