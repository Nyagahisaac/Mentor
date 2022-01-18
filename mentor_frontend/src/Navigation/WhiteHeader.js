import React, { useState, useEffect} from 'react'
import { Link, useHistory} from 'react-router-dom';
import '../index.css';
import Logo from '../images/logo.svg'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, logoutStateClear, getCurrentUser } from '../store/slices/AuthSlice';
import Dashboard from './Dashboard'

function Header() {
   //const {isAuth,  email, logOut} =useContext(AuthContext)
  
  const history = useHistory()
  // const userFromState = useSelector(authSelector).user
  // console.log('userFromState', userFromState)
  const dispatch = useDispatch()
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token') ? true : false)


  useEffect(() => {
  // const userObject = localStorage.getItem('user')
  // const user = userFromState ? userFromState :  JSON.parse(userObject) ? JSON.parse(userObject) : ''
  // setLoggedUser(user)
  dispatch(getCurrentUser())
}, [])

  // console.log('user', user)
    return (
        <HeaderStyled>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white"> 
            <div className="container">
                <Link className="navbar-brand pc-screen-hidden" to="/">
                    <img height="60px" src={Logo} alt="" />
                </Link>
                <Link className="navbar-brand mobile-screen-hidden" to="/">
                    <img height="46px" src="./images/logo2.svg" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-items-main2 middle">
                    <li class="nav-item dropdown navlink-item"
                    style={{fontWeight: '400'}}
                    >
                        <Link 
                        class="nav-link-orange dropdown-toggle" 
                        href="#" 
                        style={{fontWeight: '400'}}
                        id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/about-us">Who we are</Link></li>
                        <li><Link className="dropdown-item" to="/events">Events</Link></li>
                        <li><Link className="dropdown-item" to="/news">Press Releases</Link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown navlink-item"
                    style={{fontWeight: '400'}}
                    >
                        <Link 
                        class="nav-link-orange dropdown-toggle" 
                        href="#" 
                        style={{fontWeight: '400'}}
                        id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Solutions
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to="/solutions/personal_services">Personal</Link></li>
                            <li><Link class="dropdown-item" to="/solutions/business_services">Business</Link></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><Link class="dropdown-item" to="/solutions/corporate_services">Corporate</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item navlink-item"
                    style={{fontWeight: '400'}}
                    >
                        <Link className="nav-link-orange" aria-current="page" to="/memberships">Membership</Link>
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
                            <li class="dropdown-item"  
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
                <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                            <Link to="/memberships">
                                <button 
                                // className="btn btn-outline-success navbuttonspacers" type="submit">Join Us</button>
                                className="btn navbuttonspacers" type="submit">Join Us</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/member_login">
                                <button 
                                //className="btn btn-outline-success btn-member" 
                                className="btn btn-member"
                                type="submit">Member Login</button>
                            </Link>
                        </li>
                </ul>
                }
                </div>
            </div>
        </nav>
        </HeaderStyled>
    )
}

export default Header

const HeaderStyled = styled.div`
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
}
.navbar-light .navbar-nav  {
  font-family: 'Poppins', sans-serif;
  color: #F5811E;
  font-weight:400;
  justify-content: space-evenly;
  align-self: flex-end;

}
.nav-link-white {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  font-weight:400;
}
/* .navbar-items-main {
  font-family: 'Poppins', sans-serif;
  color: #F5811E;
  font-weight:400;
} */

.navbar-light:hover .navbar-nav:hover .nav-link-white:hover, .nav-link-orange:hover {
  font-family: 'Poppins', sans-serif;
  color: #067C4B;
  font-weight:400;
}
.navbar-items-main {
  margin-left: 20%;
  padding-bottom: 5px;
  /* background: blue; */
}
.navbar-items-main2 {
  margin-left: 10%;
  padding-bottom: 5px;
  /* background: blue; */
}
.navlink-item {
  padding: 0 20px;
}

@media (min-width: 769px){
    .navbar-items-main {
  margin-left: 5%;

}

}

@media (min-width: 1025px){
.navbar-items-main {
  margin-left: 35%;
  }
}

@media (min-width: 1440px){
.navbar-items-main {
  margin-left: 20%;
  }
}

@media (min-width: 2560px){
.navbar-items-main {
  margin-left: 45%;
  }
}
`