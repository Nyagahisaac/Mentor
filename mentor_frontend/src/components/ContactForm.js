import React from 'react'
import { Link } from 'react-router-dom'

function ContactForm() { 
    return (
        <div className="mt-5r mb-5r">
            <h1 className="text-center">Didn't get what you were looking for?</h1>
            <p className="text-center">Get a quote to improve your financial status</p>
            <div className="row justify-content-center mt-3r">
                <div className='col-11 col-md-7'>
                    <form class="row g-3 py-4">
                    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{height: "55px"}}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter your email address</label>
    <input type="email" class="form-control" id="exampleInputPassword1" style={{height: "55px"}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter your phone number</label>
    <input type="text" class="form-control" id="exampleInputPassword1" style={{height: "55px"}}/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Write a message</label>
    <textarea class="form-control" placeholder="Message" id="floatingTextarea2" style={{height: "200px"}}></textarea>
  </div>

  <div>
  <div className="">
                        <Link to='#'>
                            <button className="col-12 btn btn-outline rounded" style={{height: '55px'}} type="submit">Send Message</button>
                        </Link>
                    </div>
  </div>
  
                    </form>    
                </div>
            </div>
        </div>
    )
}

export default ContactForm
