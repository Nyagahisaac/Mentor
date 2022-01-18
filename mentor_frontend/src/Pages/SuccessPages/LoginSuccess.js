import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LoginSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="row justify-content-center py-3" >
            <div className="col-11 col-md-6 text-center">
                <h2 className="py-2">Welcome to Mentor!</h2>
                <p>Redirecting in 5 seconds.</p>
            </div>
        </div>
    )
}

export default LoginSuccess
