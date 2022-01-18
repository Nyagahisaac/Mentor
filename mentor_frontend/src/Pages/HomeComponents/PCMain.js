import React from 'react'
import { Link } from 'react-router-dom'
import SaveImage from '../../images/icons/save.svg'
import BorrowImage from '../../images/icons/borrow.svg'
import InsureImage from '../../images/icons/insure.svg'
import BankImage from '../../images/icons/bank.svg'
import InvestImage from '../../images/icons/invest.svg'

function MobileMain() {
    return (
        <div class="col-md-6 my-5 py-5 text-center">
            <h1>Karibu Mentor Sacco<br />
                What would you like to do today?
            </h1>
            <div class="row justify-content-center py-3 black-link">
                <Link to="/save-money" class="col herolinks">
                    <figure>
                        <img height="45rem" src={SaveImage} alt=""/>
                        <figcaption>Save</figcaption>
                    </figure>
                </Link>
                <Link to="/product/loans" class="col herolinks">
                    <figure>
                        <img height="45rem" src={BorrowImage} alt=""/>
                        <figcaption>Borrow</figcaption>
                    </figure>
                </Link>
                <Link to="/invest" class="col herolinks">
                    <figure>
                        <img height="45rem" src={InvestImage} alt=""/>
                        <figcaption>Invest</figcaption>
                    </figure>
                </Link>
                <Link to="/banking" class="col herolinks">
                    <figure>
                        <img height="45rem" src={BankImage} alt=""/>
                        <figcaption>Banking Services</figcaption>
                    </figure>
                </Link>
                
                <Link to="/insure" class="col herolinks">
                    <figure>
                        <img height="45rem" src={InsureImage} alt=""/>
                        <figcaption>Insure</figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default MobileMain
