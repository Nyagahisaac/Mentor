import React from 'react'
import EventImage from '../../images/events/eventsimage2.jpg'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { eventSelector, registerEvent } from '../../store/slices/EventSlice'
import { authSelector } from '../../store/slices/AuthSlice'
import Loading from '../../components/Loader'

export default function EventModalContent(props) {
    console.log('porrrrrps', props)
    const {isFetching} = useSelector(eventSelector)
    const {user} = useSelector(authSelector)
    const dispatch = useDispatch()
    const HandleEventRegistration = () => {
       const values = {
           userID: user.id,
           eventID: props.data.id,
           close: props.onHide,
           success: props.setSuccess
       }
       dispatch(registerEvent(values))
    }

    return (
        <div className="container mt-2r pb-3">
        
        {
            isFetching ? 
        <Loading /> 
        :
        
        <div className="row" style={{marginBottom: '4rem'}}>
    <div className="col">
      <img src={EventImage} className="img-fluid" alt="" />
      <h4 className="pt-2 ">{props.data.title}</h4>
      <div style={{ display: 'flex', marginBottom: '1rem', padding: '10px 0px', borderBottom: '1px solid #000', justifyContent: 'space-around'}}>
    <div style={{width:'80%'}}>
       
        <h4>{moment(props.data.event_date).format("MMM Do YYYY")}</h4>
    </div>
    <div >
       
        <div>{`${props.data.event_type.name} Event`}</div>
    </div>
    
  </div>
      <p className="news-title-date">General Admission</p>
      <p>{`Sales end ${moment(props.data.event_end_date).format("MMM Do YYYY")}`}</p>
   </div> 
   <div className="col align-items-center" style={{borderLeft: '1px solid #000', paddingRight: '20px'}}>

     <div style={{paddingRight: '20px',paddingTop: '40px' }}>

     <h3 id="subheader">Order Summary</h3>
     <div style={{ display: 'flex', marginBottom: '1rem', padding: '10px 0px', borderBottom: '1px solid #000', justifyContent: 'space-around'}}>
    <div style={{width:'80%'}}>
       
        <h4>1 X General Admission</h4>
    </div>
    <div >
       
        <div>KES 0.0</div>
    </div>
    
  </div>

  <div style={{ display: 'flex', marginBottom: '1rem', padding: '10px 0px', justifyContent: 'space-around'}}>
  <div style={{width:'80%'}}>
       
        <h4>Total</h4>
    </div>
    <div >
       
        <div>KES 0.0</div>
    </div>
    
  </div>
 
            <div
            style={{width: '100%'}}
            className='py-4'
            >
            <button 
            className="btn btn-outline" 
            style={{width: '100%', height:'60px'}}
            onClick={HandleEventRegistration}
            // onClick={() => props.setSuccess()}
            >
            Register
            </button>
        </div>
 


     </div>
     <div>
        
     </div>

    </div>
</div>

  
        }
        </div>
    )
}
