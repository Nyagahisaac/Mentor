import React from 'react'
import SavePig from '../../images/icons/savePig.svg'
import BorrowHand from '../../images/icons/BorrowHand.svg'
import InvestGraph from '../../images/icons/InvestGraph.svg'
import BankingHouse from '../../images/icons/BankingHouse.svg'
import InsureShield from '../../images/icons/InsureShield.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function StartSolutions() {
    return (
        <SolutionsStyled>
        <div className="row justify-content-center solutions-section" style={{backgroundColor: '#fff'}}>
            <h2 className="text-center" id="started">Solutions to Get You Started</h2>
            <div className="col-10 col-md-10">
                <div className="row justify-content-center solutionslinks">
                    <div className="col-4 col-md-2 service-btn">
                        <Link to="/save-money">
                            <figure className="row justify-content-center pt-3">
                                <img className="col-8 col-md-6 img-fluid" src={SavePig} alt="" />
                                <figcaption className="text-center pt-2">Save</figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-4 col-md-2 service-btn">
                        <Link to="/borrow">
                            <figure className="row justify-content-center pt-3">
                                <img className="col-8 col-md-6" src={BorrowHand} alt="" />
                                <figcaption className="text-center pt-2">Borrow</figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-4 col-md-2 service-btn">
                        <Link to="/invest">
                            <figure className="row justify-content-center pt-3">
                                <img className="col-8 col-md-6" src={InvestGraph} alt="" />
                                <figcaption className="text-center pt-2">Invest</figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-4 col-md-2 service-btn">
                        <Link to="/saccoservices">
                            <figure className="row justify-content-center pt-3">
                                <img className="col-8 col-md-6" src={BankingHouse} alt="" />
                                <figcaption className="text-center pt-2">Sacco Services</figcaption>
                            </figure>
                        </Link>
                    </div>
                    <div className="col-4 col-md-2 service-btn">
                        <Link to="/insure">
                            <figure className="row justify-content-center pt-3">
                                <img className="col-8 col-md-6" src={InsureShield} alt="" />
                                <figcaption className="text-center pt-2">Insure</figcaption>
                            </figure>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </SolutionsStyled>
    )
}

export default StartSolutions

const SolutionsStyled = styled.div`
.solutionslinks a{
  font-family: 'Poppins', sans-serif;
  color: #067C4B;
  font-weight:600;
}
.solutionslinks a:hover{
  font-family: 'Poppins', sans-serif;
  color: #F5811E;
  font-weight:600;
}
.service-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .service-btn:hover{
    background-color: rgba(0, 0, 0, 0.075);
    border-radius: 8px;
}

@media (max-width: 768px){
    .solutions-section {
    padding-top: 2rem;
    padding-bottom: 2.5rem;
    }

    #started {
    font-size: 1.5rem;
    font-weight: 600;    
    padding-bottom: 1.5rem; 
    }
}
@media (min-width: 769px) {
    .solutions-section {
    padding-top: 4rem;
    }
    #started {
    font-size: 1.5rem;
    font-weight: 500;    
    padding-bottom: 1.5rem; 
    }
}
`