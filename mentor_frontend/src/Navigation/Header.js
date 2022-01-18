import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.svg'
import MenuIcon from '../images/icons/hambugericon.svg'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, logoutStateClear, getCurrentUser } from '../store/slices/AuthSlice';

export default function Header() {
  const history = useHistory()
  // const userFromState = useSelector(authSelector).user
  // console.log('userFromState', userFromState)
  const dispatch = useDispatch()
  const [loggedUser, setLoggedUser] = useState('')
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false)

  useEffect(() => {
    // const userObject = localStorage.getItem('user')
    // const user = userFromState ? userFromState :  JSON.parse(userObject) ? JSON.parse(userObject) : ''
    // setLoggedUser(user)
    dispatch(getCurrentUser())
  }, [])

  return (
    <HeaderStyled>
    <div className="container">
      <nav className='pc'>
        <img src={Logo} className='img-fluid' alt="" />


        <ul className="middle">

          {/* <li 
          className='middle-item text-white dropdown dropdown-toggle'
          style={{fontWeight: '400'}}
          id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false"
          >
          About us
          </li>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/about-us">Who we are</Link></li>
              <li><Link className="dropdown-item" to="#">Careers</Link></li>
              <li><Link className="dropdown-item" to="#">Press Releases</Link></li>
          </ul> */}
          <div className='middle-item text-white dropdown'>
       <Link 
       className='dropdown-toggle text-white'
       id="navbarDropdown1" 
       role="button" 
       data-bs-toggle="dropdown" 
       aria-expanded="false"
       style={{fontWeight: '400'}}
       >
         About us
       </Link>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
              <li><Link className="dropdown-item" to="/about-us">Who we are</Link></li>
              <li><Link className="dropdown-item" to="/events">Events</Link></li>
              <li><Link className="dropdown-item" to="/news">Press Releases</Link></li>
      </ul>
       </div>

          <div className='middle-item text-white dropdown'>
       <Link 
       className='dropdown-toggle text-white'
       id="navbarDropdown2" 
       role="button" 
       data-bs-toggle="dropdown" 
       aria-expanded="false"
       style={{fontWeight: '400'}}
       >
         Our Solutions
       </Link>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
          <li><Link className="dropdown-item" to="/solutions/personal_services">Personal</Link></li>
          <li><Link className="dropdown-item" to="/solutions/business_services">Business</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/solutions/corporate_services">Corporate</Link></li>
      </ul>
       </div>
          <li className='middle-item text-white'
          style={{fontWeight: '400'}}
          >
          <Link 
          className='text-white'
          style={{fontWeight: '400'}}
          to="/memberships">
          Membership
          </Link>
          </li>
        </ul>
        {isAuth ? 
                <div className='usernameSection'>
                <div>
                <img 
                src='data:image/png;base64,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' 
                style={{height: '30px', width: '30px', borderRadius: '15px'}} 
                alt=""  
                />
                </div>
                <li class="nav-item dropdown navlink-item">
                        <div class="nav-link-orange dropdown-toggle" id="navbarDropdown username" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* {userFromState.first_name} */}
                        </div>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="dropdown-item p-3"  
                            onClick={ () => {
                              dispatch(logoutStateClear())
                              localStorage.clear()
                              history.push('/user/member_login')
                            }}
                            >
                            Logout
                            </li>
                           
                        </ul>
                    </li>
                </div>
                :
       <ul className='end'>
       <li className='end-item'>
       <button 
       className="btn" 
       type="submit"
       
       onClick={() => history.push('/memberships')}
       >
       Join Us
       </button>
       </li>
         <li className='end-item'>
         <button 
         className="btn btn-member" 
         type="submit"
         onClick={() => history.push('/user/member_login')}
         >
         Member Login
         </button>
         </li>
       </ul>
}
      </nav>

      <nav className='mobile'>
      <img src={Logo} className='img-fluid' alt="" />
      <button        
      className='menubutton'
      data-bs-toggle="collapse" 
      data-bs-target="#navbarToggleExternalContent" 
      aria-controls="navbarToggleExternalContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
         <img src={MenuIcon} classname="img-fluid" alt="" /> 
        {/* <span className="navbar-toggler-icon"></span> */}
      </button>
      </nav>

      <div className="collapse" id="navbarToggleExternalContent">
      <div className="small-nav-items p-4">
       <div className='small-nav-item dropdown'>
       <Link to="/about-us" className='dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         About Us
       </Link> 
       {/* <button class="dropbtn">About us</button> */}
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/about-us">Who we are</Link></li>
              <li><Link className="dropdown-item" to="/events">Events</Link></li>
              <li><Link className="dropdown-item" to="/news">Press Releases</Link></li>
      </ul>
      {/* <ul className="dropdown-content" aria-labelledby="navbarDropdown">
          <li><Link className="dropdown-item" to="/about-us">Who we are</Link></li>
          <li><Link className="dropdown-item" to="/careers">Careers</Link></li>
          <li><Link className="dropdown-item" to="/news">Press Releases</Link></li>
      </ul> */}
       </div>
       <div className='small-nav-item dropdown'>
       <Link className='dropdown-toggle'
       id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false"
       >
         Our Solutions
       </Link>
       <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
          <li><Link className="dropdown-item" to="/solutions/personal_services">Personal</Link></li>
          <li><Link className="dropdown-item" to="/solutions/business_services">Business</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/solutions/corporate_services">Corporate</Link></li>
      </ul>
       </div>
       <div className='small-nav-item'>
       <Link to="/memberships">
         Membership
       </Link>
       </div>
       <div className='small-nav-buttons'>
       <button 
       className="btn btn1" 
       type="submit"
       onClick={() => history.push('/memberships')}
       >
       Join Us
       </button>
       <button 
       className="btn btn-member" 
       type="submit"
       onClick={() => history.push('/user/member_login')}
       >
         Member Login
         </button>
       </div>
  </div>
      </div>
    </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
 .middle{
  display: flex;
  justify-content: space-between;
  font-weight: 600;
 }
 .middle-item {
   padding: 0px 10px;
 }
 .end{
  display: flex;
 }
 .end-item {
  padding: 0px 10px;
 }
 ul {
   list-style: none;
 }
 .btn {
   padding: 10px
 }
 .menubutton {
   padding: 5px;
   background-color: transparent !important;
   border: none !important;
 }
 .small-nav-items {
   background-color: #fff;
   display: flex;
   flex-direction: column;
   border-radius: 5px;
 }
 .small-nav-item {
   color: #000;
   font-weight: 600;
   font-size: 16px;
   padding-bottom: 10px;
 }
 .small-nav-buttons {
   display: flex;
   padding: 10px 0px;  
 }
 .btn1 {
   margin-right: 20px;
 }

 @media (max-width: 991px){
    .pc {
      display: none;
    }
    .mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
}
@media (min-width: 992px) {
    .mobile {
      display: none;
    }
    .pc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
}


`