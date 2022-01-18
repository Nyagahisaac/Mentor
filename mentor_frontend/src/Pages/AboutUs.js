import {React, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

import starhead from '../images/icons/starheads.svg'
import crowdmembers from '../images/icons/crowdmembers.svg'
import smileyface from '../images/icons/smileyface.svg'

import leadersphoto from '../images/leadersphoto.svg'

import accolade1 from '../images/accolades/2013.svg'
import accolade2 from '../images/accolades/2012.svg'
import accolade3 from '../images/accolades/2011.svg'

import Integrity from '../images/icons/Integrity.svg'
import Equality from '../images/icons/Equality.svg'
import Equity from '../images/icons/Equity.svg'
import Respect from '../images/icons/Respect.svg'
import Professionalism from '../images/icons/Professionalism.svg'
import Commitment from '../images/icons/Commitment.svg'
import Transparency from '../images/icons/Transparency.svg'
import homeIcon from "../images/icons/homevector.svg";
import WhiteHeader from '../Navigation/WhiteHeader'


const welcome_message=[
    {
        'id':'1',
        'title':'Mentor Informercial',
        'url':'https://www.youtube.com/embed/tIOQi0-7X2w'
    },
    {
        'id':'2',
        'title':'Our Amazing Products',
        'url':'https://www.youtube.com/embed/R7nIpsOvkYc'
    },
]

function AboutUs() {
    useEffect(() => {
         window.scrollTo(0, 0)
    }, [])
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
           <a href="/" className="breadcrumb-item-override">
             Home
           </a>
         </li>
         
         <li className="breadcrumb-item active" aria-current="page">
           <span className="breadcrumb-item-override-active">
             Who we are
           </span>
         </li>
       </ol>
     </nav>
     <div className="line"></div>

           {/*  <div className="row about-bg text-white ">
                <div className="col-12 black-bg-height d-flex align-items-center" style={{zIndex:0, backgroundColor:"black", opacity:'0.8'}}>
                    <div className="row align-content-center">
                        <div className="col-12 py-3 ">
                            <div className="row justify-content-center text-center py-3">
                                <div className="col-11 col-md-8" style={{zIndex:1, color:"white", opacity:'1'}}>
                                    <h1 className="text-center">About Us</h1>
                                    <strong><h3>Who Are We?</h3></strong>
                                    <strong>Founded in 1977, Mentor Sacco is a modern, fast-growing institution offering financial solutions to all Kenyans.</strong>
                                    <p>We amended the society’s by-laws to allow membership from Civil Servants, Disciplined Forces, Local Authorities, NGOs, National and County Governments, Private Companies, Approved Entrepreneurs, Groups/Chamas and other institutions.</p>
                                    <p>We’re innovative and flexible, which helps us offer you valuable and affordable products and services.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row about-bg text-white ">
                <div className="col-12 black-bg-height d-flex align-items-center" style={{zIndex:0, backgroundColor:"black", opacity:'0.8'}}>
                    <div className="row align-content-center">
                        <div className="col-12 py-3 ">
                            <div className="row justify-content-center text-center py-3">
                                <div className="col-11 col-md-8" style={{zIndex:1, color:"white", opacity:'1'}}>
                                  {/*   <h1 className="text-center">About Us</h1> */}
                                    <strong><h3 className="py-2">We are mentor Sacco Society Limited</h3></strong>
                                    <p style={{paddingBottom: '10px', opacity: 0.6 }}>A Modern Fast Growing Financial Institution in Kenya Offering Bespoke Financial Solutions</p>

                                    <p>Mentor Sacco Society Limited was established in 1977. The evolution of financial market has seen Mentor Sacco grow to an all inclusive financial institution and rebrand to Mentor Sacco Society Limited in an effort to serve as a home to all.</p>
                                    <Link to="/memberships">
                        <button className="btn btn-member">Learn more</button>
                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/*  <div className="row justify-content-center py-3">
                <div className="col-11 col-md-10">
                    <h3 className="">Why Join an Award-Winning Sacco?</h3>
                    <p>We’ve been a customer-centric, market-led financial and allied services institution for over four decades. We always strive to understand your needs, which then guides our search for solutions. </p>
                    <p>We constantly seek feedback from our members to improve their lifestyles and create strong emotional ties with them. As a result, they’ve effortlessly marketed our products and services.</p>
                    <p>We believe in your financial independence and prosperity. For that reason, we keep innovating products and services to meet your changing demands.</p>
                    <p>We would be delighted to have you join us.</p>
                    <Link to="/memberships">
                        <button className="btn btn-success">I want to Join</button>
                    </Link>
                </div>
                
            </div> */}
            <div className="row justify-content-center align-items-center py-3">
                <div className="col-12 col-md-10">
                    <h3 className="text-center mt-4r">About our work</h3>
                    <p className="text-center">With the changes experienced in the financial sector, more opportunities have come in handy providing a chance of being dynamic. The society’s by-laws were amended to accommodate membership from Civil Servants, Disciplined Forces, Local Authorities, NGO's, National and County Governments, Private Companies, Approved Entrepreneurs, Groups/Chamas and Other Institutions.</p>

                    <p className="text-center">Our guiding principle of establishing dignity to our members by ensuring value to services and products we offer is enshrined in our corporate culture of innovativeness, flexibility and affordability.</p>
                    
                </div>
                
            </div>

            <div className="row bg-white py-3">
                <div className="col-12">
                    <h2 className="text-center mt-4r">Welcome Message</h2>
                    <div className="row justify-content-center">
                        {welcome_message.map(video=>(
                            <div key={video.id} className="col-10 my-3 col-md-5">
                                <iframe className="col-12 rounded" style={{minHeight:'40vh'}} src={video.url}></iframe> <br />
                                <strong className="text-center p-2">{video.title}</strong>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            


            <div className="row justify-content-center green-color text-white text-center mt-2r py-5">
                <div className="col-12 col-md-10">
                    <h2>Our Numbers at a Glance</h2>
                    <p>Since Inception, the SACCO Has Witnessed Exponential Growth</p>
                    <div className="row py-5">
                        <div className="col">
                            <figure>
                                <img height="45rem" src={starhead} alt=""/>
                                <figcaption className="pt-2">
                                    <h1>43+</h1>
                                    <p>Years of experience</p>
                                </figcaption>
                                
                            </figure>
                        </div>
                        <div className="col">
                            <figure>
                                <img height="45rem" src={crowdmembers} alt=""/>
                                <figcaption className="pt-2">
                                    <h1>35000+</h1>
                                    <p>Members</p>
                                </figcaption>
                                
                            </figure>
                        </div>
                        <div className="col">
                            <figure>
                                <img height="45rem" src={smileyface} alt=""/>
                                <figcaption className="pt-2">
                                    <h1>35000+</h1>
                                    <p>Happy customers</p>
                                </figcaption>
                                
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row justify-content-center text-center py-3" style={{backgroundColor:'#C8D7FA'}}>
                <h2>How Has Mentor Sacco’s Work Been Recognised?</h2>
                <p>Our primary goal is to satisfy you, but who doesn't love a little recognition and a gold star for their efforts?</p>
                <p>We’re grateful to have been recognised as offering the Best Financial Solutions.</p>
                <div className="col-12 col-md-10">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade1} />
                        </div>
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade2} />
                        </div>
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade3} />
                        </div>
                    </div>
                </div>
            </div> */}


           {/*  <div className="row justify-content-center">
                <div className="col-12 col-md-10 text-center">
                    <div className="row px-4 py-1">
                        <h2>Why We Do What We Do</h2>
                        <p>We always want to empower and improve your welfare.</p>
                        <div className="col-10 col-md-4">
                            <div className="row px-4 py-1">
                                <h3>Our Mission</h3>
                                <p>To mobilise savings and provide credit to our members by offering quality products and services at a competitive rate to enhance their economic and social growth.</p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row px-4 py-1">
                                <h3>Our Vision</h3>
                                <p>To be the most innovative and reputable Sacco in Kenya and beyond.</p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row px-4 py-1">
                                <h3>Our Motto</h3>
                                <p>Adding value to Life</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 text-center">
                    <div className="row px-4 py-1 mt-4r">
                        <h2 id="subheader">What Drives us?</h2>
                        <p>Empowering and Improving the Welfare of Our Members</p>
                        <div className="col-10 col-md-4">
                            <div className="row  py-1 mt-2r">
                                <h3 id="subheader2">Our Mission</h3>
                                <p>To mobilise savings and provide credit to our members by offering quality products and services at a competitive rate to enhance their economic and social growth.</p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row py-1 mt-2r">
                                <h3 id="subheader2">Our Vision</h3>
                                <p>To be the most innovative and reputable Sacco in Kenya and beyond.</p>
                            </div>
                        </div>
                        <div className="col-10 col-md-4">
                            <div className="row px-3 py-1 mt-2r">
                                <h3 id="subheader2">Our Motto</h3>
                                <p>Adding value to Life</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-9 mt-4r">
                    <h2 className="text-center" id="subheader">Our Core Values</h2>
                    <p>At the core of our operations, we have a solid conviction to offer you the best services. Here are our fundamental principles:</p>
                    <div className="row justify-content-center mt-2r">
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Integrity} alt="" />
                                    <figcaption className="text-center py-3"><strong>Integrity</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Equality} alt="" />
                                    <figcaption className="text-center py-3"><strong>Equality</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Equity} alt="" />
                                    <figcaption className="text-center py-3"><strong>Equity</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Respect} alt="" />
                                    <figcaption className="text-center py-3"><strong>Respect</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Professionalism} alt="" />
                                    <figcaption className="text-center py-3"><strong>Professionalism</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Commitment} alt="" />
                                    <figcaption className="text-center py-3"><strong>Commitment</strong></figcaption>
                                </figure>
                        </div>
                        <div className="col-6 col-md-3">
                            <figure className="row justify-content-center">
                                    <img className="col-6 col-md-6" src={Transparency} alt="" />
                                    <figcaption className="text-center py-3"><strong>Transparency and accountability</strong></figcaption>
                                </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center text-center py-3 mt-4r" >
                <h2 id="subheaderheavy">Latest Accolades and Recognition</h2>
                <p>At Mentor, we are recognized at offering the best Financial Solutions</p>
                
                <div className="col-12 col-md-10 mt-2r">
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade1} alt=""/>
                        </div>
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade2} alt=""/>
                        </div>
                        <div className="col-10 col-md-4">
                            <img className="img-fluid" src={accolade3} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center mt-4r">
                <h2 className="pt-2" id="subheaderheavy">Meet the Brains Behind the Operations</h2>
                <p>Meet the leaders that govern Mentor Sacco Society</p>
                <div className="col-12 ml-2" style={{position: 'relative'}}>
                    <img className="img-fluid rounded mx-auto d-block" src={leadersphoto} alt=""/>
                    <div className="image-info">
                <p className="px-2" 
                style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 115.99%)'}}>
                From Left; (Standing) John Mwaniki, Robert Kibe, Francis Njoroge, Julius Kagiri, James Kaigo and Thomas Mbugua.(Sitting) Eliud Mbugua, James Kimari, Anthony Kamau, and Joyce Ndegwa.</p>
            </div>
                </div>
               
            </div>

            <div className="row justify-content-center align-items-center mt-4r">
                <div className="col-6">
                    <h2>Take a look at the team in detail</h2>
                    <p>
                    Get to know our board members, management team and operational team
                    </p>
                </div>
                <Link to="/our_team/board_members" className="col-4 text-center">
                    <button className="col-7 btn btn-success">Our Team</button>
                </Link>
            </div>

            <div className="row justify-content-center text-center py-5 text-white mt-4r" style={{backgroundColor:'#51A381'}}>
                <h2 className="" id="subheaderheavy">Customer Service</h2>
                <p className="mt-1r">Customer delight is our ultimate goal</p>
                <p className="col-11 col-md-10 mt-1r">At Mentor, Customer delight is our ultimate goal. We have always encouraged our members and non-members to feel free and share with us complements, complaints and any other feedback every time they visit us. We value your feedback.</p>
               
                {/* <Link to="#">
                    <button className="btn btn-outline-primary">Contact us</button>
                </Link> */}
            </div>

            {/* <div className="row justify-content-center text-center px-3 py-3 " >
                <h2>Want to Join the Next Biggest Sacco?</h2>
                <p>Membership in the Sacco is open to all Kenyans. Entrust your financial future to us, and join a list of 25,000+ happy members.</p>
                
                <Link to="/memberships">
                    <button className="btn btn-outline-primary">Become a Member</button>
                </Link>
            </div> */}

            <div className="row justify-content-center text-center py-5 text-white" style={{backgroundColor:'#F5811E'}}>
                <h1 id="subheaderheavy2">Join our Team</h1>
                <p className="col-11 col-md-10 mt-1r">If you are talented, highly motivated, hardworking, passionate about your work and want to be a member of our team join us today. Apply in Careers or contact us.</p>
                <div className="col-12 text-center pt-2">
                    <Link to="#">
                        <button className="col-2 btn btn-outline-success">View Careers</button>
                    </Link>
                </div>
            </div>

        </div>
        
    )
}

export default AboutUs
