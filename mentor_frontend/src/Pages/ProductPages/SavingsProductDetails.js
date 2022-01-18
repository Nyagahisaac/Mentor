import React, {useState} from 'react'
import Image from '../../images/productpage.jpg'
import { SavingsContent } from '../../LoadInfo/SavingsInfo'
 import { Link } from 'react-router-dom';
import homeIcon from '../../images/icons/homevector.svg'
import WhiteHeader from '../../Navigation/WhiteHeader'
import { SuccessInsureModal, LoginModal } from '../../components/Modals';
import Tryother from '../../components/Tryother';


export default function SavingsProductDetails(props) {
   
    const [tabActive, setTabActive] = useState(1)
    const {savingsType} = props.location.state
    const details = SavingsContent[savingsType]
    const [successModalShow, setSuccessModalShow] = useState(false)
    const [loginPromptShow, setLoginPromptShow] = useState(false)

    const HandleTabChange = (val) => {
     setTabActive(val)
    }

    const handleApplyNow = () => {
        if(!localStorage.getItem('token')){
            setLoginPromptShow(true)
        }else {
            setSuccessModalShow(true)
        }
    }
    
    return (
        <div>
        <WhiteHeader />
        <div className="line"></div>
        <nav className="container breadcrumb-div mt-1r" aria-label="breadcrumb">
            <ol className="breadcrumb">
            <img src={homeIcon} alt="" style={{marginRight: 5, width: '20px', height: '20px'}}/>
                <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-item-override">Home</a></li>
                <li className="breadcrumb-item">
                <a href="/save-money" className="breadcrumb-item-override">Save</a></li>
                
                <li className="breadcrumb-item active" aria-current="page">
                <span className="breadcrumb-item-override-active">{details.product_category}</span>
                </li>
            </ol>
        </nav>
        <div className="line"></div>

           <img src={Image} alt="" style={{height: 'auto', width: '100vw'}} />
            <div className="container mt-2r">
            <div className="col-12">
            <div className="row mt-2r">
            {tabActive === 1 ?
                    <div className="col-2 col-md-2 product-tabs-active"  onClick={() => HandleTabChange(1)}>Overview</div>
                    : 
                    <div className="col-2 col-md-2 product-tabs" style={tabActive === 1 ? {color: '#067c4b', fontWeight: 700 } : null}  onClick={() => HandleTabChange(1)}>Overview</div>
            }
            {tabActive === 2 ?
                    <div className="col-3 col-md-3  product-tabs-active" onClick={() => HandleTabChange(2)}>Product Information</div>
                    :
                    <div className="col-3 col-md-3  product-tabs" onClick={() => HandleTabChange(2)}>Product Information</div>
            }
            {/* {tabActive === 3 ?
                    <div className="col-3 col-md-3 product-tabs-active" onClick={() => HandleTabChange(3)}>Requirements</div>
                    :
                    <div className="col-3 col-md-3 product-tabs" onClick={() => HandleTabChange(3)}>Requirements</div>
            }   */}
                    
            </div>
            <div className="product-tab-div"></div>
            </div>
            {tabActive === 1 ?
            <div>
            <div  className="col-12 col-md-12">
                        <h2 id="subheader" className="mt-4r">{details.product_category}</h2>
                         <p className="pb-1">{details.intro} </p>
                        <div className="py-5">
                                <button 
                                className="btn btn-outline-success rounded"
                                // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={handleApplyNow}
                                >
                                Apply Now
                                </button>
                          
                        </div>
                    </div>
            </div>
            : tabActive === 2 ?
            <div>
            <div className="row py-3">
                    <div className="col-md-12 mt-2r">

                        <h2 id="subheader" className="pt-4">Benefits at a Glance</h2>
                        <ul>
                        {details.product_benefits.map(det => {
                            return(<li>{det}</li>)
                        })}
                        </ul>
                        <div className="row justify-content-center py-5">
                            <div>
                                <button 
                                className="btn btn-outline-success rounded"
                                // data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                onClick={handleApplyNow}
                                >
                                Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

               

            </div>
            :
            null
            }

            <Tryother />
            </div> 

            {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <SuccessInsuranceSubmit />
                </div>
                
                </div>
            </div>
            </div> */}
            
            <SuccessInsureModal
              show={successModalShow}
              onHide={() => setSuccessModalShow(false)}
            />

            <LoginModal
            show={loginPromptShow}
            onHide={() => setLoginPromptShow(false)}
            />

        </div>
    );
}
