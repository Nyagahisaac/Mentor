import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

function RegisterSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="row justify-content-center py-3" >
            <div className="col-11 col-md-6 text-center">
                <h2 className="py-2">Congratulations!</h2>
                <p>You have successfully registered for this event. Check your email for a confirmation message and further details.</p>
            </div>
        </div>
    )
}

export default RegisterSuccess
