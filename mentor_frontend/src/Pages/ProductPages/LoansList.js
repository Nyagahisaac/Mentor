import {React, useEffect} from 'react'
import BusinessLoan from '../../images/BusinessLoans.svg'
import { Link } from 'react-router-dom'
import Girl3 from '../../images/girl3.svg'
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'

function LoansList() {
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
            <a href="/borrow" className="breadcrumb-item-override-active">Borrow</a>
          </li>
          
        </ol>
      </nav>
      <div className="line"></div>

      
      <div className="container">
             <div className="row py-3 pc-screen-hidden mt-2r">
                <div className="col-12 col-md-6">
                    <h2 id='subheader'>Borrow</h2>
                    <h3 id='subheader2'>Who is this for?</h3>
                  <p style={{lineHeight: '35px'}}>All our members can borrow any amount depending on their saving contributions.</p>
                </div>
                    <div className="col-11 col-md-5">            
                        
                            <img className="img-fluid" src={BusinessLoan} alt=""/>
                        
                    </div>
               
             </div>

                   <div className="row pc-screen-hidden mt-2r">
                    
                      {/*  <div class="row py-2">
                      
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link"></div>
                            <Link to="/solutions/development_loans_services">
                                <div className="row py-3">
                                    <div className="col-5">Development Loans</div>
                                </div>
                            </Link>
                            <Link to="/loans/personal">
                                <div className="row py-3">
                                    <div className="col-10">Personal Loans</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6">
                        <div className="col-9 col-md-5 mx-3 blue-lite-button black-link">
                           
                        </div>

                        <div className="col-9 col-md-5 mx-3 green-lite-button black-link">
                            <Link to="/solutions/short_term_personal_services">
                                <div className="row py-3">
                                    <div className="col-10">Short-Term Personal Loans</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-9 col-md-5 mx-3 white-dark-button black-link">
                            <Link to="/loans/business">
                                <div className="row py-3">
                                    <div className="col-10">SME and Business Loans</div>
                                </div>
                            </Link>
                        </div>
                    </div> */}

                    <div className="row py-2">
                    <h3 className="" id='subheader'>Loan Categories</h3>
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to="/solutions/development_loans_services">
                                <div className="row py-3">
                                    <div className="col-10">Development Loans</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link to="/loans/personal">
                                <div className="row py-3">
                                    <div className="col-10">Personal Loans</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link to="/solutions/short_term_personal_services">
                                <div className="row py-3">
                                    <div className="col-10">Short-Term Personal Loans</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link to="/loans/business">
                                <div className="row py-3">
                                    <div className="col-10">SME and Business Loans</div>
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

export default LoansList
