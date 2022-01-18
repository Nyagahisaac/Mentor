import { Row, Col } from "react-bootstrap"
import { useHistory } from "react-router-dom"

export default function LoginModal() {
    const history = useHistory()
    return(
    <Row className="p-5">
        <Col sm={8}>
        <h2 id="subheader" className="green" 
        style={{lineHeight: '60px', fontWeight: '600',}}
        >
        Do you have a Mentor Sacco Account?
        </h2>
        <p>Creating an account with us is simple. You can also login to your existing account</p>
        </Col>
        <Col sm={4}>
        <div className="py-3">
            <button 
            className="btn btn-success mb-4" 
            style={{padding: '10px', width: '100%'}}
            onClick={() => history.push('/memberships')}
            >
                Create account
            </button>
            <button 
            className="btn btn-transparent-small-green" 
            style={{width: '100%'}}
            onClick={() => history.push('/user/member_login')}
            >
                Login to your account
            </button>
        </div>
        </Col>
    </Row>
    )
}