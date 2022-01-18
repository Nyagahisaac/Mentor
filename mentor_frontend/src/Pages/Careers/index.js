import React from 'react'
import WhiteHeader from '../../Navigation/WhiteHeader'
import homeIcon from '../../images/icons/homevector.svg'
import { Button } from 'react-bootstrap'
import Image from '../../images/careerspageimager.jpg'


export default function Careers() {
    return (
        <div>
             <WhiteHeader />
           <div className="line"></div>
            <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <img
                src={homeIcon}
                alt=""
                style={{ marginRight: 5, width: "20px", height: "20px" }}
              />
              <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-item-override">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/user/landing" className="breadcrumb-item-override-active">Careers</a>
              </li>
             
            </ol>
          </nav>
          <div className="line"></div>

          <div className='container py-5'>
          <div className=' row col-12 col-md-12 align-items-center justify-content-between'>
            <div className='col-12 col-md-5'>
              <p className='orange'>Careers</p>
              <h2>Join Us and work with us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <Button className="btn btn-transparent-small-orange p-3">
                  See available vacancies
              </Button>
            </div>
            <div className='col-12 col-md-7'>
             <img src={Image} alt="" style={{width: '100%'}}/>
            </div>
          </div>

          </div>

          <div style={{backgroundColor: '#F5811E', color: '#fff'}} className='py-5'>
            <div className='container'>
            <h2 id="subheader" 
            className='text-center pb-5' 
            style={{fontWeight: '700', fontSize: '30px'}}>
            Why Join Us
            </h2>
              <div className='row col-12 col-md-12 pb-5'>
                  <div className='col-12 col-md-4'>
                     <p><strong>Fast growing company</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className='col-12 col-md-4'>
                  <p><strong>Great colleagues</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className='col-12 col-md-4'>
                  <p><strong>Take charge</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
              </div>

              <div className='row col-12 col-md-12 pt-5'>
                  <div className='col-12 col-md-4'>
                  <p><strong>Don't stop learning</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className='col-12 col-md-4'>
                  <p><strong>Reason 1</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className='col-12 col-md-4'>
                  <p><strong>Reason 2</strong></p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
              </div>
            </div>
          </div>

          <div className='container justify-content-center'>
            <h2 id="subheader" className='text-center py-5'>Open Positions</h2>
            <div className='col-12 col-md-12 open-position mb-5'>
              <p><strong>Job Title 1</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p style={{color: '#30569F'}}>Learn more</p>
            </div>
            <div className='col-12 col-md-12 open-position mb-5'>
              <p><strong>Job Title 1</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               <p style={{color: '#30569F'}}>Learn more</p>
            </div>
          </div>

          <div style={{backgroundColor: '#F5811E', color: '#fff'}} className='py-5'>
             <div className='container'>
               <div className='row col-12 col-md-12'>
                   <div className='col-12 col-md-5'>
                      <h2 className='px-4 pt-4'>Don’t see a vacancy that is right for you?</h2> 
                   </div>
                   <div className='col-12 col-md-7'>
                     <p className='px-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     <button className='btn btn-success my-4 p-3 mx-3'>
                         send us your resume
                     </button>
                   </div>
               </div>
             </div>
          </div>

        </div>
    )
}
