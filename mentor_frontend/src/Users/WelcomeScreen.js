import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

function WelcomeScreen() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container">
            <h1>Welcome to Mentor</h1>
            <strong>Aleady a Member?</strong>
            <p>Additional deposit accounts can be easily be opened as 'Joint Owner' for Chamas and other groups. For group accounts, click the <Link to="#">'Membership'</Link> tab.</p>

            <strong>New Member?</strong>
            <p>For a new membership have the following ready:</p>

            <ul>
                <li>A valid Government ID - National ID or Passport</li>
                <li>KRA PIN</li>
                <li>Must be 18 years and older</li>
            </ul>

            <p>Copies of the above documents must be uploaded for verification during the application process. Original copies must be presented upon request</p>

            <p>You have all the above ready? Let us proceed!</p>

            <div className="row justify-content-start py-3 pc-screen-hidden">
                <div className="col-10 col-md-2">
                    <Link to='/registration/account_register'>
                        <button className="col-12 btn btn-outline-success rounded my-2" type="submit">Apply Now!</button>
                    </Link>
                </div>
                <div className="col-10 col-md-2">
                    <Link to='/'>
                        <button className="col-12 btn btn-danger rounded my-2" type="submit">Cancel</button>
                    </Link>
                </div>
            </div>

            <div className="row justify-content-center py-3 mobile-screen-hidden">
                <div className="col-10 col-md-2">
                    <Link to='/registration/account_register'>
                        <button className="col-12 btn btn-outline-success rounded my-2" type="submit">Apply Now!</button>
                    </Link>
                </div>
                <div className="col-10 col-md-2">
                    <Link to='/'>
                        <button className="col-12 btn btn-danger rounded my-2" type="submit">Cancel</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default WelcomeScreen
