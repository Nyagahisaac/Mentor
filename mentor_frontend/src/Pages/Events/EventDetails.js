import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import homeIcon from "../../images/icons/homevector.svg";
import groupIcon from '../../images/groupusers.svg';
import WhiteHeader from '../../Navigation/WhiteHeader';
import EventImageBlur from '../../images/events/eventsbgblur.jpg'
import EventImage from '../../images/events/eventsimage2.jpg'
import NewsImage1 from '../../images/newsImages/newsimage1.svg'
import NewsImage2 from '../../images/newsImages/newsimage2.svg'
import NewsImage3 from '../../images/newsImages/newsimage3.svg'
// import NewsImage4 from '../../images/newsImages/newsimage4.svg'
import bookmarkIcon from '../../images/icons/bookmarkIcon.svg'
import shareIcon from '../../images/icons/shareIcon.svg'
import facebookIcon from '../../images/socialIconbw/facebook.svg'
import messengerIcon from '../../images/socialIconbw/messenger.svg'
import linkedinIcon from '../../images/socialIconbw/linkedin.svg'
import twitterIcon from '../../images/socialIconbw/twitter.svg'
import mailIcon from '../../images/socialIconbw/mail.svg'
import { EventModal, LoginModal, SuccessEvent } from '../../components/Modals';
import { useLocation } from 'react-router-dom';
import moment from 'moment'

export default function EventDetails() {
  const [eventModalShow, setEventModalShow] = useState(false)
  const [eventModalSucShow, setEventModalSucShow] = useState(false)
  const [loginPromptShow, setLoginPromptShow] = useState(false)
  const location = useLocation()
  const showSuccess = () => {
    setEventModalSucShow(true)
  }

  const {event} = location.state
  console.log('location event', event)

  const handleRegister = () => {
    if(!localStorage.getItem('token')){
        setLoginPromptShow(true)
    }else {
        setEventModalShow(true)
    }
}

  const events = [
    {
        id:1,
        image: NewsImage1,
        title: "Event Title goes here",
        date: "October 19, 2021",
        venue: "Murang'a County",
        organisers: "Event Organisers",
        cost: "Free",
        ppleInterested: '190+'
},
{
    id:2,
    image: NewsImage2,
    title: "Event Title goes here",
    date: "October 19, 2021",
    venue: "Online event",
    organisers: "Event Organisers",
    cost: "KES 1500",
    ppleInterested: '190+'
},
{
id:3,
image: NewsImage3,
title: "Event Title goes here",
date: "October 19, 2021",
venue: "Murang'a County",
organisers: "Event Organisers",
cost: "KES 999",
ppleInterested: '190+'
}

]

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

          <li className="breadcrumb-item">
            <a href="/events" className="breadcrumb-item-override">
              Events
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              Event Details
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>

    <div>
      <img src={EventImageBlur} alt="" style={{height: '60vh', width: '100vw'}} />      
   </div>

        <div style={{marginTop: '-53vh'}} className="container">

        <div style={{position: 'relative', padding: 0}}>
        <img src={EventImage} alt="" style={{height: '50vh', width: '100%'}} />
        {/* <div style={{position: 'absolute', right: 0, top: 0, height: '85%', backgroundColor: '#fff', width: '35%', padding: 0}}>
        <p className="py-3">October 19, 2021</p>
        </div> */}
        <div 
        style={{
          position: 'absolute', 
          right: 0, 
          top: '45vh', 
          height: '5%', 
          backgroundColor: '#fff', 
          width: '100%', 
          display:'flex', 
          paddingRight: 20, 
          paddingLeft: 20, 
          justifyContent: 'space-between', 
          borderBottom: '1px solid #000',
          alignItems: 'center'}}>
        <div>
            <img src={bookmarkIcon} alt="" className="px-2" />
            <img src={shareIcon} alt="" className="px-2" />
        </div>
        <div>
            <button 
            className="btn btn-outline"
            onClick={handleRegister}
            >
            Register</button>
        </div>
        </div>

        <div style={{ marginBottom: '2rem', backgroundColor: '#fff', padding: 20, border: '1px solid #000'}}>
      <h1 id="subheader" className="py-4">{event.title}</h1>
          <div class="row">
    <div class="col-8">
   
    <p className="news-title-date">{moment(event.event_date).format("MMM Do YYYY")}</p>
    
    {/* <p className="article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus id lorem vitae, turpis amet egestas non lectus. Tempus massa pretium elit, condimentum ut faucibus vel suscipit. Elementum et aliquam vestibulum tempor posuere scelerisque. Nunc felis ut nisi cursus vestibulum commodo. Viverra tincidunt odio lacus, at blandit sed gravida volutpat. Mattis sapien auctor condimentum enim maecenas risus. Nisl est mi enim pulvinar tincidunt sit. Scelerisque euismod quis sociis fringilla scelerisque ipsum rhoncus cum. Gravida cursus tellus sed curabitur semper proin et mattis. Morbi faucibus lectus quis velit consequat. Ac varius quis dolor, eleifend ut mi dapibus. Turpis maecenas elementum neque amet placerat. Et nunc lectus aenean in. Bibendum nisl ornare egestas facilisis id libero dolor, volutpat.
Pellentesque volutpat vulputate scelerisque consectetur mollis molestie. Risus tortor convallis lorem cras tortor. Risus, facilisi ullamcorper cras sit id amet tellus. Enim felis nec habitasse tristique dignissim in dis purus. Velit sodales amet morbi habitant nunc, venenatis. Morbi condimentum lorem nec netus euismod mauris, morbi lorem. 
</p>



        <img src={NewsImage1} alt="" className="img-fluid" style={{width: '100%', height: '60vh'}}/>
        <p className="article-p">
        Urna dui pretium tincidunt dui. Nibh pellentesque suspendisse enim aliquam risus nec in sed integer. Cursus purus, netus nibh tellus nunc laoreet. Congue etiam vitae luctus nisl, tellus volutpat quis malesuada. Sed vitae luctus facilisi pellentesque nibh hac non. Eu semper ipsum orci nulla a sed. At fermentum vel, in libero, tortor gravida. Vestibulum diam suscipit donec feugiat massa donec. Cras eget sagittis suspendisse et cursus. At eget mauris porttitor magnis nunc commodo. 

        A, gravida diam elementum ultricies aliquet et et venenatis est. Amet, mattis non ut sagittis volutpat neque ante. At quis massa, metus, ac vel convallis integer integer hendrerit. Vulputate tincidunt urna nec in.

        Sit dolor ultrices dictumst sem egestas consequat orci volutpat orci. Nisi diam eget consectetur viverra vitae amet elementum sed. Tellus mauris vitae, gravida sapien adipiscing sagittis, quis cras. Non sit quis nullam lacus, volutpat nibh malesuada. Dictum consequat malesuada faucibus eu sit iaculis.

        Venenatis aliquam eleifend pellentesque mattis congue a blandit. </p> */}
        <div dangerouslySetInnerHTML={{ __html: `${event.content}` }} />

<div>
    <p className="py-3">Share event</p>
    <div style={{display: 'flex'}} className="py-3">
        <img src={facebookIcon} alt="" className="pr-3"/>
        <img src={messengerIcon} alt="" className="px-3"/>
        <img src={linkedinIcon} alt="" className="px-3"/>
        <img src={twitterIcon} alt="" className="px-3"/>
        <img src={mailIcon} alt="" className="px-3"/>
    </div>
</div>
    </div>



    <div class="col-4">
        <p>Date and Time</p>
        <p>{moment(event.event_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>{event.location}</p>
        <p>{`${event.event_type.name} Event`}</p>
    </div>

  </div>
</div>

        </div>
      </div>

<div className="container">
      <div className="row justify-content-center">     
      <div className="row col-12 col-md-12 justify-content-space-between">
                <h3 className="pt-3 col-md-10" id="subheader">Other events you might like</h3>
                <Link className="col-md-2 " to="/events">
                  <button className="btn-transparent-small">View all Events</button>
                </Link>
            </div>
            
      <div className="row col-md-12 justify-content-center my-3">

            
            {
                events.map(ev => {
                    return (
                        
                <div className="col-12 col-md-4 my-2 event-card">
                  <div className="card">
                    <img src={ev.image} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <Link className="link-black" to="/event/details">
                       <p class="card-text">{ev.title}</p>
                       </Link>
                       <p style={{color: '#F5811E'}}>{ev.date}</p>
                       <p>{ev.venue}</p>
                        <p>{ev.cost}</p>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={groupIcon} alt="" />
                        {`${ev.ppleInterested} Interested`}
                        </div>
                       </div>
                  </div>
                </div>               
            
                )
                })         
            }   
            </div> 

            <EventModal
            show={eventModalShow}
            onHide={() => setEventModalShow(false)}
            data={event}
            setSuccess={showSuccess}
            />

            <LoginModal
            show={loginPromptShow}
            onHide={() => setLoginPromptShow(false)}
            />
            <SuccessEvent
            show={eventModalSucShow}
            onHide={() => setEventModalSucShow(false)}
            data={event}
            />
 
        </div>
        </div>
     

        </div>
    )
}
