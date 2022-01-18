import {React, useEffect} from 'react'
import ArrowImage from '../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import Girl3 from '../../images/girl3.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'

function Business() {
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
              <a href="/" className="breadcrumb-item-override">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="/solutions/business_services" className="breadcrumb-item-override-active">
                Buisness Solutions
              </a>
            </li>
            
          </ol>
        </nav>
        <div className="line"></div>


        <div className="container py-5">
            <h1>Get the most out of the services we offer</h1>
            <strong className="py-3">We’re here to Mentor you through life’s financial journey. Tell us what you need:</strong>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div class="row py-3">
                        
                        <div className="col-11 col-md-8 mx-3 blue-lite-button black-link">
                            <Link to="/loans/business">
                                <div className="row py-2">
                                    <div className="col-10">Get a loan</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-11 col-md-8 mx-3 white-dark-button black-link">
                            <Link to="/invest">
                                <div className="row py-2">
                                    <div className="col-10">Invest with us</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} />
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-11 col-md-8 mx-3 green-lite-button black-link">
                            <Link to="/insure">
                                <div className="row py-2">
                                    <div className="col-10">Insure</div>
                                    <div className="col-1">
                                        <img height="15rem" src={ArrowImage} alt=""/>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row  mt-2r">
              <div className="col-12 col-md-7">
                <h1 className="pt-5" id="subheader">
                  Not interested in this product?{" "}
                </h1>
                <p>
                  No worries. Check out our other loan products that may
                  interest you
                </p>
                <div className="row py-5">
                  <div className="col-12">
                    <Link to="/">
                      <button
                        className="btn btn-outline-primary rounded"
                        type="submit"
                      >
                        Try Other Products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


        </div>
        </div>
    )
}

export default Business
