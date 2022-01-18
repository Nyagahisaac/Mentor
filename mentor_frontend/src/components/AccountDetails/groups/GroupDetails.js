import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { useDispatch } from 'react-redux'
import { addGroupInfo, submitGroupDetails } from '../../../store/slices/GroupSlice'

export default function GroupDetails(props) {
    const [groupName, setGroupname] = useState('')
    const [buissnessName, setBuisnessName] = useState('')
    const [postal, setPostal] = useState('')
    const [location, setLocation] = useState('')
    const [name, setName] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')
    const [groupCert, setGroupCert] = useState('')
    const [groupMinutes, setGroupminutes] = useState('')

    const dispatch = useDispatch()

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

    function HandleSubmit() {
        const values={
            name: groupName,
            buissnessName,
            postal_code: postal,
            location,
            group_reg_cert: groupCert,
            group_minutes: groupMinutes,
            introducer_name: name,
            introducer_member_number: memberNo,
            introducer_phone_number: phoneNo,
            introducer_email: email
        }
      dispatch(addGroupInfo(values))
    }


    return (
        <div className="card my-5 py-5">
                <div id="headingTwo"></div>

                <div>
                <form
          id="reg1"
          className="row justify-content-center align-items-center py-3"
        >
          <div className="col-10 col-md-10 justify-content-center align-items-center">           
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row align-items-center">
                  <div className="col-12 py-3 col-md-3">
                    <label for="groupname" className="col-form-label py-3">
                      Name of Group/Chama
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="groupname" 
                    className="form-control py-3"
                    required
                    onChange={(e) => setGroupname(e.target.value)}
                     />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="buisname" className="col-form-label py-3">
                      Name of buisness
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="buisname" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setBuisnessName(e.target.value)}
                    />
                  </div>

                  <div className="col-12 py-3 col-md-3">
                    <label for="postal" className="col-form-label">
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
                    <label for="local" className="col-form-label">
                      Buisness Location
                    </label>
                  </div>
                  <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="local" 
                    className="form-control py-3" 
                    required
                    onChange={(e) => setLocation(e.target.value)} 

                    />
                  </div>

                  <p id="subheaderform">Attachments</p>
                 
                  <div className="col-12 py-3 col-md-3">
                    <label for="groupcert" className="col-form-label">
                      Group Registration certificate
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="groupcert"
                    required
                    onChange={(e) => {
                    const {files} = e.target
                    getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setGroupCert(data)
                    }).catch (e => {
                    console.log('error', e)
                    })
                    }}
                    />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                    <label for="minutes" className="col-form-label">
                    Minutes or resolution to open account
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="minutes"
                    required
                    onChange={(e) => {
                    const {files} = e.target
                    getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setGroupminutes(data)
                    }).catch (e => {
                    console.log('error', e)
                    })
                    }}
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
                        onClick={() => props.moveBack(0)}
                        
                      >
                        back
                      </button>

                      <button
                        className="btn btn-outline-primary rounded"
                        style={{width: '25%'}}
                        type="submit"
                        onClick={() => props.moveToNext(2)}
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
