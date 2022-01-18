import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../index.css';

function BizRegistrationSteps({step1, step2, step3}) {
    return (
        <Nav className = "col-11 col-md-8 navtabs pb-2">
            {step1? (
                    <Nav.Item className="col-12 col-md-4 step-color-current">
                        <LinkContainer to="#">
                            <Nav.Link>
                                <span className="step-number px-1">1</span> Personal Information
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-4 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">1</span> Personal Information
                        </Nav.Link>
                    </Nav.Item>
                )
            }

            {step2? (
                    <Nav.Item className="col-12 col-md-4 step-color-current">
                        <LinkContainer to="#">
                            <Nav.Link>
                                <span className="step-number px-1">2</span> Acount Operation
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-4 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">2</span> <span className="disabled">Acount Operation</span>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
            {step3? (
                    <Nav.Item className="col-12 col-md-4 step-color-current">
                        <LinkContainer to="#">
                            <Nav.Link>
                                <span className="step-number px-1">3</span> Remittance Details
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                ):(
                    <Nav.Item className="col-12 col-md-4 step-color">
                        <Nav.Link disabled>
                            <span className="step-number-current px-1">3</span> <span className="disabled">Remittance Details</span>
                        </Nav.Link>
                    </Nav.Item>
                )
            }
        </Nav>
    )
}

export default BizRegistrationSteps