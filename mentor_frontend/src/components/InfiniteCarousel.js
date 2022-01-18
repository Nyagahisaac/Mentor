import React from 'react'
import { Link } from 'react-router-dom'

const news_carousel = [
    {
        'id':'1',
        'alt':'Covid-19 Relief',
        'title':'Covid-19 Relief',
        'caption':'Mentor Sacco contributes to national growth by providing the needed financial ...',
        'url':'/News/imslide1.jpeg',
    },
    {
        'id':'2',
        'alt':'kids at a school',
        'title':'School Children receiving lunch',
        'caption':'Environmental protection is essential for all institutions to place focus because ...',
        'url':'/News/imslide2.jpeg',
    },
    {
        'id':'3',
        'alt':'Mentor sacco pledge to CSR',
        'title':'Mentor sacco pledge to CSR',
        'caption':'Teachers in Muranga county convened on a 3-day training on financial awareness ...',
        'url':'/News/imslide3.jpeg',
    }
]

function InfiniteCarousel() {
    const item1 = news_carousel[0]
    const item2 = news_carousel[1]
    const item3 = news_carousel[2]
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-4 my-2">
                {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <Link to="/sacco_news/news_title">
                            <div class="carousel-item active">
                                <div class="card" >
                                    <img src={item1.url} class="d-block w-100" alt="..." />
                                    <div class="card-body" >
                                        <p class="card-text">{item1.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/sacco_news/news_title">
                            <div class="carousel-item">
                                <div class="card" >
                                    <img src={item2.url} class="d-block w-100" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item2.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/sacco_news/news_title">
                            <div class="carousel-item">
                                <div class="card" >
                                    <img src={item3.url} class="d-block w-100" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item3.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
             </div> */}
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card news-card">
                                <Link to="/sacco_news/news_title">
                                    <img src={item1.url}  height='80%' alt="..." />
                                    <div class="card-body" >
                                        <p class="card-text">{item1.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item2.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item2.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item3.url}  alt="..." height='80%'/>
                                    <div class="card-body">
                                        <p class="card-text">{item3.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4 my-2">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item3.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item3.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item1.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item1.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item2.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item2.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-4 my-2">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item2.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item2.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item3.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item3.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card news-card" >
                                <Link to="/sacco_news/news_title">
                                    <img src={item1.url}  height='80%' alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{item1.caption}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfiniteCarousel
