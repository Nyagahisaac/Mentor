import { React, useContext, useEffect, useState } from "react";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegistrationSteps from "../components/RegistrationSteps";
import AccountDetails from "./AccountDetails";
import ActiveLoans from "./ActiveLoans";
import MyDividends from "./MyDividends";
import SavePig from "../images/icons/savePig.svg";
import BorrowHand from "../images/icons/BorrowHand.svg";
import InvestGraph from "../images/icons/InvestGraph.svg";
import BankingHouse from "../images/icons/BankingHouse.svg";
import InsureShield from "../images/icons/InsureShield.svg";
import homeIcon from "../images/icons/homevector.svg";
import WhiteHeader from "../Navigation/WhiteHeader";
import Arrow from "./orangeArrow.svg";
import ProfileTabs from "./ProfileTabs";
import { AuthContext } from "../context/authProvider";
import EventDetails from "../Pages/Events/EventDetails";
import { useHistory } from "react-router-dom";

function UserProfile() {
  const [Tab1, setTab1] = useState(true);
  const [Tab2, setTab2] = useState(false);
  const [Tab3, setTab3] = useState(false);
  const [BgColor1, setBgColor1] = useState("#F5811E");
  const [BgColor2, setBgColor2] = useState("");
  const [BgColor3, setBgColor3] = useState("");
  const [Bg1, setBg1] = useState("");
  const [Bg2, setBg2] = useState("");
  const [Bg3, setBg3] = useState("");

  const { usercategory } = useContext(AuthContext);
  const history = useHistory();

  const HandleTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setBgColor1("F5811E");
    setBgColor2("");
    setBgColor3("");
  };
  const HandleTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setBgColor1("");
    setBgColor2("F5811E");
    setBgColor3("");
  };
  const HandleTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setBgColor1("");
    setBgColor2("");
    setBgColor3("F5811E");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setBg1(BgColor1);
    setBg2(BgColor3);
    setBg3(BgColor3);
  }, [BgColor1, BgColor2, BgColor3]);

  const handleSetUpAccount = () => {
    console.log("clicked", usercategory);
    if (usercategory === "TSC/Civil Servants") {
      history.push("/accountdetails/tsc");
    }
    if (usercategory === "Groups and Chamas") {
      history.push("/accountdetails/groups");
    }
    if (usercategory === "Employed (Salaried) Persons") {
      history.push("/accountdetails/employed");
    }
    if (usercategory === "Buisness/Company") {
      history.push("/accountdetails/employed");
    }
  };

  return (
    <div>
      <div style={{ zIndex: 10 }}>
        <WhiteHeader />
      </div>
      {/* <div className="line"></div>
        <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
  <ol className="breadcrumb">
  <img src={homeIcon} alt="" style={{marginRight: 5, width: '20px', height: '20px'}}/>
    <li className="breadcrumb-item">
    <a href="/" className="breadcrumb-item-override">Home</a></li>
    
    <li className="breadcrumb-item">
    <a href="/user/member_login" className="breadcrumb-item-override">Memeber Account</a></li>
    
    <li className="breadcrumb-item active" aria-current="page">
    <span className="breadcrumb-item-override-active">Account Details</span>
    </li>
  </ol>
</nav>
<div className="line"></div>  */}

      <div className="container">
        <div id="reg1" className="row justify-content-center py-3">
          <div
            className="col-10 col-md-12"
            style={{ position: "relative", zIndex: 1 }}
          >
           <h1 className="green py-4">Welcome  <strong>Humphrey</strong>,</h1>
            {/* <p className="pt-3">What would you like to do today? </p>
            <p className="py-1">
              Here are some services we can help you with to get started
            </p> */}

            {/* <div className="row py-2">
              <div className="col-12">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <div
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        View Services
                      </div>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <Link to="/save-money">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <img src={SavePig} height="40px" alt="" />
                            </div>
                            <div className="col-11">Save</div>
                          </div>
                        </Link>
                        <hr />
                        <Link to="/borrow">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <img src={BorrowHand} height="40px" alt="" />
                            </div>
                            <div className="col-11">Borrow</div>
                          </div>
                        </Link>
                        <hr />

                        <Link to="/invest">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <img src={InvestGraph} height="40px" alt="" />
                            </div>
                            <div className="col-11">Invest</div>
                          </div>
                        </Link>
                        <hr />

                        <Link to="/banking">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <img src={BankingHouse} height="40px" alt="" />
                            </div>
                            <div className="col-11">Banking Services</div>
                          </div>
                        </Link>
                        <hr />

                        <Link to="/insure">
                          <div className="row align-items-center">
                            <div className="col-1">
                              <img src={InsureShield} height="40px" alt="" />
                            </div>
                            <div className="col-11">Insure</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="py-3">More Services</p> */}

            <div className="row py-4">
              <div
                className="col-4 col-md-2 border-right text-center profile-tabs"
                onClick={HandleTab1}
                style={Tab1 ? {color: '#f5811e'} : {color: 'rgba(0, 0, 0, 0.6)'}}
              >
               Account Details
              </div>
              <div
                className="col-4 col-md-2 border-right text-center profile-tabs"
                onClick={HandleTab2}
                style={Tab2 ? {color: '#f5811e'} : {color: 'rgba(0, 0, 0, 0.6)'}}
              >
                My Dividends
              </div>
              <div
                className="col-4 col-md-2  text-center profile-tabs"
                onClick={HandleTab3}
                style={Tab3 ? {color: '#f5811e'} : {color: 'rgba(0, 0, 0, 0.6)'}}
              >
                Active Loans
              </div>
            </div>

            {/* {Tab1? <AccountDetails />:'' } */}
            {Tab1 && <AccountDetails />}
            {Tab2 && <MyDividends />}
            {Tab3 && <ActiveLoans />}
          </div>
          {/* <div
            className="card-4 shadow-sm"
            style={{
              position: "absolute",
              top: "90px",
              right: "10%",
              padding: "20px",
              backgroundColor: "#067C4B",
              color: "#fff",
              width: 400,
              borderRadius: 10,
              zIndex: 20,
              position: "fixed",
            }}
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
