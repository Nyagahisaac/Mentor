import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../../components/Backdrop'
import CustomModal from '../../components/CustomModal'
import ProductScreenImage from '../../images/ProductScreenImage.svg'
import MoneyParachute from '../../images/MoneyParachute.svg'
import { loansContent } from '../../LoadInfo/loaninfo'
import Quotes from '../../images/quotes.svg'
import Green from '../../images/greencircle.svg'
import { useHistory } from 'react-router-dom'

function LoanDetail(props) {
    useEffect(() => {
        console.log('[state prop]', props.location.state)
        window.scrollTo(0, 0)
    }, [])

    const history = useHistory()
    
    const [ModalIsOpen, setModalIsOpen] = useState(false)

    const handleProductClick = () =>{
        // setModalIsOpen(true)
        history.push('/applyLoan')
    }
    
    const closeModalHandler = () =>{
        setModalIsOpen(false)
    }
    const {state} = props.location
    const details = loansContent[state]
    console.log('[details]', details)
    return (
        <div className="container">
            <div className="col-12 pc-screen-hidden">
                <div className="row py-3 pc-screen-hidden justify-content-center mt-2r">
                    <div  className="col-12 col-md-6">
                        <h2 id="subheader" className="mt-4r">Product name</h2>
                         <p className="pb-1">lorem </p>
                        <div >
                                <button className="col-4 btn btn-outline-success rounded" onClick={handleProductClick} type="submit">Get Started</button>
                          
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={ProductScreenImage} alt="" />
                    </div>
                </div>

                <div className="row py-3">
                    <div className="col-md-12">
                        <h2 id="subheader">Product Features</h2>
                        <p>What you should Know</p>
                        <ul>
                        {/* {details.product_features.what_to_know.map(det => {
                            return(<li>{det}</li>)
                        })}
                        </ul>

                        <p>Must haves</p>
                        <ul>
                        {details.product_features.must_have.map(det => {
                            return(<li>{det}</li>)
                        })} */}
                         <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                           {/*  <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li> */}
                        

                        <h2 id="subheader" className="pt-4">Benefits</h2>
                        <ul>
                        {/* {details.product_benefits.map(det => {
                            return(<li>{det}</li>)
                        })} */}
                         <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <div className="row justify-content-center py-3">
                            <div>
                                <button className="btn btn-outline-success rounded" onClick={handleProductClick} type="submit">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <h2 className="mt-4r"id="subheader">Feedback from parties that have benefited from this product</h2>
                        {/* client reviews */}

                        <div className="row justify-content-center bg-white pc-screen-hidden py-5">
                        
                            
                        </div>
                        
                    </div>
                </div>
                <div className="row justify-content-center mt-2r">
                    <div className="col-12 col-md-7">
                        <h1 className="pt-5" id="subheader">Not interested in this product? </h1>
                        <p>No worries. Check out our other loan products that may interest you</p>
                        <div className="row justify-content-center py-3">
                            <div className="col-12">
                                <Link to="/">
                                    <button className="col-4 btn btn-outline-success rounded" type="submit">Try Other Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={MoneyParachute} alt=""/>
                    </div>

                    
                </div>
            </div>



            <div className="mobile-screen-hidden">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <img className="img-fluid" src={ProductScreenImage} alt="" />
                    </div>
                    <div className="col-11">
                        <h2>Product Name Goes Here</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="row justify-content-center py-3">
                            <div className="col-12">
                                <button className="col-4 btn btn-outline-success rounded" onClick={handleProductClick} type="submit">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <h2>Product Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>

                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                        <div className="row justify-content-center py-3">
                            <div className="col-12">
                                <button className="col-3 btn btn-outline-success rounded" onClick={handleProductClick} type="submit">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2>Feedback from parties that have benefited from this product</h2>
                        {/* client reviews */}
                        <div className="row justify-content-center bg-white mobile-screen-hidden py-3">
                            {/* {comments.slice(0,2).map(comment=>(
                                <div className="col-11 py-5 my-3 message-background-mobile">
                                    <p className="pt-3">{comment.message}</p>
                                    <strong>{comment.name}</strong>
                                    <p>{comment.designation}</p>
                                </div>
                            ))} */}
                        </div>
                        {/* client reviews */}
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-12">
                        <img className="img-fluid" src={MoneyParachute} alt=""/>
                    </div>
                    <div className="col-11">
                        <h1 className="py-2">Not interested in this product? </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="row justify-content-center py-3">
                            <div className="col-12">
                                <Link to="/">
                                    <button className="col-12 btn btn-outline-success rounded" type="submit">Try Other Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>


            { ModalIsOpen ? <CustomModal /> : null }
            { ModalIsOpen && <Backdrop onClick={closeModalHandler} /> }
        </div>
    )
}

export default LoanDetail
