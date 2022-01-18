import {React, useEffect} from 'react'
import ArrowImage from '../../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import BusinessLoans from '../../../images/BusinessLoans.svg'
import homeIcon from "../../../images/icons/homevector.svg";
import WhiteHeader from '../../../Navigation/WhiteHeader'
import Tryother from '../../../components/Tryother'

function CorporateLoans() {
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
            <a href="/" className="breadcrumb-item-override">Home</a>
          </li>
          
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active"> Corporate Loans </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>

        <div className="container py-3">

        <div className="row py-3 pc-screen-hidden justify-content-evenly mt-2r">
        <div className="col-12 col-md-6">
          <h2 id="subheader">Corporate Loans</h2>
          <h3 id="subheader2">Who is this for?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={BusinessLoans} alt="" />
        </div>
      </div>

      <div className="row pc-screen-hidden justify-content-center mt-2r">
        <div className="row py-2 px-4">
          <h3 className="px-3" id="subheader">
            Loan Types
          </h3>

          <div className="col-9 col-md-5 mx-3 orange-lite-button black-link">
                                    <Link 
                                    to={{                
                                            pathname: "/loaninfo/biasharaplusloan",
                                            state: {
                                            loanType: "biasharaplusLoan",
                                            loanCategory: "Buisness Loans",
                                            loanLink: "/loans/business",
                                            }
                                        }}
                                    >
                                        <div className="row py-3">
                                            <div className="col-10">Biashara Plus Loan</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt=""/>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-9 col-md-5 mx-3 blue-lite-button black-link">
                                    <Link 
                                    to={{
                                            pathname: "/loaninfo/agribuisnessloan",
                                            state: {
                                            loanType: "majaniLoan",
                                            loanCategory: "Buisness Loans",
                                            loanLink: "/loans/business",
                                            }
                                        }}
                                    >
                                        <div className="row py-3">
                                            <div className="col-10">Agribusiness Loan</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt=""/>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-9 col-md-5 mx-3 white-dark-button black-link">
                                    <Link 
                                    to={{
                                            pathname: "/loaninfo/majaniloan",
                                            state: {
                                            loanType: "majaniLoan",
                                            loanCategory: "Buisness Loans",
                                            loanLink: "/loans/business",
                                            }
                                        }}
                                    >
                                        <div className="row py-3">
                                            <div className="col-10">Majani Loan</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt=""/>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                                </div>
          </div>
          </div>

                <Tryother />          
        </div>
        </div>
    )
}

export default CorporateLoans
