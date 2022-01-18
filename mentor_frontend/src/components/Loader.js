import React from 'react'
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
       <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
       <Loader
            type="Oval"
            color="#067c4b "
            height={200}
            width={200}           
            />
            <div className='py-5'>Just a moment</div>
       </div>
    )
}


export const smallerLoader  = () =>  {
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
        <Loader
             type="Oval"
             color="#067c4b "
             height={50}
             width={50}           
             />
             <div className='py-5'>Just a moment</div>
        </div>
    )
}