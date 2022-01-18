import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBuisnessInfo, buisnessSelector, submitBuinessInfo } from '../../../store/slices/BuisnessSlice'


export default function BuisnessDetails(props) {

    const [buisnessChecked, setBuisnessChecked] = useState(false)
    const [companyChecked, setCompanyChecked] = useState(false)
    const [buisnessName, setBuisnessName] = useState('')
    const [ID, setID] = useState('')
    const [postal, setPostal] = useState('')
    const [location, setLocation] = useState('')
    const [ownership, setOwnership] = useState('')
    const [others, setOthers] = useState('')
    const [IDFile, setIDFile] = useState('')
    const [certificateOfIncorporation, setCertificateOfIncorporation] = useState('')
    const [KraCert, setKraCert] = useState('')
    const [buisnessRegCert, setBuisnessRegCert] = useState('')
    const [accountResolution, setAccountResolution] = useState('')
    const [name, setName] = useState('')
    const [memberNo, setMemberNo] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    //  const {isFetching} = useSelector(buisnessSelector)

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
    function SubmitBuisnessDetails() {
     const values = {
         nature_bs: buisnessChecked ? buisnessChecked : companyChecked,
         name: buisnessName,
         id_number: ID,
         postal_address:postal,
         location,
         bs_ownership: ownership,
         others, 
         id_file: IDFile,
         certificateOfIncorporation,
         kra_cert: KraCert,
         bs_reg_cert: buisnessRegCert,
         open_account_resolution: accountResolution,
         introducer_name: name,
         introducer_member_number: memberNo,
         introducer_phone_number: phoneNo,
         introducer_email: email
     }   
     dispatch(addBuisnessInfo(values))
    }

    return (
        <div className="card my-5 py-5">
        <div id="headingTwo"></div>

        <div>
        <form
            id="reg1"
            className="row justify-content-center align-items-center py-3 needs-validation"
            noValidate
            // onSubmit={SubmitBuisnessDetails}
        >

        <div className="col-10 col-md-10 justify-content-center align-items-center">
        <p id="subheaderform">Select Appropriately</p>
        <div className="form-check">
        <input 
        className="form-check-input" 
        onClick={() => setBuisnessChecked(!buisnessChecked)}
        type="radio" 
        name="flexRadioDefault" 
        id="flexRadioDefault1" 
        value='Buisness'
        checked={buisnessChecked}/>
        <label className="form-check-label" for="flexRadioDefault1">
        Registered Buisness
        </label>
        </div>
        <div className="form-check">
        <input 
        className="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        id="flexRadioDefault2" 
        value='Company' 
        checked={companyChecked}
        onClick={() =>  setCompanyChecked(!companyChecked)}
        />
        <label className="form-check-label" for="flexRadioDefault2">
        Registered Company
        </label>
        </div>

{
buisnessChecked ? 
<div className="col-12 col-md-12 justify-content-center align-items-center">
    
    <div className="row">
      <div className="col-12 col-md-12">
        <div className="row align-items-center">
          <div className="col-12 py-3 col-md-3">
            <label for="bname" className="col-form-label py-3">
              Buisness Name
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="bname" 
            className="form-control py-3"
            required
            onChange={(e) => setBuisnessName(e.target.value)}
             />
          </div>

          <div className="col-12 py-3 col-md-3">
            <label 
            for="id" 
            className="col-form-label py-3"
            >
              ID/Passport
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="id" 
            className="form-control py-3"
            required
            onChange={(e) => setID(e.target.value)}
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
            <label for="location" className="col-form-label">
              Buisness Location
            </label>
          </div>
          <div className="col-12 col-md-9 py-3">
            <input 
            type="text" 
            id="location" 
            className="form-control py-3" 
            required
            onChange={(e) => setLocation(e.target.value)}
            />
          </div>


          <div className="col-12 py-3 col-md-3">
            <label for="ownership" className="col-form-label py-3">
              Buisness Ownership
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="ownership" 
            className="form-control py-3" 
            required
            onChange={(e) => setOwnership(e.target.value)}
            />
          </div>


          <div className="col-12 py-3 col-md-3">
            <label for="other" className="col-form-label py-3">
             If others, Specify
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="other" 
            className="form-control py-3"
            required
            onChange={(e) => setOthers(e.target.value)}
             />
          </div>

          <div className="col-12 py-3 col-md-3">
            <label for="IDCert" className="col-form-label">
             Copy of your National ID
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="IDCert"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setIDFile(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="krapin" className="col-form-label">
             Copy of your KRA PIN
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input type="file" 
            className="form-control" 
            id="krapin"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setKraCert(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            
            <div className="col-12 py-3 col-md-3">
            <label for="regCert" className="col-form-label">
             Buisness Registration Certificate
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="regCert"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setBuisnessRegCert(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="resolution" className="col-form-label">
             Resolution to open Account (minutes)
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="resolution"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setAccountResolution(data)
                }).catch (e => {
                console.log('error', e)
                })
            }} 
            />
            </div>

            <p id="subheaderform" className='mx-2'>Introducer's Information</p>

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

  </div>

  : null 
}

{
companyChecked ? 

<div className="col-12 col-md-12 justify-content-center align-items-center">
    
    <div className="row">
      <div className="col-12 col-md-12">
        <div className="row align-items-center">
          <div className="col-12 py-3 col-md-3">
            <label for="compname" className="col-form-label py-3">
              Company Name
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="compname" 
            className="form-control py-3" 
            required
            onChange={(e) => setBuisnessName(e.target.value)}

            />
          </div>

          <div className="col-12 py-3 col-md-3">
            <label for="id" className="col-form-label py-3">
              ID/Passport
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="id" 
            className="form-control py-3"
            required
            onChange={(e) => setID(e.target.value)}
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
            <label for="location" className="col-form-label py-3">
              Company Location
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="location" 
            className="form-control py-3" 
            required
            onChange={(e) => setLocation(e.target.value)}
            />
          </div>


          <div className="col-12 py-3 col-md-3">
            <label for="ownership" className="col-form-label py-3">
              Company Ownership
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="ownership" 
            className="form-control py-3" 
            required
            onChange={(e) => setOwnership(e.target.value)}
            />
          </div>


          <div className="col-12 py-3 col-md-3">
            <label for="other" className="col-form-label py-3">
             If others, Specify
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="text" 
            id="other" 
            className="form-control py-3" 
            required
            onChange={(e) => setOthers(e.target.value)}   
            />
          </div>

          {/* <div className="col-12 py-3 col-md-3">
            <label for="idfile" className="col-form-label">
             Copy of your National ID
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file"
             className="form-control" 
             id="idfile"
             required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setIDFile(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
             />
            </div> */}

            <div className="col-12 py-3 col-md-3">
            <label for="certInco" className="col-form-label">
             Certificate of Incorporation
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="certInco"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setCertificateOfIncorporation(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            
            <div className="col-12 py-3 col-md-3">
            <label for="kracert" className="col-form-label">
             Copy of KRA PIN
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="kracert"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setKraCert(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            <div className="col-12 py-3 col-md-3">
            <label for="accres" className="col-form-label">
             Board resolution to open Account (minutes)
            </label>
          </div>
          <div className="col-12 col-md-9">
            <input 
            type="file" 
            className="form-control" 
            id="accres"
            required
            onChange={(e) => {
                const {files} = e.target
                getBase64(files[0]).then( data => {
                    // console.log('filedata5', data)
                    setAccountResolution(data)
                }).catch (e => {
                console.log('error', e)
                })
            }}
            />
            </div>

            <p id="subheaderform" className='mx-2'>Introducer's Information</p>

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

  </div>
: null
}




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
                    props.moveBack(0)}
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
                    props.moveToNext(2)
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
