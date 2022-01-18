import {React, useEffect} from 'react'
import '../index.css';
import WhiteHeader from '../Navigation/WhiteHeader'
import homeIcon from '../images/icons/homevector.svg'

function FAQs() {
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
             FAQs
           </span>
         </li>
       </ol>
     </nav>
     <div className="line"></div>


        <div className="row justify-content-center py-5">
            <div className="col-10">
                <h1 className="text-center">Frequently Asked Questions</h1>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How do I join Mentor Sacco?
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Can I get a bonus if I refer a friend to open an account?
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What is a savings goal?
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FAQs
