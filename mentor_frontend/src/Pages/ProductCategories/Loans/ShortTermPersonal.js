import {React, useEffect} from 'react'
import ArrowImage from '../../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import BusinessLoans from '../../../images/BusinessLoans.svg'
import homeIcon from '../../../images/icons/homevector.svg'
import WhiteHeader from '../../../Navigation/WhiteHeader'

function ShortTermPersonal() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <WhiteHeader />
      <div className="line"></div>
        
        
        <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
            <ol className="breadcrumb">
           <img src={homeIcon} alt="" style={{marginRight: 5, width: '20px', height: '20px'}}/>
          <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-item-override">Home</a></li>
          <li className="breadcrumb-item">
          <a href="/borrow" className="breadcrumb-item-override">Borrow</a></li>
         <li className="breadcrumb-item active" aria-current="page">
         <span className="breadcrumb-item-override-active">Short Term Loans</span>
         </li>
        </ol> 
        </nav>

        <div className="line"></div>
        <div className="container">
            <div className="row py-3 mt-2r">
                <div className="col-md-10">
                    <h2 id="subheader">Short-Term Personal Loans</h2>
                    {/* <h3>Who is this for?</h3> */}
                    <strong>Select a loan that suits you</strong>
                    <p className="py-3">These loans are meant to plug into your short-term needs</p>
                    <div class="row py-2">
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link to={{
                                pathname: '/loaninfo/emrgencyloan',
                                state: {
                                    loanType: "emergencyLoan",
                                    loanCategory: "Short Term Loans",
                                    loanLink: '/solutions/short_term_personal_services'
                                }
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Emergency Loan</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link to={{
                                pathname: '/loaninfo/emrgencyloan',
                                state: {
                                    loanType: "salaryadvanceLoan",
                                    loanCategory: "Short Term Loans",
                                    loanLink: '/solutions/short_term_personal_services'
                                }
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Salary Advance</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link to={{            
                                pathname: '/loaninfo/emrgencyloan',
                                state: {
                                    loanType: "quickfixLoan",
                                    loanCategory: "Short Term Loans",
                                    loanLink: '/solutions/short_term_personal_services'
                                }
                                
                            }}>
                                <div className="row py-3">
                                    <div className="col-10">Quick</div>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="row" style={{marginTop: '10vh'}}>
                    <div className="col-12 col-md-7">
                        <h1 className="pt-3" id="subheader">Didn't find what you are Looking for? </h1>
                        <p>No worries. Check out our other loan products that may interest you</p>
                        <div className="row py-5">
                            <div className="col-12">
                                <Link to="/borrow">
                                    <button className="btn btn-outline-primary rounded" type="submit">Try Other Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>                  
                </div>
                
                </div>
            </div>
        </div>
        </div>
    )
}

export default ShortTermPersonal
