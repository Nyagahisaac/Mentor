import {React, useEffect} from 'react'
import ArrowImage from '../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import Girl3 from '../../images/girl3.svg'
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'



function InsureList() {

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
            <a href="/insure" className="breadcrumb-item-override-active">Insure</a>
          </li>
          
        </ol>
      </nav>
      <div className="line"></div>

      
      <div className="container">
             <div className="row py-3 pc-screen-hidden mt-2r">
                <div className="col-12 col-md-9">
                    <h2 id='subheader'>Insure</h2>
                    <h3 id='subheader'>Who is this for?</h3>
                  <p style={{lineHeight: '35px', fontSize: '20px'}}>Our insurance services are for all members who need various insurance covers.</p>
                </div>
                    <div className="col-md-3">            
                        
                            <img className="img-fluid" src={Girl3} alt=""/>
                        
                    </div>
               
             </div>

                   <div className="row pc-screen-hidden mt-2r">
                    
                     
                    <div className="row py-2">
                    <h3 className="" id='subheader'>Insuarance Products</h3>
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/Livestock",
                                state: {
                                insuaranceType: "livestockInsuarance",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Livestock Insurance</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/Medical",
                                state: {
                                insuaranceType: "medicalInsuarance",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Medical Insurance</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/Domestick",
                                state: {
                                insuaranceType: "domesticInsuarance",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Domestic Package</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/Motor",
                                state: {
                                insuaranceType: "motorInsuarance",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Motor Insurance</div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/professionalIndemnity",
                                state: {
                                insuaranceType: "professionalIndemnity",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Professional Indemnity</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/bonds",
                                state: {
                                insuaranceType: "bonds",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Bonds</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/personalAccident",
                                state: {
                                insuaranceType: "personalAccident",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Personal Accidents</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/travelInsuarance",
                                state: {
                                insuaranceType: "travelInsuarance",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Travel Insurance</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/workInjury",
                                state: {
                                insuaranceType: "workInjury",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Work Injury Benefits Act (WIBA)</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/fireandperils",
                                state: {
                                insuaranceType: "fireandperils",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Fire and Perils</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/buisnessInterruption",
                                state: {
                                insuaranceType: "buisnessInterruption",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Business Interruption</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/allRisk",
                                state: {
                                insuaranceType: "allRisk",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">All Risks</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/engineering",
                                state: {
                                insuaranceType: "engineering",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Engineering</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/theft",
                                state: {
                                insuaranceType: "theft",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Theft</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/contractorsallrisk",
                                state: {
                                insuaranceType: "contractorsallrisk",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Contractors All Risks </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 white-dark-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/goodsintransit",
                                state: {
                                insuaranceType: "goodsintransit",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Goods in Transit</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/machineryBreakdown",
                                state: {
                                insuaranceType: "machineryBreakdown",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Machinery Breakdown</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/groupchamas",
                                state: {
                                insuaranceType: "groupchamas",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Group Chamas</div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-10 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/insuaranceproduct/funeralexpenses",
                                state: {
                                insuaranceType: "funeralexpenses",
                                },
                            }}
                        >
                                <div className="row py-3">
                                    <div className="col-10">Last/Funeral Expenses</div>
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

export default InsureList
