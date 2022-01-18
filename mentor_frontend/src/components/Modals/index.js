import LoginModalContent from '../../Pages/SuccessPages/LoginPrompt';
import { Modal } from 'react-bootstrap';
import { SuccessInsuranceSubmit, SuccessLoanSubmit } from '../../Pages/RegistrationForms/SuccessSubmit';
import EventModalContent from '../../Pages/Events/EventModalContent';
import { Link } from 'react-router-dom';

export  function SuccessInsureModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <SuccessInsuranceSubmit />
        </Modal.Body>
        
      </Modal>
    );
  }

  export  function SuccessLoanModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <SuccessLoanSubmit />
        </Modal.Body>
        
      </Modal>
    );
  }

  export function LoginModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
           Authentication
          </Modal.Header>
          <Modal.Body>
          <LoginModalContent />
          </Modal.Body>
          
        </Modal>
      );
  }

  export function EventModal(props) {
    console.log('ev', props)
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          {''}
          </Modal.Header>
          <Modal.Body>
          <EventModalContent data={props.data} setSuccess={props.setSuccess} onHide={props.onHide}/>
          </Modal.Body>
          
        </Modal>
      );
  }

  export function SuccessEvent(props) {
    console.log(props)
    return (
      <Modal
      {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
 <Modal.Header closeButton>
          {props.data ? props.data.title : ''}
          </Modal.Header>
          <Modal.Body>
          <div className='container row justify-content-center align-items-center py-5'>
             <p className='text-center'>Success!</p>
             <p className='text-center'>You have successfully registered for this event, a communication has been sent to your email with the event details</p>

             <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <Link to={'/events'}>
               <button className='btn btn-member mx-3'>Browse Events</button>
               </Link>
               
               <button 
               className='btn btn-transparent-small px-5'
               onClick={() => props.onHide()}
               >
               Close
               </button>
             </div>
          </div>
          </Modal.Body>
      </Modal>
    )
  }