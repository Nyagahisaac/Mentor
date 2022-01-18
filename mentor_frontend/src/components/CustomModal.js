import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function CustomModal(props) {
    return (
        <div className="custom-modal">
            <h2>Are you a Mentor sacco member?</h2>
            <div className="row justify-content-center">
                <div className="col-7 col-md-6">
                <Link to="/user/member_login">
                        <button className="btn btn-outline-success m-1">Yes. Let me login</button>
                    </Link>
                </div>
                <div className="col-7 col-md-6">
                    <Link to="/memberships">
                        <button className="btn btn-outline-success m-1">No. Let me join</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CustomModal
