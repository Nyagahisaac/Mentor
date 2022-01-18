/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useRef, useEffect} from 'react'
import '../index.css';
import Header from '../Navigation/Header'
import Footer from '../Navigation/Footer'
import MobileMain from './HomeComponents/PCMain'
import PCMain from './HomeComponents/MobileMain'
import styled from 'styled-components'

import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
// import InfiniteCarousel from '../components/InfiniteCarousel';
import HeroText from './HomeComponents/HeroText';
import StartSolutions from './HomeComponents/StartSolutions';
import MentoringJourneyCalc from './HomeComponents/MentoringJourneyCalc';
import Branches from './HomeComponents/Branches';
import OwnPiece from './HomeComponents/OwnPiece';
import Updates from './HomeComponents/Updates';
// import BgImg from '../images/mentor-bg.jpeg';
import Img1 from '../images/newsImages/newsimage1.svg';
import Img2 from '../images/newsImages/newsimage2.svg';
import Img3 from '../images/newsImages/newsimage3.svg';
import Img4 from '../images/newsImages/newsimage4.svg';
import { comments, leader_message } from '../StaticData';



const currentLoc = 'Home'

function Home() {
    //  useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    const refID = useRef(null);

    const HandleScroll = () => window.scrollTo({ 
        top: refID.current.offsetTop, 
        behavior:"smooth"
    });

    return (
        <div className="home-background">
            <section className="section">
            <div className="hero  py-3">
            <Header/>
                <HeroText scroll={HandleScroll} />
            </div>
           
            </section>
            <section className="section-s">
            <div id ="solutions" ref={refID} className='solutions'>
                <StartSolutions  />
            
            <MentoringJourneyCalc />
            <div className="blue-bg">
            <img src="./images/Bluecircle.svg" height="65%" width='65%' alt=""/>
            </div>
            <Branches />
            </div> 
            </section>
            
            
            
            
            <section className="section-op">
        
            <div className="smaller-bg">
            <img src="./images/smallerorangecircle.svg" height="65%" width='65%' alt=""/>
            </div>
            <div className="row justify-content-center bg-white mentoring-section">
            <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 text-center">
                        <div className="calc-title-section">Your Business Needs Options. We Have a Variety of Loans for You.</div>
                        </div>
                        <div className="col-10 col-md-10 text-center">
                        <p className='section-paragraph'>Business loans come in all shapes and sizes, and you need to get one that's right for you. At Mentor Sacco, we identify your specific financial needs, which guides our quest for solutions tailored to your desires, helping you decide on the best option for your business. </p>
                    </div>
                     
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <Link to='/product/loan_estimate'>
                                <button className="col-md-3 col-8 my-1 py-2 btn btn-outline-success" type="submit">Get a loan estimate</button>
                            </Link>
                        </div>
                    </div>
                    </div>
             </div>
             </div>

             <OwnPiece />
            </section>

            {/* Trusted by 15000 customers */}
        <section className="section">
            <div className="row bg-white justify-content-center solutions-section">
                <div className="col-10 col-md-10 text-center">
                    <h2 className="text-center header-text py-5">Trusted by 15000+ Happy Customers</h2>
                    <p>We have 40+ years of experience and a big community of 25000+ members, ranging from TSC, BOG/PTA employees, Civil servants, and other business and employed people.</p>
                    <p>Join us today to build a better life together. </p>
                    <div className="row justify-content-center align-items-center mt-2r mb-2r py-3">
                        <Link className="col-md-5 col-10" to='/memberships'>
                            <button className="btn-lg">Join Us Now</button>
                        </Link>
                        <Link className="col-md-5 col-10" to='/about-us'>
                            <button className="btn-transparent">Learn more about us</button>
                        </Link>
                    </div>
                </div>
            </div>

            
            <div className="row bg-white justify-content-center solutions-section">
                <div className="col-12 col-md-10 text-center">
                <h2 className="text-center py-5">Here is what our members say</h2>                 
                    <div className="row justify-content-center align-items-center mt-2r mb-2r">
                        
                        {comments.slice(0,2).map(comment=>(
                         <div key={comment.id} className="col-md-5 col-10 message-background my-4" style={{minHeight: '35vh'}}>
                        <p className="comment">{comment.message}</p>
                        
                        <div className="quote-img">
                        <img src="./images/quotes.svg" height="70%" width="70%" alt=""/>
                        </div>
                        <div className="green-img">
                        <img src="./images/greencircle.svg" className="green-img-circle" alt=""/>
                        <div className="comment-owner">
                        {comment.name}
                        <br />
                        {comment.designation}
                        </div>
                        </div>
                        </div>                      
                        ))}
                    </div>
                    </div>
            </div>
            
            <Updates />


            <div className="row bg-white mt-5">
                <div className="col-12">
                    <h2 className="text-center mt-5r">Message from our leaders</h2>
                    <div className="row justify-content-center align-items-center text-center py-5">
                        {leader_message.map(video=>(
                            <div key={video.id} className="col-12 my-3 col-md-5">
                                <iframe className="col-11 rounded" style={{minHeight:'40vh'}} src={video.url} title=""></iframe> <br />
                                <strong className='text-left'>{video.name}</strong> <br />
                                <i className='text-left'>{video.designation}</i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row bg-white justify-content-center mt-4r mb-4r">
                <div className="col-10 col-md-10">
                    <h2 className="text-center">Make an impact by joining our community</h2>
                    <p className="justify-content-center">We are efficient, consistent and flexible. We care about your financial needs, which drives our search for solutions. We’ll constantly be engaging you to learn how we can better improve your lifestyle.</p>
                    <div className="row justify-content-cent er">
                        <div className="col-12 text-center">
                            <Link to="/csr/gallery">
                                <button className="col-md-3 col-12 my-3 py-3 btn btn-outline-success" type="submit">Join us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="row justify-content-center bg-news">        
                
                <h3 className="text-center pt-3" id="subheader">From our News Blog and Press Release</h3>
                <div className="row col-md-10 justify-content-center my-3">
                <div className="col-12 col-md-3 my-2">
                  <div className="card">
                    <img src={Img1} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <p class="card-text">Lorem ipsum r sit amet, consectetur adipiscing</p>
                       <p style={{color: '#F5811E'}}>News and Blog</p>
                       <p>Article Author</p>
                        <p>October 19, 2021</p>
                       </div>
                  </div>
                </div>
                <div className="col-12 col-md-3 my-2">
                  <div className="card">
                    <img src={Img2} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <p class="card-text">Lorem ipsum r sit amet, consectetur adipiscing</p>
                       <p style={{color: '#F5811E'}}>Press Release</p>
                       <p>Article Author</p>
                        <p>October 19, 2021</p>
                       </div>
                  </div>
                  </div>
                  <div className="col-12 col-md-3 my-2">
                  <div className="card">
                    <img src={Img3} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <p class="card-text">Lorem ipsum r sit amet, consectetur adipiscing</p>
                       <p style={{color: '#F5811E'}}>Press Release</p>
                       <p>Article Author</p>
                        <p>October 19, 2021</p>
                       </div>
                  </div>
                  </div>
                  <div className="col-12 col-md-3 my-2">
                  <div className="card">
                    <img src={Img4} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <p class="card-text">Lorem ipsum r sit amet, consectetur adipiscing</p>
                       <p style={{color: '#F5811E'}}>News and Blog</p>
                       <p>Article Author</p>
                        <p>October 19, 2021</p>
                       </div>
                  </div>
                </div>
                </div>
            </div>
            

            </section>

            {/* client reviews */}
           
          
            

          
            <section className="section-contact">
            <ContactForm />
            <div className="background-img">
            <img src="./images/Orangecircle.svg" alt='' width='70%' height="50%" style={{marginTop: '10vh'}} />
            </div>
            </section>

            {/* <section className="section">
      <Footer />
      </section> */}
        </div>
    )
}

export default Home

const MainStyled = styled.div`
   height: 100vh;
   background-image: ${p => p.theme.image};
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
`