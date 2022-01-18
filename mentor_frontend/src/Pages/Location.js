import {React, useEffect} from 'react'
import homeIcon from "../images/icons/homevector.svg";
import WhiteHeader from '../Navigation/WhiteHeader'

const branches=[
    {
        'id':'1',
        'branch_name':'Muranga',
        'map_url':'https://goo.gl/maps/Jm16gLKMPqZewyxZ7',
    },
    {
        'id':'1',
        'branch_name':'Kenol Town',
        'map_url':'https://goo.gl/maps/Jm16gLKMPqZewyxZ7',
    },
    {
        'id':'1',
        'branch_name':'Kiria-ini Town',
        'map_url':'https://goo.gl/maps/5ofrPhcDphCgusfc9',
    },
    {
        'id':'1',
        'branch_name':'Ithanga',
        'map_url':'https://goo.gl/maps/Jm16gLKMPqZewyxZ7',
    },
]

const customer_service_centers=[
    {
        'id':'1',
        'branch_name':"Head Office, Murang'a Town",
        'location':'Mentor Complex, Uhuru Highway',
        'contact': '0111026000, 0704066827',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'2',
        'branch_name':'Thika Town Branch',
        'location':'Thika',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'3',
        'branch_name':'Kenol Town Branch',
        'location':'Highway Villa Building',
        'contact': '0704350662, 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'4',
        'branch_name':'Nairobi Branch',
        'location':'Ngara',
        'contact': '0713072137',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'5',
        'branch_name':'Kiriaini Town Branch',
        'location':'Kiriaini Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'6',
        'branch_name':'Ithanga Branch',
        'location':'Ithanga Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'7',
        'branch_name':'Kangari Town Branch',
        'location':'Kangari Town',
        'contact': '020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
    {
        'id':'8',
        'branch_name':'Kandara Town Kandara',
        'location':' Kandara Town',
        'contact': ' 020 3580167',
        'postal_address':'P.O. Box 789–10200, Murang´a',
    },
]

function Location() {
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
             Locations
           </span>
         </li>
       </ol>
     </nav>
     <div className="line"></div>

        <div className="row py-5">
            <h1 className="text-center">Our Branches</h1>
            <p className="text-center">Expanding our branch network to serve you better at your convenience</p>
            <div className="col-12">
                <div className="row justify-content-center">
                    {branches.map(branch=>(
                        <div key={branch.id} className="col-10 col-md-2 mx-3 my-3">
                            <div className="location">
                                <a target="_blank" rel="noopener noreferrer" href={branch.map_url} >
                                    <div className="bg-location px-3 py-3">
                                        <h2>{branch.branch_name}</h2>
                                        View on Map
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row justify-content-center py-5">
                    <div className="col-10 col-md-9">
                        <h1 className="text-center">Customer Service</h1>
                        <p className='py-5'>At Mentor, Customer delight is our ultimate goal. We have always encouraged our members and non-members to feel free and share with us complements, complaints and any other feedback every time they visit us. We value your feedback.</p>
                        <div className="row justify-content-start">
                            {customer_service_centers.map(branch=>(
                                <div key={branch.id} className="col-12 col-md-3 mb-3">
                                    <div className="border">
                                        <div className="px-3 py-3">
                                            <p><strong><i class="fas fa-arrow-circle-right"></i> {branch.branch_name}</strong></p>
                                            <p>{branch.location}</p>
                                            <p>{branch.contact}</p>
                                            <p>{branch.postal_address}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Location
