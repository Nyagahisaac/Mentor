import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function MentoringJourneyCalc() {
    return (
        <MentoringJourneyCalcStyled>
        <div className="row justify-content-center bg-white mentoring-section">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 text-center">
                        <div className="mentoring-text">We Are Mentoring Your Financial Journey for Big Moments Like Now</div>
                        </div>
                        <div className="col-10 col-md-10 text-center">
                        <p className="mentoring-paragraph">“Traditional financial institutions are organized for efficiency and consistency, but not flexibility. Flexibility comes from surprises, humanity and transparency. If you have to put it all in a manual, then the chances of amazing someone are very low. Mentor Sacco has always amazed me with their excellent products and services. We love Mentor’s services.” </p>
                    </div>
                    <div className="col-10 col-md-10 text-center">
                        <p className="bold-name pb-3">George, Magnum Electricals</p>
                        <p className='tagline1'>Like George from Magnum Electricals, you’ll love our services. 
                        <br />
                            Apply for a personal or business loan. Find out how much you qualify for hassle-free.</p> <br />
                        <Link to='/about-us'>
                            <button className="col-8 col-md-3 btn btn-outline-success bt-more" type="submit">Learn More</button>
                        </Link>
                    </div>
                    </div>
            </div>
        </div>
        </MentoringJourneyCalcStyled>
    )
}

export default MentoringJourneyCalc

const MentoringJourneyCalcStyled = styled.div`
.bold-name {
    font-weight: 550;
}
.tagline1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: rgba(0, 0, 0, 0.6); 
}
@media (max-width: 768px){
    .mentoring-text {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  .mentoring-paragraph {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    line-height: 24px;
  }
  .bt-more {
  margin-bottom: 4rem;
}
}
@media (min-width: 769px) {
    .mentoring-text {
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  .bt-more {
  margin: 2rem 0;
}
}
`
