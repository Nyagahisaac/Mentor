import {React, useEffect} from 'react'
import SuccessImage from '../../images/successImage.svg'
import { useHistory } from 'react-router-dom'

export const SuccessLoanSubmit = () => {   
    const history = useHistory()
    return (
        <div className="row justify-content-center py-5" >
            <div className="col-11 col-md-6 text-center">
            <img src={SuccessImage} alt="" className="img-fluid" />
                <h2 className="py-2 green">Request Submitted!</h2>
                <p>A loan specialist will be contacting you soon</p>
                <button 
                className='btn btn-success'
                data-bs-dismiss="modal"
                onClick={() => history.push('/')}
                >
                    Go to homepage
                </button>
            </div>
        </div>
    )
}


export const SuccessInsuranceSubmit = () => {
    const history = useHistory()
    return (
        <div className="row justify-content-center py-5" >
            <div className="col-11 col-md-6 text-center">
            <img src={SuccessImage} alt="" className="img-fluid" />
                <h2 className="py-2 green">Request Submitted!</h2>
                <p>An insurance specialist will be contacting you soon</p>
               
                <button 
                className='btn btn-success'
                data-bs-dismiss="modal"
                onClick={() => history.push('/')}
                >
                    Go to homepage
                </button>
            </div>
        </div>
    )
}