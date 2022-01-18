import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { authSelector } from '../../../store/slices/AuthSlice'
import { addUserInfo, employedSelector } from '../../../store/slices/EmployedSlice'


export default function PersonlaInfo(props) {

    const [Dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [postal, setPostal] = useState('')
    const [county, setCounty] = useState('')
    const [city, setCity] = useState('')
    const [kraPin, setKraPin] = useState('')
    const [KraCertificate, setKraCertificate] = useState('')
    const [IDBack, setIDBack] = useState('')
    const [photo, setPhoto] = useState('')
    const [signature, setSignature] = useState('')
    const [IDFront, setIDFront] = useState('')
    const [IdNumber, setIdNumber] = useState('')

    const dispatch = useDispatch()
    const {user} = useSelector(authSelector)
    // const {isError, isFetching, isSuccess} = useSelector(employedSelector)

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

    function submitPersonalInfo () {
        const values = {
            data: {
            date_of_birth: Dob,
            gender,
            gender_id: gender === 'female' || gender === 'Female' ? 2 : 1,
            email,
            postal_code:postal,
            county,
            address: city,
            city,
            kra_pin: kraPin,
            photo_base: photo,
            signature_base: signature,
            id_back_base: IDBack,
            id_front_base: IDFront,
            kra_cert: KraCertificate,
            first_name: user.first_name,
            last_name: user.last_name,
            account_id: 2,
            user_id: user.id,
            password: user.password,
            phone_number: user.personal_info.phone_number,
            id_number: Number(IdNumber)
            },
            moveToNext:  props.moveToNext
        }
      dispatch(addUserInfo(values))
    }  

    return (
        <div className="card my-5 py-5">
        <div id="headingOne"></div>
        <div>

    <form id="reg1"
     className="row justify-content-center align-items-center py-3 needs-validation"
     noValidate
     onSubmit={submitPersonalInfo}
    >
        <div className="col-10 col-md-10 justify-content-center align-items-center">           
            <div className="row">
            <div className="col-12 col-md-12">
                <div className="row align-items-center">
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
                    placeholder='mm/dd/yyyy'
                    required
                    value={Dob}
                    onChange={(e) => setDob(e.target.value)}
                    />
                </div>

                <div className="col-12 py-3 col-md-3">
                    <label for="gender" className="col-form-label py-3">
                    Gender
                    </label>
                </div>
                <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="gender" 
                    className="form-control py-3" 
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    />
                </div>

                <div className="col-12 py-3 col-md-3">
                    <label for="email" className="col-form-label py-3">
                    Email
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
                    Postal
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
                    <label 
                    for="county" 
                    className="col-form-label py-3">
                    County
                    </label>
                </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="county" 
                    className="form-control py-3" 
                    required
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    />
                </div>

                <div className="col-12 py-3 col-md-3">
                    <label for="city" className="col-form-label py-3">
                    City/Town
                    </label>
                </div>
                <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="city" 
                    className="form-control py-3"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                     />
                </div>

                <div className="col-12 py-3 col-md-3">
                    <label for="krapin" className="col-form-label py-3">
                    ID Number
                    </label>
                </div>
                <div className="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="krapin" 
                    className="form-control py-3"
                    required
                    value={IdNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
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
                    required
                    value={kraPin}
                    onChange={(e) => setKraPin(e.target.value)}
                     />
                </div>

                <p id="subheaderform">Attachments</p>
                
                <div className="col-12 py-3 col-md-3">
                    <label for="password" className="col-form-label">
                    Attach Photo
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="inputGroupFile01"
                    required
                    onChange={(e) => {
                        const {files} = e.target
                        getBase64(files[0]).then( data => {
                         // console.log('filedata5', data)
                         setPhoto(data)
                      }).catch (e => {
                        console.log('error', e)
                      })
                    }}
                    />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                    <label for="signature" className="col-form-label">
                    Attach Signature
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="signature"
                    required
                    onChange={(e) => {
                        const {files} = e.target
                        getBase64(files[0]).then( data => {
                         // console.log('filedata4', data)
                         setSignature(data)
                      }).catch (e => {
                        console.log('error', e)
                      })
                    }}

                    />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                    <label for="idfront" className="col-form-label">
                    Attach ID Front
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="idfront"
                    required
                    onChange={(e) => {
                        const {files} = e.target
                        getBase64(files[0]).then( data => {
                         // console.log('filedata3', data)
                         setIDFront(data)
                      }).catch (e => {
                        console.log('error', e)
                      })
                    }}
                    />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                    <label for="idback" className="col-form-label">
                    Attach ID Back
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="idback"
                    required
                    onChange={(e) => {
                        const {files} = e.target
                        getBase64(files[0]).then( data => {
                         // console.log('filedata2', data)
                         setIDBack(data)
                      }).catch (e => {
                        console.log('error', e)
                      })
                    }}
                    />
                    </div>

                    <div className="col-12 py-3 col-md-3">
                    <label for="kracert" className="col-form-label">
                    KRA Certificate <p style={{color:'red'}}>* PDF</p>
                    </label>
                    </div>
                    <div className="col-12 col-md-9">
                    <input 
                    type="file" 
                    className="form-control" 
                    id="kracert"
                    accept="application/pdf"
                    required
                    onChange={(e) => {
                        const {files} = e.target
                        getBase64(files[0]).then( data => {
                         // console.log('filedata', data)
                         setKraCertificate(data)
                      }).catch (e => {
                        console.log('error', e)
                      })
                    }}
                    />
                    </div>



                </div>
            </div>
            </div>
            <div className="row  py-5" >
            <div className="col-12 col-md-12">
                <div className="row">             
                    <row className="py-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <button
                        className="col-6 btn btn-outline-primary rounded"
                        type="submit"
                        // onClick={(e) => {
                        //     e.preventDefault()
                        //     props.moveToNext(1)
                        // }}
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
