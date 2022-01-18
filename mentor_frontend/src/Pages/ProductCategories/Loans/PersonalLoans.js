/* eslint-disable no-lone-blocks */
import { React, useEffect } from "react";
// import ArrowImage from '../../../images/icons/arrow.svg'
import { Link } from "react-router-dom";
// import BusinessLoans from '../../../images/BusinessLoans.svg'
import homeIcon from "../../../images/icons/homevector.svg";
import WhiteHeader from '../../../Navigation/WhiteHeader'

function PersonalLoans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <li className="breadcrumb-item">
            <a href="/borrow" className="breadcrumb-item-override">
              Borrow
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              Personal Loans
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>
      <div className="container">
        <div className="row py-3 mt-2r">
          <div className="col-md-10">
            <h2 id="subheader">Personal Loans</h2>
            {/* <h3>Who is this for?</h3> */}
            <strong>Select a loan that suits you</strong>
            <p className="py-3">
              These loans are to be repaid within a maximum period of 48 months
            </p>
            <div class="row py-2">
              <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                <Link
                  to={{
                    pathname: "/loaninfo/normalloan",
                    state: {
                      loanType: "normalLoan",
                      loanCategory: "Personal Loans",
                      loanLink: "/loans/personal",
                    },
                  }}
                >
                  <div className="row py-3">
                    <div className="col-10">Normal Loan</div>
                  </div>
                </Link>
              </div>

              <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                <Link
                  to={{
                    pathname: "/loaninfo/fosaloan",
                    state: {
                      loanType: "fosaLoan",
                      loanCategory: "Personal Loans",
                      loanLink: "/loans/personal",
                    },
                  }}
                >
                  <div className="row py-3">
                    <div className="col-10">Fosa Pride Loan</div>
                  </div>
                </Link>
              </div>

              <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                <Link
                  to={{
                    pathname: "/loaninfo/instantloan",
                    state: {
                      loanType: "instantLoan",
                      loanCategory: "Personal Loans",
                      loanLink: "/loans/personal",
                    },
                  }}
                >
                  <div className="row py-3">
                    <div className="col-10">Instant Loan</div>
                  </div>
                </Link>
              </div>
              <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                <Link
                  to={{
                    pathname: "/loaninfo/normalloan",
                    state: {
                      loanType: "schoolfeesLoan",
                      loanCategory: "Personal Loans",
                      loanLink: "/loans/personal",
                    },
                  }}
                >
                  <div className="row py-3">
                    <div className="col-10">School Fees Loan</div>
                  </div>
                </Link>
              </div>

              <div className="row" style={{marginTop: '10vh'}}>
                    <div className="col-12 col-md-7">
                        <h1 className="pt-3" id="subheader">Didn't find what you are Looking for? </h1>
                        <p>No worries. Check out our other loan products that may interest you</p>
                        <div className="row py-5">
                            <div className="col-12">
                                <Link to="/borrow">
                                    <button className="btn btn-outline-primary rounded" type="submit">Try Other Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>                  
                </div>
              {/* <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                         <Link to={{
                                pathname: '/product/loan',
                                state: "emergencyLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Emergency Loan</div>
                                </div>
                            </Link>
                        </div> */}

              {/*  <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to={{
                                pathname: '/product/loan',
                                state: "salaryadvanceLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Salary Advance</div>
                                </div>
                            </Link>
                        </div>  */}
              {/* <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to={{
                                pathname: '/product/loan',
                                state: "quickfixLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Quick</div>
                                </div>
                            </Link>
                        </div>  */}
            </div>
          </div>
        </div>

        {/* <div className="row py-3 mobile-screen-hidden">
                <div className="col-12">
                    <h2>Personal Loans</h2>
                    <h3 className="py-2">Who is this for?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Apply Below</h3>
                    <div class="row justify-content-center py-2">
                        <div className="col-10 mx-3 orange-lite-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">Normal Loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">Fosa Pride Loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">Instant Loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">Emergency Loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">Salary Advance</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                            <Link to="/product/loan">
                                <div className="row py-3">
                                    <div className="col-10">School Fees Loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    </div>
  );
}

export default PersonalLoans;

{
  /* <Link to={{
                                pathname: '/product/loan',
                                state: "emergencyLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Emergency Loan</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to={{
                                pathname: '/product/loan',
                                state: "salaryadvanceLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Salary Advance</div>
                                </div>
                            </Link>
                        </div> 
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to={{
                                pathname: '/product/loan',
                                state: "quickfixLoan"
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Quick</div>
                                </div>
                            </Link>
                        </div> 
 */
}
