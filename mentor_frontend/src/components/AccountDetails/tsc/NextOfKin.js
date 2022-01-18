import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../../../store/slices/AuthSlice'
import { addNextOfKin, submitNextOfKinInfo, tscSelector } from '../../../store/slices/TscSlice'
import moment from 'moment'

export default function NextOfKin(props) {
    const [nextofKinArray, setNextofkinArray] = useState([])
    const [name, setName] = useState('')
    const [relationship, setRelationship] = useState('')
    const [id, setID] = useState('')
    const [Dob, setDob] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [percentage, setPercentage] = useState('')

    const dispatch = useDispatch()
    const userFromState = useSelector(authSelector).user
    // const {isFetching} = useSelector(tscSelector)

    const clearState = () => {
        setName('')
        setRelationship('')
        setID('')
        setPercentage('')
        setPhoneNo('')
        setDob('')
    }

    const addNextofKin = () => {
        const newKin = {
            id: 0,
            name,
            relationship_id:relationship,
            id_number:Number(id),
            date_of_birth: Dob,
            phone_number: phoneNo,
            percentage_assigned: percentage,
            user_id: userFromState.id
        }
        setNextofkinArray([...nextofKinArray, newKin])
        clearState()
    }

    const RemoveNextOfKin = (val) => {
        const newArray = nextofKinArray.filter(newVal => {
            return newVal !== val
        })
        setNextofkinArray(newArray)
    }

    function SubmitNextOfKinInfo() {
        const values = {
            data: nextofKinArray,
            moveToNext: props.moveToNext
        }
       dispatch(addNextOfKin(values))
    }

    return (
        <div className="card my-5 py-5">
        <div id="headingThree"></div>
        <div>
        { nextofKinArray.length ?
             <table className='table table-bordered' style={{width: '90%', margin: 'auto'}}>
                <thead>
                    <th scope="col">Name</th>
                    <th scope='col'>Relationship</th>
                    <th scope='col'>ID</th>
                    <th scope='col'>Date ofBirth</th>
                    <th scope='col'>Phone Number</th>
                    <th scope='col'>Percentage Assigned</th>
                    <th scope='col'></th>
                </thead>
                {nextofKinArray.map((val)=> {
                    // console.log('values', val)
                    return(
                        
                   <tbody>
                <tr>
                    <td>{val.name}</td>
                    <td>{val.relationship_id}</td>
                    <td>{val.id_number}</td>
                    <td>{val.date_of_birth}</td>
                    <td>{val.phone_number}</td>
                    <td>{val.percentage_assigned}</td>
                    <td>
                        <button 
                        className='btn'
                        onClick={() => RemoveNextOfKin(val)}
                        >
                            Remove
                        </button>
                    </td>
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
                
                onSubmit={SubmitNextOfKinInfo}
                >
                <div className="col-10 col-md-10 justify-content-center align-items-center">
                    
                    <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="row align-items-center">
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
                            required={nextofKinArray.length ? false : true}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="col-12 py-3 col-md-3">
                            <label for="relationship" className="col-form-label py-3">
                            Relationship
                            </label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input 
                            type="text" 
                            id="relationship" 
                            className="form-control py-3" 
                            required={nextofKinArray.length ? false : true}
                            value={relationship}
                            onChange={(e) => setRelationship(e.target.value)}
                            />
                        </div>

                        <div className="col-12 py-3 col-md-3">
                            <label for="id" className="col-form-label py-3">
                            ID/PP(If minor indicate c/0)
                            </label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input 
                            type="text" 
                            id="id" 
                            className="form-control py-3"
                            required={nextofKinArray.length ? false : true}
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                            />
                        </div>

                        <div className="col-12 py-3 col-md-3">
                            <label for="dob" className="col-form-label">
                            Date of Birth
                            </label>
                        </div>
                        <div className="col-12 col-md-9 py-3">
                            <input 
                            type="text" 
                            id="dob" 
                            className="form-control py-3" 
                            required={nextofKinArray.length ? false : true}
                            value={Dob}
                            onChange={(e) => setDob(e.target.value)} 
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
                            required={nextofKinArray.length ? false : true}
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            />
                        </div>


                        <div className="col-12 py-3 col-md-3">
                            <label for="percentage" className="col-form-label py-3">
                            Percentage assigned
                            </label>
                        </div>
                        <div className="col-12 col-md-9">
                            <input 
                            type="text" 
                            id="percentage" 
                            className="form-control py-3" 
                            required={nextofKinArray.length ? false : true}
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            />
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    
                    <div className='row justify-content-center align-items-center py-3' style={{width: '20%', margin: 'auto'}}>
                        <button 
                        className='btn btn-transparent-small-orange'
                        onClick={addNextofKin}
                        disabled={name === '' || relationship === '' || id === '' || Dob === '' || phoneNo === '' || percentage === '' ? true : false}
                        >
                        <span className='px-2'>+</span> 
                        Add Beneficiary
                        </button>
                    </div>


                    <div className="row  py-5">
                    <div className="col-12 col-md-12 ">
                        <div className="row">
                        
                            {/* <row className="py-1"> */}
                            <button
                                className="btn btn-transparent-form rounded"
                                style={{width: '25%', marginRight: '50%'}}
                                // type="submit"
                                onClick={() => props.moveBack(1)}
                                
                            >
                                back
                            </button>

                            <button
                                className="btn btn-outline-primary rounded"
                                style={{width: '25%'}}
                                type="submit"
                                // onClick={() => props.moveToNext(3)}
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
