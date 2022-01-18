import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../../../components/RegistrationSteps'
import './pivot_table_kin_details.module.css'

const dividends_shares = [
    {
        'id':'1',
        'type': 'shares',
        'shares': '30000',
        'rate':'15',
        'dividend':'4500',
        'withholding_tax_percentage':'5',
        'withholding_tax':'225',
        'net_div':'4275'
    },
]

const dividends_outstanding_shares = [
    {
        'id':'1',
        'type': 'o/shares',
        'shares': '1330000',
        'rate':'11.8',
        'dividend':'156940',
        'withholding_tax_percentage':'5',
        'withholding_tax':'7847',
        'net_div':'149093'
    },
]
const total_shares = [
    {
        'id':'1',
        'type': 'Total',
        'shares': '0',
        'rate':'-',
        'dividend':'0',
        'withholding_tax_percentage':'-',
        'withholding_tax':'0',
        'net_div':'0'
    },
]

function TSCTwo() {
    const [KinName, setKinName] = useState('')
    const [KinRelationship, setKinRelationship] = useState("")
    const [KinID, setKinID] = useState('')
    const [KinDOB, setKinDOB] = useState('')
    const [KinTelNo, setKinTelNo] = useState('')
    const [KinPercentage, setKinPercentage] = useState('')
    const [BeneficiaryList, setBeneficiaryList] = useState('')
    const [Beneficiaries, setBeneficiaries] = useState({})
    let [BeneficiaryDict, setBeneficiaryDict] = useState([])


    // Add Beneficiary
    const [formValues, setFormValues] = useState([{ name:"",  relationship:"", id_no:"", dob:"", phone_no:"", percentage:"" }])
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    let handleChange = (i,e) => {
        let newFormValues = [...formValues]
        newFormValues[i][e.target.name] = e.target.value
        setFormValues(newFormValues)
    }

    let addFormFields = () => {
        setMessage('')
        setCount(count+1)
        if (count<3){
            setFormValues([ ...formValues, { name:"",  relationship:"", id_no:"", dob:"", phone_no:"", percentage:"" } ])
            console.log(count)
        }
        else if (count>=3){
            setMessage('Limit for beneficiaries has been reached')
            setCount(3)
        }
    }

    let removeFormFields = (i) => {
        setCount(count-1)
        let newFormValues = [...formValues]
        newFormValues.splice(i, 1)
        setFormValues(newFormValues)
    }
    // Add beneficiary

    useEffect(() => {
        window.scrollTo(0, 0)

        const temp_beneficiary_list = []
        temp_beneficiary_list.push(KinName, KinRelationship, KinID, KinDOB, KinTelNo, KinPercentage)
        // console.log(temp_beneficiary_list)
        setBeneficiaryList(temp_beneficiary_list)
      }, [KinName, KinRelationship, KinID, KinDOB, KinTelNo, KinPercentage])
      

      const handleBeneficiary= () => {
          let Beneficiaries={}
          Beneficiaries['KinName'] = BeneficiaryList[0]
          Beneficiaries['KinRelationship'] = BeneficiaryList[1]
          Beneficiaries['KinID'] = BeneficiaryList[2]
          Beneficiaries['KinDOB'] = BeneficiaryList[3]
          Beneficiaries['KinTelNo'] = BeneficiaryList[4]
          Beneficiaries['KinPercentage'] = BeneficiaryList[5]

          let kindict = []

          kindict.push(Beneficiaries)
          setBeneficiaryDict(kindict)
          console.log(Beneficiaries)
          console.log(BeneficiaryDict)
        }
    return (
        <form id="reg2" className="row justify-content-center py-3">
            <RegistrationSteps step1 step2 step3 />
            <div className="col-11 col-md-8">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {formValues.map((element, index) => (
                            <div key={index} className="row">
                                <div className="col-12 col-md-12">
                                    <div className="row">
                                        {index>0?<strong><p className="pt-2 text-center">Applicant {index+1}</p></strong>:''}
                                        
                                        <div class="col-12 py-2 col-md-3">
                                    <label for="firstname" class="col-form-label"><strong>Name</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" onChange={e=>{setKinName(e.target.value)}} id="firstname" class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="lastname" class="col-form-label"><strong>Relationship</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <select id="inputState" onChange={e=>{setKinRelationship(e.target.value)}}  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                        <option>Select next of kin</option>
                                        <option>Spouse</option>
                                        <option>Parent</option>
                                        <option>Sister</option>
                                        <option>Brother</option>
                                    </select>
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="kin_id" class="col-form-label"><strong>ID/PP(if minor indicate c/o)</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" onChange={e=>{setKinID(e.target.value)}} id="kin_id" class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="identitycard" class="col-form-label"><strong>Date of Birth</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="date" id="birthday" onChange={e=>{setKinDOB(e.target.value)}} class="form-control" name="birthday" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="kintel" class="col-form-label"><strong>Phone Number</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="kintel" onChange={e=>{setKinTelNo(e.target.value)}} class="form-control" />
                                </div>

                                <div class="col-12 py-2 col-md-3">
                                    <label for="kin_percentage" class="col-form-label"><strong>Percentage assigned</strong></label>
                                </div>
                                <div class="col-12 col-md-9">
                                    <input type="text" id="kin_percentage" onChange={e=>{setKinPercentage(e.target.value)}} class="form-control" />
                                </div>
                                    </div>
                                </div>
                                {index>0?<div className="col-12 col-md-12">
                                    <div className="row justify-content-center">
                                        <button onClick = {() => removeFormFields()} className="col-md-10 col-10 text-center btn btn-outline-success rounded" type="button">- Remove this applicant</button>
                                    </div>
                                </div>:''}
                                
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row align-items-center">
                            <div className="row">
                                <div className="col-12 col-md-8 pc-screen-hidden ">
                                        <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Relationship</th>
                                                    <th scope="col">ID/PP</th>
                                                    <th scope="col">DOB</th>
                                                    <th scope="col">Phone Number</th>
                                                    <th scope="col">Percentage assigned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {BeneficiaryDict.map(kin=>(
                                                    <tr>
                                                        <th scope="row">{kin.KinName}</th>
                                                        <td>{kin.KinRelationship}</td>
                                                        <td>{kin.KinID}</td>
                                                        <td>{kin.KinDOB}</td>
                                                        <td>{kin.KinTelNo}</td>
                                                        <td>{kin.KinPercentage}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 mobile-screen-hidden my-3">
                                <table role="table mobile-screen-hidden">
                                    <thead role="rowgroup">
                                            <tr role="row">
                                                <th role="columnheader">Name</th>
                                                <th role="columnheader">SHARES</th>
                                                <th role="columnheader">RATE (%)</th>
                                                <th role="columnheader">DIV</th>
                                                <th role="columnheader">W\TAX (%)</th>
                                                <th role="columnheader">WTAX</th>
                                            </tr>
                                    </thead>
                                    <tbody role="rowgroup">
                                        {BeneficiaryDict.map(kin=>(
                                            <tr role="row">
                                                <td role="cell">{kin.KinName}</td>
                                                <td role="cell">{kin.KinRelationship}</td>
                                                <td role="cell">{kin.KinID}</td>
                                                <td role="cell">{kin.KinDOB}</td>
                                                <td role="cell">{kin.KinTelNo}</td>
                                                <td role="cell">{kin.KinPercentage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center py-3">
                    <div className="col-10 col-md-12">
                        <div className="row justify-content-evenly text-center">
                            <Link className="col-md-6" to='/membership/personal_information'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Back</button></row>
                            </Link>
                            
                            <Link className="col-md-6" to='/registration/account_creation'>
                                <row className="justify-content-center"><button className="col-5 btn btn-outline-primary rounded" type="submit">Proceed</button></row>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
} 

export default TSCTwo
