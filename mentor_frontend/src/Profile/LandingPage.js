import React, {useContext} from "react";
import WhiteHeader from "../Navigation/WhiteHeader";
import BoxImg from "../images/boxImg.jpg";
import Image1 from "../images/userlangingpage/image1.jpg";
import Image2 from "../images/userlangingpage/image2.jpg";
import Image3 from "../images/userlangingpage/image3.jpg";
import Image4 from "../images/userlangingpage/image4.jpg";
import Image5 from "../images/userlangingpage/image5.jpg";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/authProvider";
import { useSelector } from "react-redux";
import { authSelector } from "../store/slices/AuthSlice";
import styled from "styled-components";

export default function LandingPage() {
    const history = useHistory()
    const { usercategory } = useContext(AuthContext);
    const userFromState = useSelector(authSelector).user
    // const {accountType} = useSelector(authSelector)
    const account = localStorage.getItem('accountType')
    const accountType = JSON.parse(account)
    console.log('account type', accountType)

    const handleSetUpAccount = () => {
      console.log("clicked", usercategory);
      if (accountType.id  === 1) {
        history.push("/accountdetails/tsc");
      }
      if (accountType.id  === 4) {
        history.push("/accountdetails/groups");
      }
      if (accountType.id  === 2) {
        history.push("/accountdetails/employed");
      }
      if (accountType.id  === 3) {
        history.push("/accountdetails/buisness");
      }
    };

  return (
    <LandingStyled>
      <div style={{ zIndex: 10 }}>
        <WhiteHeader />
      </div>
      <div 
      className="bubble pulse"
      >
      <p>Your account profile is incomplete.</p>
            <p>
              Complete setting up your account to enjoy our services to the
              fullest.
            </p>
            <button
              className="btn btn-transparent-white"
              type="submit"
              /// onClick={handleSetUpAccount}
              onClick={handleSetUpAccount}
            >
              Set Up Account
            </button>
      </div>
      <div className="container pb-5 mb-5">
        <div className="pt-5 pb-3" style={{ borderBottom: "1px solid #C4C4C4" }}>
          <h1 className="green">Welcome  <strong> {userFromState.first_name}</strong>,</h1>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-12 col-md-4">
            <img src={BoxImg} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-8">
            <h2 id="subheader" className="py-4">Let's get Started!</h2>
            <p style={{lineHeight: '36px'}}>
              Getting Started with mentor Sacco couldn’t be easier. Make sure to
              complete your account details to enjoy our services to the
              fullest. We are here to help you with anything you need.
            </p>
            <div className="row px-3 py-3">
              <button
                className="col-12 col-md-4 btn btn-outline-primary btn-member"
                style={{ marginRight: "40px", marginBottom: '40px' }}
                onClick={() => history.push('/')}
              >
                Visit Homepage
              </button>
              <button 
              className="col-12 col-md-4 btn btn-transparent-small-orange"
              style={{marginBottom: '40px'}}
              onClick={() => history.push('/user/profile')}
              >
                Go to your Account
              </button>
            </div>
          </div>
        </div>

        <div className="py-4" style={{fontWeight: '400'}}>
          <h4>Here are some services to help you get started</h4>
        </div>

        <div
          className="row justify-content-between col-md-12 py-4"
          style={{ display: "flex" }}
          >
            <div className="col-12 col-md-6 my-4 serviceCard"
            onClick={() => history.push('/save-money')}
            >
              <img
                src={Image1}
                style={{ width: "100%", height: "40vh" }}
                alt=""
              />

              <div className="bottom-img">
                <h5 style={{ marginTop: "5vh", marginLeft: "45%" }}>Save</h5>
              </div>
          </div>

          <div className="col-12 col-md-6  my-4 serviceCard"
          onClick={() => history.push('/borrow')}
          >
            <img
              src={Image2}
              alt=""
              style={{ width: "100%", height: "40vh" }}
            />
            <div className="bottom-img">
              <h5 style={{ marginTop: "5vh", marginLeft: "45%" }}>Borrow</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-between my-4 col-md-12 py-4">
        <div className="col-12 col-md-4 my-4 serviceCard"
        onClick={() => history.push('/saccoservices')}
        >
            <img
              src={Image3}
              alt=""
              style={{ width: "100%", height: "40vh" }}
            />
            <div className="bottom-img-sm">
              <h5 style={{ marginTop: "5vh", marginLeft: "35%" }}>
                Sacco Services
              </h5>
            </div>
          </div>

          <div className="col-12 col-md-4 my-4 serviceCard"
           onClick={() => history.push('/invest')}
          >
          
            <img
              src={Image4}
              alt=""
              style={{ width: "100%", height: "40vh" }}
            />
            <div className="bottom-img-sm">
              <h5 style={{ marginTop: "5vh", marginLeft: "45%" }}>Invest</h5>
            </div>
          </div>

          <div className="col-12 col-md-4 my-4 serviceCard"
          onClick={() => history.push('/insure')}
          >
            <img
              src={Image5}
              alt=""
              style={{ width: "100%", height: "40vh" }}
            />
            <div className="bottom-img-sm">
              <h5 style={{ marginTop: "5vh", marginLeft: "45%" }}>Insurance</h5>
            </div>
          </div>
        </div>
      </div>
    </LandingStyled>
  );
}

const LandingStyled  = styled.div`
  @media (max-width: 768px){
    .bubble {
      display: none;
    }
  }
`
