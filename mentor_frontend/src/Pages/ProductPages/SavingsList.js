import {React, useEffect} from 'react'
import ArrowImage from '../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import BusinessLoans from '../../images/BusinessLoans.svg'
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'

function SavingsList() {
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
                    <a href="/save-money" className="breadcrumb-item-override-active">Save</a>
                </li>
                
                </ol>
                </nav>
            <div className="line"></div>

            <div className='container py-4'>
                <div className="row py-3 pc-screen-hidden mt-2r">
                    <div className="col-12 col-md-9">
                        <h2 id='subheader'>Saving Plans for your needs</h2>
                        <h3 id='subheader'>Who is this for?</h3>
                    <p style={{lineHeight: '35px', fontSize: '20px'}}>Our saving plans are for all Mentor Sacco members.</p>
                    </div>
                        <div className="col-md-3">            
                            
                                <img className="img-fluid"src={BusinessLoans} alt=""/>
                            
                        </div>
                
                </div>

                <div className="row py-5">
                 <h3 className="" id='subheader'>Apply Below</h3>

                 <div className="col-10 col-md-5 mx-3 orange-lite-button black-link">
                       <Link 
                            to={{
                                pathname: "/savingsproduct/juniorAccount",
                                state: {
                                    savingsType: "mentorJunior",
                                },
                            }}
                       >
                            <div className="row py-3">
                                <div className="col-10">Mentor Junior Account (My Child)</div>
                                <div className="col-1">
                                    <img height="15rem" src={ArrowImage} alt="" />
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </Link>
                        </div>

                        <div className="col-9 col-md-5 mx-3 blue-lite-button black-link">
                        <Link
                            to={{
                                pathname: "/savingsproduct/savingsAccount",
                                state: {
                                    savingsType: "savingsAccount",
                                },
                            }}
                        >
                            <div className="row py-3">
                                <div className="col-10">Savings Account (Myself)</div>
                                <div className="col-1">
                                    <img height="15rem" src={ArrowImage} alt=""/>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-10 col-md-5 mx-3 green-lite-button black-link">
                    <Link
                            to={{
                                pathname: "/savingsproduct/holidayAccount",
                                state: {
                                    savingsType: "holidayAccount",
                                },
                            }}
                    >
                            <div className="row py-3">
                                <div className="col-10">Holiday Account (A holiday)</div>
                                <div className="col-1">
                                    <img height="15rem" src={ArrowImage} alt="" />
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </Link>
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
        </div>
    )
}

export default SavingsList
