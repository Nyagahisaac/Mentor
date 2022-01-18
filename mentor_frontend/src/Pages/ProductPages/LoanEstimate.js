import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../index.css';
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'


const loan_details = [
    {
        'id':'1',
        'loan_type':'Normal Loan',
        'interest_rate':'10',
    },
    {
        'id':'2',
        'loan_type':'Boresha Loan',
        'interest_rate':'12'
    },
    {
        'id':'1',
        'loan_type':'Emergency Loan',
        'interest_rate':'15',
    },
    {
        'id':'1',
        'loan_type':'Jijenge Loan',
        'interest_rate':'8',
    },
]

const loan_period =[
    {
        'id': '1',
        'period':'6 months'
    },
    {
        'id': '2',
        'period':'12 months'
    },
    {
        'id': '3',
        'period':'18 months'
    },
    {
        'id': '4',
        'period':'24 months'
    },
    {
        'id': '5',
        'period':'36 months'
    },
    {
        'id': '6',
        'period':'48 months'
    },
]

const repayment_frequency =[
    {
        'id': '1',
        'frequency':'Monthly'
    },
    {
        'id': '2',
        'period':'Quarterly'
    },
    {
        'id': '3',
        'period':'Semi-annually'
    },
]

const branches=[
    {
        'id':'1',
        'branch_name':"Head Office, Murang'a Town",
        'location':'Mentor Complex, Uhuru Highway',
        'contact': '0111026000, 0704066827',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'2',
        'branch_name':'Thika Town Branch',
        'location':'Thika',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'3',
        'branch_name':'Kenol Town Branch',
        'location':'Highway Villa Building',
        'contact': '0704350662, 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'4',
        'branch_name':'Nairobi Branch',
        'location':'Ngara',
        'contact': '0713072137',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'5',
        'branch_name':'Kiriaini Town Branch',
        'location':'Kiriaini Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'6',
        'branch_name':'Ithanga Branch',
        'location':'Ithanga Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'7',
        'branch_name':'Kangari Town Branch',
        'location':'Kangari Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'8',
        'branch_name':'Kandara Town Kandara',
        'location':' Kandara Town',
        'contact': ' 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
]


function LoanEstimate() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



    return (
        <div>
        <WhiteHeader />
  <div className="line"></div>
     <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
    <ol className="breadcrumb">
      <img
        src={homeIcon}
        alt=""
        style={{ marginRight: 5, width: "20px", height: "20px" }}
      />
      <li className="breadcrumb-item">
        <a href="/" className="breadcrumb-item-override">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="/product/loan_estimate" className="breadcrumb-item-override-active">Loan Estimate</a>
      </li>
      
    </ol>
  </nav>
  <div className="line"></div>

        <div className="quote-builder py-5">
            <h2 className="text-center py-5">Make a quick estimate with our loan calculator</h2>
            <div className="row justify-content-center">
                <div className='col-11 col-md-7'>
                    <form class="row g-3 py-1">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6">
                                    <div class="col-md-10 py-2">
                                        <select id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                            {loan_details.map(loan=>(
                                                <option key={loan.id}>{loan.loan_type}</option>
                                            ))}
                                        </select>
                                        <label for="inputState" class="form-label px-3">
                                            <small>Select a loan type from the menu</small>
                                        </label>
                                    </div>

                                    <div class="col-md-10 py-2">
                                        <select id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                            {branches.map(branch=>(
                                                <option key={branch.id}>{branch.branch_name}</option>
                                            ))}
                                        </select>
                                        <label for="inputState" class="form-label px-3">
                                            <small>Select one of our branches from the menu</small>
                                        </label>
                                    </div>

                                    <div class="col-md-10 py-2">
                                        <input type="text" class="form-control" value="13%" id="loan-amount" placeholder="Indicate amount" disabled />
                                        <label for="inputState" class="form-label px-3">
                                            <small>Interest rate for *Loan Product Name*</small>
                                        </label>
                                    </div>

                                    <div class="col-md-10 py-2">
                                        <input type="number" class="form-control" id="loan-amount" placeholder="Indicate amount" />
                                        <label for="inputState" class="form-label px-3">
                                            <small>Indicate amount the amount of money you need</small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div class="col-md-10 py-2">
                                        <select id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                            {repayment_frequency.map(p =>(
                                                <option key={p.id}>{p.frequency}</option>
                                            ))}
                                        </select>
                                        <label for="inputState" class="form-label px-3">
                                            <small>Enter how often you'd like payback</small>
                                        </label>
                                    </div>

                                    <div class="col-md-10 py-2">
                                        <select id="inputState"  style={{color:'#263238', fontWeight:'bold'}} class="form-select">
                                            {loan_period.map(p =>(
                                                <option key={p.id}>{p.period}</option>
                                            ))}
                                        </select>
                                        <label for="inputState" class="form-label px-3">
                                            <small>Select loan repayment period</small>
                                        </label>
                                    </div>

                                    <div class="col-md-10 py-2">
                                        <input type="date" class="form-control" id="startdate" placeholder="Start Date" />
                                        <label for="inputState" class="form-label px-3">
                                            <small>When would you like to get the money</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row justify-content-center">
                                <div className="col-5">
                                    <div class="form-check pb-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                                </div>
                            </div> */}
                            
                            <div className="row justify-content-center py-2">
                                <div className="col-10 col-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-10">
                                            <div class="form-check pb-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label text-black" for="flexCheckDefault">
                                                I agree to the terms and conditions
                                            </label>
                                        </div>
                                        </div>
                                    </div>

                                    <Link to='/product/loan_estimate'>
                                        <button className="col-12 btn btn-outline-success rounded" type="submit">Estimate</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>    
                </div>
            </div>
        </div>
        </div>
    )
}

export default LoanEstimate
