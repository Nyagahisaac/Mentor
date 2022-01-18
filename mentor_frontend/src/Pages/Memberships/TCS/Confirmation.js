import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import RegistrationSteps from '../components/RegistrationSteps'
function Confirmation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="row justify-content-center py-3" >
            <div className="col-11 col-md-6 text-center">
                <h2 className="py-2">Welcome to Mentor Sacco!</h2>
                <p>Your Account has been created. Please wait as we process your membership request. </p>
            </div>
        </div>
    ) 
}

export default Confirmation
