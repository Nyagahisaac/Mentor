import React, { useContext, useState, useEffect } from "react";
import WhiteHeader from "../Navigation/WhiteHeader";
import { Link } from "react-router-dom";
import { JoinInfo } from "../LoadInfo/joinCategories";
import homeIcon from "../images/icons/homevector.svg";
import { AuthContext } from "../context/authProvider";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authSelector, loginUser, registerUser } from "../store/slices/AuthSlice";
import Loading from "./Loader";

export default function JoinUsPage(props) {
  const { joinAs } = props.location.state;
  // console.log('join as', joinAs)
  const details = JoinInfo[joinAs];
  // console.log('join as', details)
  // sconst {changeAuth, changeEmail, changeUserCategory} = useContext(AuthContext)
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreementChecked, setAgreementChecked] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(0)

  const {isSuccess, isFetching, errorMessage} = useSelector(authSelector)
  const dispatch = useDispatch()


  // useEffect(() => {
  //   if(isSuccess) {
  //     history.push('/user/member_login')
  //   }
  // }, [isSuccess])

// const validation = () => {
//   if(firstName === ''){
//     return 
//   }
// }

  const moveToLogin = () => {
    history.push('/user/member_login')
  }


  const HandleRegistration = (e) => {

    e.preventDefault()
    const accountType = () => {
      if(details.name === 'TSC/Civil Servants'){
        return 1
      } else if(details.name === 'Employed (Salaried) Persons'){
        return 2
      } else if (details.name === 'Buisness/Company') {
        return 3
      } else if( details.name === 'Groups and Chamas') {
        return 4
      }
    }
    const fields = {
      firstName,
      lastName,
      password,
      email,
      phoneNumber,
      accountType: accountType(),
      moveToLogin
    }
    dispatch(
      registerUser(fields)
      )
  }

  return (
    <div style={{backgroundColor: 'rgba(196, 196, 196, 0.2)'}}>
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
            <a href="/memberships" className="breadcrumb-item-override">
              Memberships
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              {details.name}
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>

      <img
        src={details.imgurl}
        alt=""
        style={{ width: "100vw", height: "auto" }}
      />


      {isFetching ? 
        <div 
        className="container col-12 col-md-12 justify-content-center align-items-center py-5" 
        style={{height: '70vh'}}
        >
        <Loading />
        
        </div>
      : 

      <div className="container col-12 justify-content-center align-items-center" style={{backgroundColor: '#fff'}}>
        <form
          id="reg1"
          className="row justify-content-center align-items-center py-3 needs-validation"
          onSubmit={HandleRegistration}
        >
          <div className="col-10 col-md-10 justify-content-center align-items-center">
            <h3
              id="subheader"
              className="mt-3r"
            >{`Membership Under The ${details.name}`}</h3>
            <p className="py-3">
              NOTE: The minimum monthly contribution is Kshs 2000 for all TSC
              employees and civil servants.
            </p>
            <p style={{fontWeight: '600'}}>Applicant’s information</p>
            <div className="row">
              <div className="col-12 col-md-12">
                <div className="row align-items-center">
                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="firstname" class="col-form-label">
                      First Name
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="firstname" 
                    class="form-control"
                    required
                    onChange={(e) => setFirstName(e.target.value)} 
                    />
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="lastname" class="col-form-label">
                      Last Name
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="lastname" 
                    class="form-control" 
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  {/* <div class="col-12 py-3 col-md-3">
                    <label htmlFor="username" class="col-form-label">
                      Username
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="text" 
                    id="username" 
                    class="form-control" 
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    />
                  </div> */}

                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="email" class="col-form-label">
                      Email Address
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="email" 
                    id="email" 
                    class="form-control" 
                    required
                    onChange={(e) => setEmail(e.target.value)}                    
                    />
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="number" class="col-form-label">
                      Phone Number
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="number" 
                    id="number" 
                    class="form-control" 
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}                    
                    />
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="password" class="col-form-label">
                      Password
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="password" 
                    id="password" 
                    class="form-control"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                     />
                    <div id="emailHelp" class="form-text">
                      *Password should be at least 8 characters, include a
                      capital letter and have an alphanumeric character
                    </div>
                  </div>

                  <div class="col-12 py-3 col-md-3">
                    <label htmlFor="confirmpassword" class="col-form-label">
                      Confirm Password
                    </label>
                  </div>
                  <div class="col-12 col-md-9">
                    <input 
                    type="password" 
                    id="confirmpassword" 
                    class="form-control" 
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className="col-12 col-md-12">
                    <div className="row">
                      <div className="col-12 py-4">
                        <div class="form-check py-3">
                          <input
                            class="form-check-input mr-2"
                            type="checkbox"
                            value={agreementChecked}
                            id="flexCheckDefault"
                            required
                            onChange={(e) => setAgreementChecked(e.target.value)}
                          />
                          <label
                            class="form-check-label text-black"
                            htmlFor="flexCheckDefault"
                          >
                            I/We have read and understood the{" "}
                            <Link to="/membership/terms_conditions">
                              Terms and Conditions
                            </Link>
                            set out above governing the use of your account and
                            the services to be provided together with your
                            account offered by Mentor Sacco and I/we hereby
                            accept them and will abide by them.
                          </label>
                          <div class="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                       </div>

                       <div className="py-5 justify-content-center align-items-center" style={{display: 'flex'}}>
                        <button
                        className="col-3 btn btn-outline-primary rounded"
                        type="submit"
                        // style={{alignSelf: 'center'}}
                        // onClick={() => {
                        //   changeEmail(email)
                        //   changeAuth()
                        //   changeUserCategory(details.name)
                        //   history.push('/user/landing')
                        // }}
                        // onClick={HandleRegistration}
                      >
                        Proceed
                      </button>
                      </div>
                      </div>
                      <div className='error-message'>
                            {
                            errorMessage === 'Network Error' ? " Seems like you are not connected to the internet" :
                            errorMessage === 'Request failed with status code 500' ?
                            'Something went wrong. Please try again later' 
                            : null
                            }
                            </div>
                  </div>


                </div>
              </div>
            </div>
            {/* <div className="row  py-3"> */}
              {/* <div className="col-12 col-md-12"> */}
                {/* <div className="row"> */}
                  {/* <Link
                    className="col-md-6"
                    to="/membership/personal_information"
                  > */}
                    {/* <row className="py-1"> */}
                      {/* <button
                        className="col-3 btn btn-outline-primary rounded"
                        type="submit"
                        // style={{alignSelf: 'center'}}
                        onClick={() => {
                          changeEmail(email)
                          changeAuth()
                          changeUserCategory(details.name)
                          history.push('/user/profile')
                        }}
                      >
                        Proceed
                      </button> */}
                    {/* </row> */}
                  {/* </Link> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </form>
      </div>
}

    </div>
  );
}
