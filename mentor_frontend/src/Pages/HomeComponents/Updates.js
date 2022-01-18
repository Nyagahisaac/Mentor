import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NewsUpdates from '../../images/NewsUpdate.svg'

function Updates() {
    return (
        < UpdatesStyled>
        <div className='mobile'>
            <div className="row mt-4r justify-content-center align-items-center">
            <h2 className='pt-5 text-center'>See what’s been happening in and around us</h2>
            <img className="rounded mt-4" width='90%' src={NewsUpdates} alt="" />
            <p className='mobile-p pt-5'>To stay updated, check out our latest news and events. </p>
            <Link className="text-center my-3" to='/news'>
                <button className="col-md-8 col-8 py-3 btn btn-outline-success" type="submit">Find out more</button>
            </Link>
        </div>
        </div>


         <div className='pc'>
        <div className="row mt-4r justify-content-center">
            <div className="col-12 col-md-11">
                <div className="row justify-content-center align-items-center">
                    <div className="col-11 col-md-6">
                        <img className="rounded" width='90%' src={NewsUpdates} alt="" />
                    </div>
                    <div className="col-10 col-md-4">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='py-3'>See what’s been happening in and around us</h2>
                                <p>To stay updated, check out our latest news and events. </p>
                                <Link className="row align-self-left my-1 py-2 mx-1" to='/news'>
                                    <button className="col-md-8 col-12 py-3 btn btn-outline-success" type="submit">Find out more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </UpdatesStyled>
    )
}

export default Updates

const UpdatesStyled = styled.div`
.mobile-p {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    align-items: center;
    text-align: center;   
    color: rgba(0, 0, 0, 0.6);
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
