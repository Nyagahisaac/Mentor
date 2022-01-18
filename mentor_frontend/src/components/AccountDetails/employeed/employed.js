import React, { useState } from 'react'
import Personalicon from '../../../images/icons/personalinfoIcon.svg'
import DetailsIcon from '../../../images/icons/employmentdetails.svg'
import NextKinIcon from '../../../images/icons/groupusers.svg'
import RemitanceIcon from '../../../images/icons/remmitance.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Switch from "react-switch";
import WhiteHeader from '../../../Navigation/WhiteHeader'
import homeIcon from '../../../images/icons/homevector.svg'
import PersonlaInfo from './PersonalInfo'
import EmploymentDetails from './EmploymentDetails'
import NextOfKin from './NextOfKin'
import Remittance from './Remittance'

export default function EmployedProfile() {
 const [PersonalDetailsActive, setPersonalDetailsActive] = useState(true)
 const [EmploymentDetailsActive, setEmploymentDetailsActive] = useState(false)
 const [NextofKinActive, setNextofKinActive] = useState(false)
 const [RemmitanceActive, setRemmitanceActive] = useState(false)
 const [activeButtons, setActiveButtons] = useState(1)
 const [progressValue, setProgressValue] = useState(0)
 


 const handleProceedto  = (val) => {
    setProgressValue(val)
    setActiveButtons(activeButtons + 1)

     if(val === 1){
     setEmploymentDetailsActive(true)     
    }

     if(val === 2){
        setNextofKinActive(true)        
    }

    if(val === 3){
        setRemmitanceActive(true)        
    }
 }

 const handleProceedBack = (val) => {
     setProgressValue(progressValue - 1)
     setActiveButtons(activeButtons - 1)
     if(val === 2) {
         setRemmitanceActive(false)
     }
     if(val === 1) {
        setNextofKinActive(false)
    }
    if(val === 0) {
        setEmploymentDetailsActive(false)
    }
 }

    return (  
        <MainStyled>
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
                <a href="/" className="breadcrumb-item-override">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/user/landing" className="breadcrumb-item-override">User Account</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/accountdetails/tsc" className="breadcrumb-item-override-active">Employed Account Application</a>
              </li>
            </ol>
          </nav>
      <div className="line"></div>
        </div>
        <div className="container">
            <div className="steps mt-5">
                <progress id="progress" value={(activeButtons * 100) / 4} max="100">{(activeButtons.length * 100) / 4}</progress>

            <div className="step-item">
                <button className="step-button text-center" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                    disabled="true"
                    // onClick={handleButtonClicked}
                    >
                    <img src={Personalicon} alt="" />
                </button>
                <div className="step-title">
                    Personal Information
                </div>
            </div>
{EmploymentDetailsActive ?
    <div className="step-item">
                <div className='step-button-active text-center'>
                    <img src={DetailsIcon} alt="" />
                </div>
                <div className="step-title">
                    Employment Details
                </div>
            </div>
            :
            <div className="step-item">
                <div className='step-button text-center'>
                    <img src={DetailsIcon} alt="" />
                </div>
                <div className="step-title">
                    Employment Details
                </div>
            </div>
}

{NextofKinActive ? 
    <div className="step-item">
                <div className='step-button-active text-center'>
                    <img src={NextKinIcon} alt="" />
                </div>
                <div className="step-title">
                    Next of Kin
                </div>
            </div>
            :
            <div className="step-item">
                <div className='step-button text-center'>
                    <img src={NextKinIcon} alt="" />
                </div>
                <div className="step-title">
                    Next of Kin
                </div>
            </div>
}

{RemmitanceActive ? 
    <div className="step-item">
                <div className='step-button-active text-center'>
                    <img src={RemitanceIcon} alt="" />
                </div>
                <div className="step-title">
                    Remittance
                </div>
            </div>
            :
            <div className="step-item">
                <div className='step-button text-center'>
                    <img src={RemitanceIcon} alt="" />
                </div>
                <div className="step-title">
                    Remittance
                </div>
            </div>
}

        </div>
        
      
       {progressValue === 0 ? 
        <PersonlaInfo moveToNext={handleProceedto} />
            : null }

            {progressValue === 1 ? 
           <EmploymentDetails moveToNext={handleProceedto} movBack={handleProceedBack}/>
            
           : null} 

        {progressValue === 2 ? 
           <NextOfKin moveToNext={handleProceedto} movBack={handleProceedBack}/>
       : null}     
                        
       {progressValue === 3 ?        
           <Remittance moveToNext={handleProceedto} movBack={handleProceedBack} />
        : null }



        </div>
        </MainStyled>  
    )
}


const MainStyled = styled.div`
.steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
}

.step-button {
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    transition: .4s;
    background-color: #b1b1b1b1;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.step-button[aria-expanded="true"] {
    width: 60px;
    height: 60px;
    background-color: rgba(6, 124, 75, 1);
    color: #fff;
}

.step-button-active {
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    transition: .4s;
    background-color: rgba(6, 124, 75, 1);
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;

}

.step-item {
    display: flex;
    flex-direction: column;
    z-index: 10;
    text-align: center;
    align-items: center;
    justify-content: center;
}

#progress {
  -webkit-appearance:none;
    position: absolute;
    width: 95%;
    z-index: 5;
    height: 6px;
    margin-left: 18px;
    margin-bottom: 18px;
    border-radius: 5px
}

/* to customize progress bar */
#progress::-webkit-progress-value {
    background-color: rgba(6, 124, 75, 1);
    transition: .5s ease;
}

#progress::-webkit-progress-bar {
    background-color: #a7a7a7;

}
`