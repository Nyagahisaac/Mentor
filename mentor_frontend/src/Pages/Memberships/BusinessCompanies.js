import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function BusinessCompanies() {
    const [bizType, setBizType] = useState('')
    const [url, setUrl] = useState('/membership/businesses')
    const [bizTypeMessage, setBizTypeMessage] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
        if (bizType==="business"){
            setUrl('/membership/businesses')
        }
        else if (bizType==="company"){
            setUrl('/membership/companies')
        }
    }, [bizType])

    const handleSubmit=(e) =>{
        setBizTypeMessage('')
        e.preventdefault()
        if ( url==='' ){
            setBizTypeMessage('**This field is required') 
        }
    }
    return (
        <form onSubmit={handleSubmit} className="container py-5">
            <h2>Membership Under Businesses and Companies</h2>
            <p>Select appropriately</p>
            <div class="form-check">
                <input value = "business" checked onChange={e=>setBizType(e.target.value)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Registered Business
                </label>
            </div>
            <div class="form-check">
                <input value = "company" onChange={e=>setBizType(e.target.value)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label class="form-check-label" for="flexRadioDefault2">
                    Registered Company
                </label>
            </div>
            <small class="form-label px-3 form-error">{bizTypeMessage}</small>

            <div className="row justify-content-center py-5">
                <Link to={url}>
                    <button type="submit" className="col-md-3 btn btn-outline-primary rounded" type="submit">Proceed</button>
                </Link>
            </div>
        </form>
    )
}

export default BusinessCompanies
