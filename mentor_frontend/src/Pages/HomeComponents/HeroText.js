import React from 'react'
import { useHistory } from 'react-router-dom'

function HeroText( {scroll} ) {
    const history = useHistory()
    return (
        <div className="container pt-2">
            <div className="col-12 col-md-7 text-white hero-text-padding">
                <h1 className="hero-text">Karibu Mentor Sacco<br />How Can We Help You Today?</h1>
               {/*  <div className="row"> */}
                    <div className="hero-p-text">
                        <p><b>With efficient, consistent and reliable services, Mentor Sacco will give you the flexibility you need to take advantage of whatever opportunities come your way.</b></p>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="row bt-hero">
                        
                            <button 
                            className="col-6 col-md-12 btn btn-success btn-hero" 
                            onClick={() => {
                                scroll()
                                history.push('/memberships')
                                }}
                                >
                            <strong>GET STARTED</strong>
                            </button>
                            
                        </div>
                    </div>
               {/*  </div> */}
            </div>
        </div>
    )
}

export default HeroText
