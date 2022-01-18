import {React, useEffect} from 'react'
import ArrowImage from '../images/icons/arrow.svg'
import { Link } from 'react-router-dom'


const services = [
    {
        'id':'1',
        'service':'Mazao Shares'
    },
    {
        'id':'2',
        'service':'Standing Orders'
    },
    {
        'id':'3',
        'service':'Cheque Clearing'
    },
    {
        'id':'4',
        'service':"Banker's cheque"
    },
    {
        'id':'5',
        'service':'Mentor QFS Mobile Banking'
    },
    {
        'id':'6',
        'service':'Salary/Remittance Processing'
    },
    {
        'id':'7',
        'service':'Safe Custody'
    },
    {
        'id':'8',
        'service':'A.T.M/Visa Services'
    },
]

function Solutions() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <h1 className="text-center">Mentor Sacco Products</h1>
            <div class="row justify-content-center py-2">
                
                <div className="col-9 col-md-4 mx-3 orange-lite-button black-link">
                    <Link to="/product/loans">
                        <div className="row py-3">
                            <div className="col-10">Loans</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>
                

                <div className="col-9 col-md-4 mx-3 blue-lite-button black-link">
                    <Link to="/borrow">
                        <div className="row py-3">
                            <div className="col-10">Buy Shares</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 col-md-4 mx-3 white-dark-button black-link">
                    <Link to="/insure">
                        <div className="row py-3">
                            <div className="col-10">Save Money</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 col-md-4 mx-3 green-lite-button black-link">
                    <Link to="/invest">
                        <div className="row py-3">
                            <div className="col-10">Insurance</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                {/* <div className="col-9 col-md-4 mx-3 orange-lite-button black-link">
                    <Link to="/save-money">
                        <div className="row py-3">
                            <div className="col-10">Salary/Remittances Processing</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 col-md-4 mx-3 white-dark-button black-link">
                    <Link to="/insure">
                        <div className="row py-3">
                            <div className="col-10">Safe Custody</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 col-md-4 mx-3 green-lite-button black-link">
                    <Link to="/invest">
                        <div className="row py-3">
                            <div className="col-10">A.T.M/Visa Services</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div>

                <div className="col-9 col-md-4 mx-3 blue-lite-button black-link">
                    <Link to="/borrow">
                        <div className="row py-3">
                            <div className="col-10">Cheque Clearing</div>
                            <div className="col-1">
                                <img height="15rem" src={ArrowImage} />
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Solutions
