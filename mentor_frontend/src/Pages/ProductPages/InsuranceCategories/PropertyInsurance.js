import {React, useEffect} from 'react'
import ArrowImage from '../../../images/icons/arrow.svg'
import { Link } from 'react-router-dom'
import Girl3 from '../../../images/girl3.svg'

function PropertyInsurance() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <h1 className="text-center">Select a property insurance product that suits your needs</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div class="row justify-content-start py-2">
                                <div className="col-9 col-md-4 mx-3 orange-lite-button black-link">
                                    <Link to="/product/loan">
                                        <div className="row py-3">
                                            <div className="col-10">Commercial property insurance</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} />
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="col-9 col-md-4 mx-3 blue-lite-button black-link">
                                    <Link to="/product/loan">
                                        <div className="row py-3">
                                            <div className="col-10">Residential property insurance</div>
                                            <div className="col-1">
                                                <img height="15rem" src={ArrowImage} />
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pc-screen-hidden">
                            <img height="390vh" src={Girl3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyInsurance
