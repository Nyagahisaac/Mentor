import React from 'react'
import { Link } from 'react-router-dom'

export default function Tryother() {
    return (
        <div className="row py-3">
                    <div className="col-12 col-md-7">
                        <h1 className="pt-5" id="subheader">Not interested in this product? </h1>
                        <p>No worries. Check out our other loan products that may interest you</p>
                        <div className="row py-5">
                            <div className="col-12">
                                <Link to="/">
                                    <button className="btn btn-outline-primary rounded" type="submit">Try Other Products</button>
                                </Link>
                            </div>
                        </div>
                    </div>                  
                </div>
    )
}
