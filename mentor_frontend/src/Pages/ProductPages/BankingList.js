import {React, useEffect} from 'react'
import ArrowImage from '../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import Girl3 from '../../images/girl3.svg'
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'

function BankingList() {

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
            <a href="/saccoservices" className="breadcrumb-item-override-active">Sacco Services</a>
          </li>
          
        </ol>
      </nav>
      <div className="line"></div>

      <div className="container">

      <div className="row py-3 pc-screen-hidden mt-2r">
                <div className="col-12 col-md-9">
                    <h2 id='subheader'>Sacco Services</h2>
                    <h3 id='subheader'>Who is this for?</h3>
                  <p style={{lineHeight: '35px'}}>Our Sacco services are for all our members who need banking services from us.</p>
                </div>
                    <div className="col-md-3">            
                        
                            <img className="img-fluid" src={Girl3} alt=""/>                        
                    </div>               
             </div>

             <div className="row pc-screen-hidden mt-2r">
                  <div className="row py-2">
                  <h3 className="" id='subheader'>Services offered</h3>
                      <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                      
                          <Link to="/standing_order/application">
                                <div className="row py-3">
                                    <div className="col-10">Standing Orders</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt="arrow icon"/>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                      <Link to="/funds_transfer/application">
                                <div className="row py-3">
                                    <div className="col-10">Funds Transfer</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt="arrowicon"/>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                      <Link to="/account_statement_request/application">
                                <div className="row py-3">
                                    <div className="col-10">Account Statement Request</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt="" />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                      <Link to="/mobile_banking/register">
                                <div className="row py-3">
                                    <div className="col-10">Mobile Banking Services</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt=""/>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                      </div>

                      <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                      <Link to="/atm_card/register">
                                <div className="row py-3">
                                    <div className="col-10">ATM/Visa Services</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt="" />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                      </div>
                      <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                      {/* <Link to="/product/loan"> */}
                                <div className="row py-3">
                                    <div className="col-10">Others</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt=""/>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            {/* </Link> */}
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

export default BankingList
