import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/joinusheaderimage.jpg'
import homeIcon from "../images/icons/homevector.svg";
import WhiteHeader from '../Navigation/WhiteHeader'

function Memberships() {
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
            <a href="/" className="breadcrumb-item-override">
              Home
            </a>
          </li>
          
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              Membership
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>
            <img src={Image} alt="" style={{height: 'auto', width: '100vw'}} />
        
        <div className="container py-4">
            {/* <h2 >Membership</h2> */}
            <div className="col-12 col-md-12 mt-2r py-3">
                    <h3 id="subheader">Why Join Mentors Sacco</h3>
                    
                    <p className='py-3'>The Sacco membership is open to all throughout the republic of Kenya. To be admitted to membership one must complete the prescribed application for membership form.</p>

                    <h3 id="subheader"className="mt-3r py-3">Requirements for Application:</h3>
                    <ul className='py-3'>
                        <li>A copy of the National ID/Passport</li>
                        <li>A copy of the KRA PIN Certificate</li>
                        <li>Original pay slip or a letter from the principal or Head teacher´s Letter for BOG/PTA employees.</li>
                        <li>To pay a registration fee of Kshs 1,000</li>
                    </ul>
                    <p className="py-3">A member will qualify for a loan after she/he has retained the membership for at least six months. However; a member qualifies for a Fosa Imara loan in a month if they are channeling their salaries through FOSA.</p>
                </div>
                <h3 id="subheader" className="py-3">Ready to Join Us?</h3>
                    <p>I would like to join Mentor Sacco under:</p>

                    <div className="row justify-content-start mt-2r">
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <Link to={{
                                    pathname: "/joinas/tsc",
                                    state: {
                                      joinAs: "tsc"
                                    }
                                }}
                                    >
                                    <button className="btn col-12 col-md-9 btn-outline-primary my-2 py-3">TSC/Civil Servants</button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-8">
                        <Link to={{
                                    pathname: "/joinas/groups",
                                    state: {
                                      joinAs: "groups"
                                    }
                                }}>
                                <button className="btn col-12 col-md-9 btn-outline-primary my-2 py-3">Groups and Chamas</button>
                            </Link>
                        </div>

                        <div className="col-12 col-md-8">
                        <Link to={{
                                    pathname: "/joinas/employed",
                                    state: {
                                      joinAs: "employed"
                                    }
                                }}>
                                <button className="btn col-12 col-md-9 btn-outline-primary my-2 py-3">Employed (Salaried Persons)</button>
                            </Link>
                        </div>

                        <div className="col-12 col-md-8">
                        <Link to={{
                                    pathname: "/joinas/buisness",
                                    state: {
                                      joinAs: "buisness"
                                    }
                                }}>
                                <button className="btn col-12 col-md-9 btn-outline-primary my-2 py-3">Business/Companies</button>
                            </Link>
                        </div>
                    </div>
            <div className="row justify-content-center">
                
                <div className="col-10 col-md-11">
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Memberships
