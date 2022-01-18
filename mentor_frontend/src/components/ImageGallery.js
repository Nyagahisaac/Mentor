import {React, useEffect} from 'react'
import './imagegallery.css'
import Popup from "reactjs-popup";
import homeIcon from "../images/icons/homevector.svg";
import WhiteHeader from "../Navigation/WhiteHeader";

const csr_images = [
    {
        'id':'1',
        'alt':'Covid-19 Relief',
        'title':'Covid-19 Relief',
        'caption':'Mentor sacco took an initiative to provide sanitizers to XYZ institution',
        'url':'/CSR/covid.jpeg',
    },
    {
        'id':'2',
        'alt':'kids at a school',
        'title':'School Children receiving lunch',
        'caption':'Mentor sacco visited XYZ school and provided lunch to the kids',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'3',
        'alt':'Mentor sacco pledge to CSR',
        'title':'Mentor sacco pledge to CSR',
        'caption':'All institutions need to provide CSR to the community',
        'url':'/CSR/csr.jpeg',
    },
    {
        'id':'4',
        'alt':'Donation to ABC school',
        'title':'Donation to ABC school',
        'caption':'Mentor sacco provided food material to the children learning in slums',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'5',
        'alt':'Efforts to sustain the environment',
        'title':'Efforts to sustain the environment',
        'caption':'Mentor sacco pledges to commit to enabling environmental protection',
        'url':'/CSR/volunteer.jpeg',
    },
    {
        'id':'6',
        'alt':'Impactful solutions for the community',
        'title':'Impactful solutions for the community',
        'caption':'Mentor sacco leads saccos in creating CSR a mandatory activity',
        'url':'/CSR/sustain.jpeg',
    },
    {
        'id':'7',
        'alt':'kids at a school',
        'title':'School Children receiving lunch',
        'caption':'Mentor sacco visited XYZ school and provided lunch to the kids',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'8',
        'alt':'Covid-19 Relief',
        'title':'Covid-19 Relief',
        'caption':'Mentor sacco took an initiative to provide sanitizers to XYZ institution',
        'url':'/CSR/covid.jpeg',
    },
    {
        'id':'9',
        'alt':'Covid-19 Relief',
        'title':'Covid-19 Relief',
        'caption':'Mentor sacco took an initiative to provide sanitizers to XYZ institution',
        'url':'/CSR/covid.jpeg',
    },
    {
        'id':'12',
        'alt':'kids at a school',
        'title':'School Children receiving lunch',
        'caption':'Mentor sacco visited XYZ school and provided lunch to the kids',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'13',
        'alt':'Mentor sacco pledge to CSR',
        'title':'Mentor sacco pledge to CSR',
        'caption':'All institutions need to provide CSR to the community',
        'url':'/CSR/csr.jpeg',
    },
    {
        'id':'14',
        'alt':'Donation to ABC school',
        'title':'Donation to ABC school',
        'caption':'Mentor sacco provided food material to the children learning in slums',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'13',
        'alt':'Efforts to sustain the environment',
        'title':'Efforts to sustain the environment',
        'caption':'Mentor sacco pledges to commit to enabling environmental protection',
        'url':'/CSR/volunteer.jpeg',
    },
    {
        'id':'14',
        'alt':'Impactful solutions for the community',
        'title':'Impactful solutions for the community',
        'caption':'Mentor sacco leads saccos in creating CSR a mandatory activity',
        'url':'/CSR/sustain.jpeg',
    },
    {
        'id':'15',
        'alt':'kids at a school',
        'title':'School Children receiving lunch',
        'caption':'Mentor sacco visited XYZ school and provided lunch to the kids',
        'url':'/CSR/kids.jpeg',
    },
    {
        'id':'16',
        'alt':'Covid-19 Relief',
        'title':'Covid-19 Relief',
        'caption':'Mentor sacco took an initiative to provide sanitizers to XYZ institution',
        'url':'/CSR/covid.jpeg',
    },
]

function ImageGallery() {
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
            <li className="breadcrumb-item">
              <a href="csr/gallery" className="breadcrumb-item-override-active">
                Image Gallery
              </a>
            </li>
            
          </ol>
        </nav>
        <div className="line"></div>


            <h1 className="text-center py-5">Mentor CSR Gallery</h1>
            <div class="gallery-image mb-5">
                {csr_images.map(image=>(
                    <Popup key={image.id} trigger={
                        <div class="img-box">
                            <img src={image.url} alt={image.alt} />
                            <div class="transparent-box">
                                <div class="caption">
                                <p>{image.title}</p>
                                <p class="opacity-low">{image.caption}</p>
                                </div>
                            </div> 
                        </div>
                    } modal>
                        <div class="img-box-zoom">
                            <img width="100%" src={image.url} alt={image.alt} />
                            <div class="transparent-box">
                                <div class="caption text-black">
                                    <p>{image.title}</p>
                                    <p class="opacity-low">{image.caption}</p>
                                </div>
                            </div>
                        </div>
                    </Popup>
                ))}
                
            </div>
        </div>
    )
}

export default ImageGallery
