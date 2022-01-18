import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../index.css';


function ProfileTabs( {step1, step2, step3, step4} ) {
    return (
        <Nav className = "col-11 col-md-8 pb-2">
            {step1? (
                    <Nav.Item className="col-12 col-md-3 ">
                        <LinkContainer to="/registration/account_register">
                            <Nav.Link>
                            <span className="step-number px-1">1</span> Account Creation
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-3 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">1</span> Account Creation
                        </Nav.Link>
                    </Nav.Item>
                )
            }

            {step2? (
                    <Nav.Item className="col-12 col-md-3 step-color-current">
                        <LinkContainer to="/registration/member_details">
                            <Nav.Link>
                            <span className="step-number px-1">2</span> Personal Information
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-3 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">2</span> <span className="disabled">Personal Information</span>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
            {step3? (
                    <Nav.Item className="col-12 col-md-3 step-color-current">
                        <LinkContainer to="/registration/next_of_kin_details">
                            <Nav.Link>
                            <span className="step-number px-1">3</span> Next of Kin Details
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-3 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">3</span> <span className="disabled">Next of Kin Details</span>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
            {step4? (
                    <Nav.Item className="col-12 col-md-3 step-color-current">
                        <LinkContainer to="/registration/account_creation">
                            <Nav.Link>
                            <span className="step-number px-1">4</span> Remittance Details
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-3 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">4</span> <span className="disabled">Remittance Details</span>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
        </Nav>
    )
}

export default ProfileTabs
