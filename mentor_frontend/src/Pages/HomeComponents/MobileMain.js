import React from 'react'
import { Link } from 'react-router-dom'
import ArrowImage from '../../images/icons/arrow.svg'

function PCMain() {
    return (
        <div class="col-md-6 my-5 py-5">
            <h1 className="text-center">Karibu Mentor Sacco<br />
                What would you like to do today?
                Mobile
            </h1>
            
            <div class="row justify-content-center py-5">
                
                <div className="col-9 orange-lite-button black-link">
                    <Link to="/save-money">
                        <div className="row">
                            <div className="col-10">Save</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>
                

                <div className="col-9 blue-lite-button black-link">
                    <Link to="/product/loans">
                        <div className="row">
                            <div className="col-10">Borrow</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 white-dark-button black-link">
                    <Link to="/invest">
                        <div className="row">
                            <div className="col-10">Invest</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>
                <div className="col-9 orange-lite-button black-link">
                    <Link to="/banking">
                        <div className="row">
                            <div className="col-10">Banking Services</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 green-lite-button black-link">
                    <Link to="/insure">
                        <div className="row">
                            <div className="col-10">Insure</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PCMain
