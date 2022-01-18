import React, { useState } from "react";
import Image from "../../../images/productpage.jpg";
import { loansContent } from "../../../LoadInfo/loaninfo";
import { Link, useHistory } from "react-router-dom";
import homeIcon from "../../../images/icons/homevector.svg";
import WhiteHeader from "../../../Navigation/WhiteHeader";
// import { SuccessLoanSubmit } from "../../RegistrationForms/SuccessSubmit";
import { SuccessLoanModal, LoginModal } from '../../../components/Modals';
import Tryother from "../../../components/Tryother";

function LoansProductPage(props) {
  const [tabActive, setTabActive] = useState(1);
  const { loanType, loanCategory, loanLink } = props.location.state;  
  const [successModalShow, setSuccessModalShow] = useState(false)
  const [loginPromptShow, setLoginPromptShow] = useState(false)
  const history = useHistory()

  const details = loansContent[loanType];
  const HandleTabChange = (val) => {
    setTabActive(val);
  };

  const handleApplyNow = () => {
    if(!localStorage.getItem('token')){
        return setLoginPromptShow(true)
    }else if(loanCategory === 'Buisness Loans'){
      return setSuccessModalShow(true)
    }else{
        return history.push({
          pathname: '/applyLoan',
          state: {
            loanType: details.product_category
          }
        })
    }
}

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
          <li className="breadcrumb-item">
            <a href={loanLink} className="breadcrumb-item-override">
              {loanCategory}
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              {details.product_category}
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>
      <img src={Image} alt="" style={{ height: "auto", width: "100vw" }} />
      <div className="container mt-2r">
        <div className="col-12">
          <div className="row mt-2r">
            {tabActive === 1 ? (
              <div
                className="col-2 col-md-2 product-tabs-active"
                onClick={() => HandleTabChange(1)}
              >
                Overview
              </div>
            ) : (
              <div
                className="col-2 col-md-2 product-tabs"
                style={
                  tabActive === 1 ? { color: "#067c4b", fontWeight: 700 } : null
                }
                onClick={() => HandleTabChange(1)}
              >
                Overview
              </div>
            )}
            {tabActive === 2 ? (
              <div
                className="col-3 col-md-3  product-tabs-active"
                onClick={() => HandleTabChange(2)}
              >
                Product Information
              </div>
            ) : (
              <div
                className="col-3 col-md-3  product-tabs"
                onClick={() => HandleTabChange(2)}
              >
                Product Information
              </div>
            )}
            {tabActive === 3 ? (
              <div
                className="col-3 col-md-3 product-tabs-active"
                onClick={() => HandleTabChange(3)}
              >
                Requirements
              </div>
            ) : (
              <div
                className="col-3 col-md-3 product-tabs"
                onClick={() => HandleTabChange(3)}
              >
                Requirements
              </div>
            )}
          </div>
          <div className="product-tab-div"></div>
        </div>
        {tabActive === 1 ? (
          <div>
            <div className="col-12 col-md-12">
              <h2 id="subheader" className="mt-4r">
                {details.product_category}
              </h2>
              <p className="pb-1">{details.intro} </p>
              <div className="py-5">
                <button 
                 className="btn btn-outline-success rounded"
                 // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                 onClick={handleApplyNow}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ) : tabActive === 2 ? (
          <div>
            <div className="row py-3">
              <div className="col-md-12 mt-2r">
                <h2 id="subheader">What you should know</h2>

                <ul>
                  {details.product_features.what_to_know.map((det) => {
                    return <li>{det}</li>;
                  })}
                </ul>

                <h2 id="subheader" className="pt-4">
                  Why apply for this Loan
                </h2>
                <ul>
                  {details.product_benefits.map((det) => {
                    return <li>{det}</li>;
                  })}
                </ul>
                <div className="row justify-content-center py-5">
                  <div>
                    <button
                     className="btn btn-outline-success rounded"
                     // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                     onClick={handleApplyNow}
                     >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row py-3">
            <div className="col-md-12">
              <h2 id="subheader" className="pt-4">
                What you need to apply for this loan
              </h2>
              <ul>
                {details.product_features.must_have.map((det) => {
                  return <li>{det}</li>;
                })}
              </ul>
            </div>

            <div className="py-3">
                <button 
                 className="btn btn-outline-success rounded"
                 // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                 onClick={handleApplyNow}
                >
                  Apply Now
                </button>
              </div>


            
          </div>
        )}
        <Tryother />
      </div>

      {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <SuccessLoanSubmit />
                </div>
                
                </div>
            </div>
            </div> */}
            <SuccessLoanModal
              show={successModalShow}
              onHide={() => setSuccessModalShow(false)}
            />

            <LoginModal
            show={loginPromptShow}
            onHide={() => setLoginPromptShow(false)}
            />

    </div>
  );
}

export default LoansProductPage;
