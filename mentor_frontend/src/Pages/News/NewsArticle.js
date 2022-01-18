import React from 'react'
import { Link } from 'react-router-dom'

function NewsArticle({title, date, url, image}) {
    return (
        <Link to={url} className="col-12 col-md-11 mx-2 my-1">
            <div className="card" >
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body green-color text-white">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">Mentor Sacco | {date}</p>
                </div>
            </div>
            <hr />
        </Link>
    )
}

export default NewsArticle
