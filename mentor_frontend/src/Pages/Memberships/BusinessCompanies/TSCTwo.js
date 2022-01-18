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
                        <div className="row align-items-center">
                            <div class="col-12 py-2 col-md-3">
                                <label for="firstname" class="col-form-label">Name</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" onChange={e=>{setKinName(e.target.value)}} id="firstname" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="lastname" class="col-form-label">Relationship</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <select id="inputState" onChange={e=>{setKinRelationship(e.target.value)}}  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                    <option selected>Aunt</option>
                                    <option>Sibling</option>
                                    <option>father</option>
                                    <option>Mother</option>
                                    <option>Son</option>
                                    <option>Daughter</option>
                                    <option>Son-in-law</option>
                                    <option>Daughter-in-law</option>
                                    <option>Uncle</option>
                                    <option>Nephew</option>
                                    <option>Niece</option>
                                    <option>Husband</option>
                                    <option>Wife</option>
                                    <option>Spouse</option>
                                    <option>Trustee</option>
                                </select>
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kin_id" class="col-form-label">ID/PP(if minor indicate c/o)</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" onChange={e=>{setKinID(e.target.value)}} id="kin_id" class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="identitycard" class="col-form-label">Date of Birth</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="date" id="birthday" onChange={e=>{setKinDOB(e.target.value)}} class="form-control" name="birthday" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kintel" class="col-form-label">Phone Number</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="kintel" onChange={e=>{setKinTelNo(e.target.value)}} class="form-control" />
                            </div>

                            <div class="col-12 py-2 col-md-3">
                                <label for="kin_percentage" class="col-form-label">Percentage assigned</label>
                            </div>
                            <div class="col-12 col-md-9">
                                <input type="text" id="kin_percentage" onChange={e=>{setKinPercentage(e.target.value)}} class="form-control" />
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-10 col-md-5">
                                    <Link to='/registration/next_of_kin_details'>
                                        <button onClick={handleBeneficiary} className="col-12 btn btn-outline-primary rounded" type="submit">+ Add beneficiary</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                    <div className="col-10 col-md-5">
                        <Link to='/membership/remittance_details'>
                            <button className="col-12 btn btn-outline-primary rounded" type="submit">Proceed</button>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    )
} 

export default TSCTwo
