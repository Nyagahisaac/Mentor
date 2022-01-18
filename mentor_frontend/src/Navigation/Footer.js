import React from 'react'
import { Link } from 'react-router-dom';
import GoogleMap from '../components/GoogleMap';
import '../index.css';

import twitter from '../images/social/twitter.svg'
import facebook from '../images/social/facebook.svg'
import instagram from '../images/social/instagram.svg'
import linkedin from '../images/social/linkedin.svg'
import youtube from '../images/social/youtube.svg'


function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="section-footer">
            <div className="container">
                <div className="row col-12 pt-3">

                <div className="col-md-3 pt-4r">                     
                            <div className="row">  
                        
                            <GoogleMap />
                            <div>
                            <strong className="py-2">Headquarters</strong>
                            <p className="py-2">
                                Mentor Complex, Uhuru Highway, <br />
                                Muranga County
                            </p>
                        </div>
                    </div>
                </div>
                    {/* <div className="col-md-3 pt-4r">                     
                        <div className="row pl-4">
                            <div className="col-12">
                                <strong className="text-center">Quick Links</strong>
                                <ul>
                                    <li className="py-2">
                                        <Link to="/help/faqs">FAQ</Link>
                                    </li>                          
                                    <li className="pb-2">
                                        <Link to="/news">News</Link>
                                    </li>
                                    <li className="pb-2">
                                        <Link to="/events">Events</Link>
                                    </li>
                                    <li className="pb-2">
                                        <Link to ="/csr/gallery">CSR</Link>
                                    </li>
                                    <li className="pb-2">
                                        <Link to="/location">Locations</Link>
                                    </li>
                                    <li className="pb-2">
                                        <Link to="#">Careers</Link>
                                    </li>
                                </ul>                     
                        </div>
                        </div>
                    </div> */}

                    <div className="col-md-3 pt-4r">                     
                            <div className="row">                           
                               <strong className="text-left">Quick Links</strong>
                                <div className="col-11 py-2">
                                <Link to="/help/faqs">FAQ</Link>
                                </div>
                                <div className="col-11 py-2">
                                <Link to="/news">News</Link>
                                </div>
                            
                                <div className="col-11 py-2">
                                <Link to="/events">Events</Link>
                                </div>
                                <div className="col-11 py-2">
                                <Link to ="/csr/gallery">CSR</Link>
                                </div>  
                                <div className="col-11 py-2">
                                <Link to="/location">Locations</Link>
                                </div>    
                                <div className="col-11 py-2">
                                <Link to="/careers">Careers</Link>
                                </div>                   
                            </div>
                    </div>

                    <div className="col-md-3 pt-4r">                     
                            <div className="row">                           
                               <strong className="text-left">Contact us</strong>
                                <div className="col-11 py-2">
                                    <i className="fas fa-phone-alt pr-2"></i> +254 111 026 000
                                </div>
                                <div className="col-11 py-2">
                                    <i class="fab fa-whatsapp pr-2"></i> +254 704 066 827
                                </div>
                            
                                <div className="col-11 py-2">
                                    <i class="fa fa-envelope pr-2"></i> info@mentorsacco.co.ke
                                </div>
                                <div className="col-11 py-2">
                                    <i class="fa fa-comment-alt pr-2"></i> 21874
                                </div>                        
                            </div>
                    </div>

                    <div className="col-md-3 pt-4r">
                        <div className="row">
                            <div className="col-12">
                                <strong>Newsletter</strong>
                                <p>Get the latest updates in your inbox. Don’t worry, we won’t spam you.</p>
                                {/* <form class="row g-3">
                                    <label for="inputPassword2" class="visually-hidden">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                                    <button type="submit" class="btn btn-outline-success mb-3">Subscribe</button>
                                </form> */}
                                <div class="input-group py-3">
                                <input type="text" className="form-control" id="newsletter" aria-describedby="newsletter" aria-label="newsletter" />
                                 <button className="btn2 btn-outline-primary" type="button" id="newsletter" style={{backgroundColor: '#F5811E'}}>Subscribe</button>
                                </div>
                                <div className="row mr-2 py-3">
                                        <div className="col">
                                            <img className="img-fluid" src={twitter} alt=""/>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={facebook} alt=""/>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={instagram} alt=""/>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={linkedin} alt=""/>
                                        </div>
                                        <div className="col">
                                            <img className="img-fluid" src={youtube} alt=""/>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* <div className="row justify-content-center">
                        <strong className="text-center">Contact us</strong>
                        <div className="col-11">
                            <div className="row justify-content-evenly px-3 py-1">
                                <div className="col-11 col-md-6">
                                    <i class="fas fa-phone-alt"></i> +254 111 026 000
                                </div>
                                <div className="col-11 col-md-6">
                                    <i class="fab fa-whatsapp"></i> +254 704 066 827
                                </div>
                            </div>
                            <div className="row justify-content-evenly px-3 py-1">
                                <div className="col-11 col-md-7">
                                    <i class="fa fa-envelope"></i> info@mentorsacco.co.ke
                                </div>
                                <div className="col-11 col-md-5">
                                    <i class="fa fa-comment-alt"></i> 21874
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className="copyright text-center py-1 mt-2r">
                &copy; 1977-{currentYear} <br />Mentor Sacco Society. All Rights Reserved
            </div>
        </footer>
    )
}

export default Footer
