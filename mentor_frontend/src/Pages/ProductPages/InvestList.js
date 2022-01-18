import {React, useEffect} from 'react'
import ArrowImage from '../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import BusinessLoans from '../../images/BusinessLoans.svg'
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'
import BusinessLoan from '../../images/BusinessLoans.svg'

function InvestList() {
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
          <li className="breadcrumb-item">
            <a href="/invest" className="breadcrumb-item-override-active">Invest</a>
          </li>
          
        </ol>
      </nav>
      <div className="line"></div>


      <div className="container">
             <div className="row py-3 pc-screen-hidden mt-2r">
                <div className="col-12 col-md-7">
                    <h2 id='subheader'>Investment Products That Make you Money</h2>
                    <h3 id='subheader'>Who is this for?</h3>
                  <p style={{lineHeight: '35px'}}>Our Investment Products are for all our members who need investment services from us.</p>
                </div>
                    <div className="col-md-5">                                    
                            <img className="img-fluid" src={BusinessLoan} alt=""/>                      
                    </div>              
                </div>

                <div className="row pc-screen-hidden mt-2r">
                  <div className="row py-2">
                  <h3 className="" id='subheader'>Investment products</h3>
                      <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                      <Link 
                      // to="/product/loan"
                      to="/invest"
                      >
                                        <div className="row py-3">
                                            <div className="col-10">Share Capital (Own a piece of Mentor)</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt=""/>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                      <Link 
                      // to="/product/loan"
                      to="/invest"
                      >
                                        <div className="row py-3">
                                            <div className="col-10">Mazao Shares</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt="" />
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                      <Link 
                      // to="/product/loan"
                      to="/invest"
                      >
                                        <div className="row py-3">
                                            <div className="col-10">Ordinary Shares</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt="" />
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                      <Link 
                      // to="/product/loan"
                      to="/invest"
                      >
                                        <div className="row py-3">
                                            <div className="col-10">FOSA Shares</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} alt="" />
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                      </div>
                  </div>
             </div>

         <div className="row" style={{marginTop: '10vh'}}>
                  <div className="col-12 col-md-7">
                      <h1 className="pt-3" id="subheader">Didn't find what you are Looking for? </h1>
                      <p>No worries. Check out our other loan products that may interest you</p>
                      <div className="row py-5">
                          <div className="col-12">
                              <Link to="/">
                                  <button className="btn btn-outline-primary rounded" type="submit">Try Other Products</button>
                              </Link>
                          </div>
                      </div>
                  </div>                  
              </div>


        </div>
        </div>
    )
}

export default InvestList
