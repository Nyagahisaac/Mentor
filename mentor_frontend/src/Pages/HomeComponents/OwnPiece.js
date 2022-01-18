import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Own from '../../images/backgrounds/OwnPiece.svg'
function OwnPiece() {
    return (
        <OwnPieceStyled>

        <div className='mobile'>
          <div className="row justify-content-center align-items-center text-white orange-section">          
           <h1 className="hero-text pb-5 mb-3" style={{fontWeight: '550'}}>Want to Join the Next Biggest Sacco?</h1>
           <img className="img-fluid" src={Own} alt="" />
           <p className='p-3 text-center'>Membership in the Sacco is open to all Kenyans. </p>
                <p className='px-3 text-center'>It’s time to take action and ensure your financial future is in safe hands. Head over to our membership page and join our family of 25000+ happy members.</p>
                <Link className="row py-3 mx-5 mb-3 text-center" to='/memberships'>
                    <button className="col-md-5 mx-5 col-8 my-1 py-3 btn btn-outline-success" type="submit">Become a Member</button>
                </Link>
           </div>
        </div>

           <div className='pc'>
           <div className="row justify-content-center align-items-center text-white orange-section">
           <div className="col-10">
                <div className="row justify-content-center">
                <div className="col-12 col-md-7 d-flex">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='pt-5 pc-title-text'>Want to Join the Next Biggest Sacco?</h1>
                            <p className='pc-pg-text'>Membership in the Sacco is open to all Kenyans. </p>
                            <p className='pc-pg-text'>It’s time to take action and ensure your financial future is in safe hands. Head over to our membership page and join our family of 25000+ happy members.</p>
                            <Link className="row py-3 mx-1" to='/memberships'>
                                <button className="col-md-5 col-12 my-1 py-4 btn btn-outline-success" type="submit">Become a Member</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex align-items-center">
                    <img className="img-fluid" src={Own} alt="" />
                </div>
                </div>
                </div>
           </div>
           </div>
           </OwnPieceStyled>
    )
}

export default OwnPiece

const OwnPieceStyled = styled.div`
.orange-section {
    background-color: #F5811E;
    margin-top: 4.5rem;
    padding: 3rem 0rem;
    /* height: 90vh; */
  }
  .pc-title-text{
    font-weight: 600;
    font-size: 60px;
    line-height: 90px;
  }
  .pc-pg-text{
    font-size: 22px;
    line-height: 33px; 
  }
@media (min-width: 767px) {
 .mobile {
     display: none;
     
 }
}
@media (max-width: 768px){
  .pc {
      display: none;
      
  }
}
`
