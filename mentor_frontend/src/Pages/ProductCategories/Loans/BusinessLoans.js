import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import BusinessLoan from "../../../images/BusinessLoans.svg";
import homeIcon from "../../../images/icons/homevector.svg";
import WhiteHeader from '../../../Navigation/WhiteHeader'

function BusinessLoans() {
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
            <a href="/" className="breadcrumb-item-override">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/borrow" className="breadcrumb-item-override">Borrow</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active"> Buisness Loans </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>
      
      <div className="container">
      <div className="row py-3 pc-screen-hidden justify-content-evenly mt-2r">
        <div className="col-12 col-md-6">
          <h2 id="subheader">Buisness Loans</h2>
          <h3 id="subheader2">Who is this for?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={BusinessLoan} alt="" />
        </div>
      </div>

      <div className="row pc-screen-hidden justify-content-center mt-2r">
        <div className="row py-2 px-4">
          <h3 className="px-3" id="subheader">
            Loan Types
          </h3>

          {/* <div className="col-9 col-md-5 mx-3 orange-lite-button black-link">
            <Link
              to={{
                pathname: "/loaninfo/jijenge19loan",
                state: {
                  loanType: "jijenge19Loan",
                  loanCategory: "Buisness Loans",
                  loanLink: "/loans/business",
                },
              }}
            >
              <div className="row py-3">
                <div className="col-10">Jijenge 19 Loan</div>
              </div>
            </Link>
          </div>

          <div className="col-9 col-md-5 mx-3 blue-lite-button black-link">
            <Link
              to={{
                pathname: "/loaninfo/jijenge25loan",
                state: {
                  loanType: "jijenge25Loan",
                  loanCategory: "Buisness Loans",
                  loanLink: "/loans/business",
                },
              }}
            >
              <div className="row py-3">
                <div className="col-10">Jijenge 25 Loan</div>
              </div>
            </Link>
          </div>

          <div className="col-9 col-md-5 mx-3 green-lite-button black-link">
            <Link
              to={{
                pathname: "/loaninfo/imaraloan",
                state: {
                  loanType: "imaraLoan",
                  loanCategory: "Buisness Loans",
                  loanLink: "/loans/business",
                },
              }}
            >
              <div className="row py-3">
                <div className="col-10">Imara Loan</div>
              </div>
            </Link>
          </div> */}

          <div className="col-9 col-md-5 mx-3 pink-lite-button black-link">
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
                <div className="col-10">Biashara Loan</div>
              </div>
            </Link>
          </div>

          <div className="col-9 col-md-5 mx-3 green-lite-button black-link">
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
              </div>
            </Link>
          </div>

          <div className="col-9 col-md-5 mx-3 orange-lite-button black-link">
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
              </div>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
    </div>
  );
}

export default BusinessLoans;
