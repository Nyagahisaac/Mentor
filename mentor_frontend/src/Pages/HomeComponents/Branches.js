import React from 'react'
import { Link } from 'react-router-dom'
import BranchMap from '../../images/backgrounds/BranchMap.svg'
import styled from 'styled-components'

function Branches() {
    return (
        <BranchesStyled>
        <div className="row justify-content-center branches-section">
            <div className="col-12">
            <div className="row justify-content-center">
                        <div className="col-10 col-md-10 text-center">
                                <h2 className='section-title-text'>We have branches near you</h2>
                                <p className='section-paragraph'>
                                    We've expanded our branch network to serve you at your comfort.
                                    We've also enabled access to all our services online. But online doesn’t have to mean impersonal—with Mentor Sacco, you get real people to talk to.
                                </p>
                                <Link className="row justify-content-center" to='/location'>
                                    <button className="col-md-4 col-8 btn btn-outline-primary bt-more" type="submit">Find a branch near you</button>
                                </Link>
                            </div>
                        </div>
                    
            </div>
        </div>
        </BranchesStyled>
    )
}

export default Branches

const BranchesStyled = styled.div`
@media (min-width: 769px) {
    .bt-more {
      margin: 2rem 0;
      background-color: #F5811E;
    }
}
@media (max-width: 768px){
    .section-title-text {
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }
  .bt-more {
  margin-bottom: 4rem;
  background-color: #F5811E;
}
}
`
