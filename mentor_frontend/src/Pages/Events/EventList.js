import {React, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import homeIcon from "../../images/icons/homevector.svg";
import groupIcon from '../../images/groupusers.svg';
import WhiteHeader from '../../Navigation/WhiteHeader';
import EventImage from '../../images/events/eventimage1.jpg'
import NewsImage1 from '../../images/newsImages/newsimage1.svg'
import NewsImage2 from '../../images/newsImages/newsimage2.svg'
import NewsImage3 from '../../images/newsImages/newsimage3.svg'
import NewsImage4 from '../../images/newsImages/newsimage4.svg'
import { useDispatch, useSelector } from 'react-redux';
import { eventSelector, getEvents } from '../../store/slices/EventSlice';
import moment from 'moment'

function EventList() {
  const {eventData} = useSelector(eventSelector)
  console.log('[event data]', eventData)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getEvents())
    }, [])

    

    const history = useHistory()

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
},
{
    id:4,
    image: NewsImage4,
    title: "Event Title goes here",
    date: "October 19, 2021",
    venue: "Online event",
    organisers: "Event Organisers",
    cost: "Free",
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
          
          <li className="breadcrumb-item active" aria-current="page">
            <span className="breadcrumb-item-override-active">
              Events
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>


      <div style={{position:'relative'}}>
      <img src={EventImage} alt="" style={{height: 'auto', width: '100vw'}} />
      <div style={{position:'absolute', top: '30%', left: '10%', color: '#fff'}}>
          <p style={{fontSize: 36}}>Events By </p>
          <h1 style={{fontSize: 64}}>Mentor Sacco</h1>
      </div>
      </div>

      <div className="row justify-content-center">                
                <div className="row col-md-10 justify-content-center my-3">
                <h3 className="pt-3" id="subheader">Trending Events</h3>
            { eventData.length &&
                eventData.map(ev => {
                    return (
                        
                <div 
                className="col-12 col-md-4 my-2 event-card"

                onClick={() => history.push({
                  pathname: '/event/details',
                  state: {
                    event: ev
                  }
                })}
                >
                  <div className="card">
                    <img src={`data:image/png;base64, ${ev.banner_image}`} class="card-img-top" alt="..."/>
                       <div class="card-body">
                       <Link className="link-black" to="/event/details">
                       <p class="card-text">{ev.title}</p>
                       </Link>
                       <p style={{color: '#F5811E'}}>{moment(ev.event_date).format("MMM Do YYYY")}</p>
                       <p>{ev.location}</p>
                        <p>{ev.event_fee === null ? 'Free' : ev.event_fee}</p>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <img src={groupIcon} alt="" />
                        {`0 Interested`}
                        </div>
                       </div>
                  </div>
                </div>               
            
                )
                })         
            }   
            </div>  
        </div>


        <div className="row justify-content-center">                
                <div className="row col-md-10 justify-content-center my-3">
                <h3 className="pt-3" id="subheader">More Upcoming Events</h3>
            {
                events.map(ev => {
                    return (
                        
                <div className="col-12 col-md-3 my-2 event-card">
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
        </div>

        <div className="row justify-content-center">                
                <div className="row col-md-10 justify-content-center my-3">
            {
                events.map(ev => {
                    return (
                        
                <div className="col-12 col-md-3 my-2 event-card">
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
        </div>


        </div>
    )
}

export default EventList
