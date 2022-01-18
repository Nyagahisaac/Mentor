import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserInfo, groupSelector, submitUserInfo } from '../../../store/slices/GroupSlice'

export default function PersonalInfo(props) {
    const [userInfoArray, setUserInfoArray] = useState([])
    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [postal, setPostal] = useState('')
    const [Dob, setDob] = useState('')
    const [kraPin, setKraPin] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    // const {isFetching} = useSelector(groupSelector)


    const clearState = () => {
        setfName('')
        setlName('')
        setPhoneNo('')
        setPostal('')
        setDob('')
        setKraPin('')
        setEmail('')
    }
    const addMember = (e) => {
        e.preventDefault()
        const newMember = {
            fName,
            lName,
            Dob,
            kraPin,
            phoneNo,
            email
        }
        setUserInfoArray([...userInfoArray, newMember])
        clearState()
    }

    const SubmitPersonalInfo = () => {
      const values = {
        first_name: fName,
        last_name: lName,
        date_of_birth: Dob,
        kra_pin: kraPin,
        phone_number: phoneNo,
        email,
        postal_code: postal
      }
      dispatch(addUserInfo(values))
    }

    return (
        <div className="card my-5 py-5">
        <div id="headingOne"></div>
        <div>

        { userInfoArray.length ?
             <table className='table table-bordered' style={{width: '90%', margin: 'auto'}}>
                <thead>
                    <th scope="col"> First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Date of Birth</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Phone Number</th>
                    <th scope='col'>KRA Pin</th>
                </thead>
                {userInfoArray.map((val)=> {
                    return(
                   <tbody>
                <tr>
                    <td>{val.fName}</td>
                    <td>{val.lName}</td>                   
                    <td>{val.DOb}</td>
                    <td>{val.email}</td>
                    <td>{val.phoneNo}</td>
                    <td>{val.kraPin}</td>
                </tr>
                </tbody>
            )
                })}
    </table>
        
        :null
}

            <form
                id="reg1"
                className="row justify-content-center align-items-center py-3 needs-validation"
                noValidate
                // onSubmit={SubmitPersonalInfo}
      >
            <div className="col-10 col-md-10 justify-content-center align-items-center">           
                <div className="row">
                <div className="col-12 col-md-12">
                    <div className="row align-items-center">
                    <div className="col-12 py-3 col-md-3">
                        <label for="fname" className="col-form-label py-3 ">
                        First Name
                        </label>
                    </div>
                    <div className="col-12 col-md-9 py-3">
                        <input 
                        type="text" 
                        id="fname" 
                        className="form-control py-3"
                        required
                        value={fName}
                        onChange={(e) => setfName(e.target.value)}
                        />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                        <label for="lname" className="col-form-label py-3">
                        Last Name
                        </label>
                    </div>
                    <div className="col-12 col-md-9">
                        <input 
                        type="text" 
                        id="lname" 
                        className="form-control py-3"
                        required
                        value={lName}
                        onChange={(e) => setlName(e.target.value)}
                        />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                        <label for="dob" className="col-form-label py-3">
                        Date of Birth
                        </label>
                    </div>
                    <div className="col-12 col-md-9">
                        <input 
                        type="text" 
                        id="dob" 
                        className="form-control py-3"
                        required
                        value={Dob}
                        onChange={(e) => setDob(e.target.value)}
                        />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                        <label for="password" className="col-form-label py-3">
                        Email Address
                        </label>
                    </div>
                    <div className="col-12 col-md-9">
                        <input 
                        type="email" 
                        id="email" 
                        className="form-control py-3" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}   
                        />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                        <label for="phone" className="col-form-label py-3">
                        Phone Number
                        </label>
                    </div>
                        <div className="col-12 col-md-9">
                        <input 
                        type="text" 
                        id="phone" 
                        className="form-control py-3" 
                        value={phoneNo}
                        required
                        onChange={(e) => setPhoneNo(e.target.value)}   
                        />
                    </div>
                    <div className="col-12 py-3 col-md-3">
                        <label for="krapin" className="col-form-label py-3">
                        KRA PIN
                        </label>
                    </div>
                    <div className="col-12 col-md-9">
                        <input 
                        type="text" 
                        id="krapin" 
                        className="form-control py-3" 
                        value={kraPin}
                        required
                        onChange={(e) => setKraPin(e.target.value)}
                        />
                    </div>

                    <div className='row justify-content-center align-items-center py-3' style={{width: '20%', margin: 'auto'}}>
                        <button 
                        className='btn btn-transparent-small-green'
                        onClick={addMember}
                        disabled={
                        fName === '' || lName === '' || email === '' || Dob === '' || phoneNo === '' || postal === '' || kraPin === ''  || userInfoArray.length > 4
                        ? true : false}
                        >
                        <span className='px-2'>+</span> 
                        Add Member
                        </button>
                        
                    </div>
                    


                    </div>
                </div>
                </div>
                <div className="row  py-5" >
                <div className="col-12 col-md-12">
                    <div className="row"> 
                        <row className="py-1" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <p className='py-3'>You can only create a joint membership for a maximum of 4 members</p>            

                        <button
                            className="col-6 btn btn-outline-primary rounded"
                            type="submit"
                            onClick={() => props.moveToNext(1)}
                        >
                            Proceed
                        </button>
                        </row>
                    
                    </div>
                </div>
                </div>
            </div>
</form>
        </div>
        
    </div>
    )
}
