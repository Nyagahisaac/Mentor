import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import homeIcon from "../../images/icons/homevector.svg";
import WhiteHeader from '../../Navigation/WhiteHeader';


import NewsImage5 from '../../images/newsImages/newsimage5.jpg'
import NewsImage6 from '../../images/newsImages/newsimage6.jpg'
import NewsImage9 from '../../images/newsImages/newsimage9.jpg'
import NewsImage8 from '../../images/newsImages/newsimage8.jpg'

import NewsArticle from './NewsArticle'
// import PressReleaseComponent from './PressReleas'

const press_releases = [
    {
        'id':'1',
        'title':"Chairman's Report For The 41st AGM",
        'date':'July 25, 2021',
        'url': '/sacco_news/news_title'
    },
    {
        'id':'2',
        'title':"Chairman's Report For The 39th AGM",
        'date':'April 30, 2020',
        'url': '/sacco_news/news_title'
    },
    {
        'id':'3',
        'title':"Members Information Day 2017",
        'date':'May 30, 2017',
        'url': '/sacco_news/news_title'
    },
]

function NewsList() {
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
              News
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>

        <div className="container mt-2r pb-3">
        <h1 id="subheader">Press Releases</h1>
        
        <div className="row" style={{marginBottom: '4rem'}}>
    <div className="col">
      <img src={NewsImage5} className="img-fluid" alt="" />
      <h1 id="subheader" className="pt-3 ">Chairman's Repoort For The 41st AGM</h1>
      <p >Ut sem odio eget venenatis consequat convallis praesent ultrices a. Enim libero turpis rhoncus massa interdum.</p>
      <p className="news-title-date">October 19, 2021</p>
      <Link className="col-md-5" to="/sacco_news/press_release">
        <button className="btn-transparent-small">Read more</button>
    </Link>
    </div>
    <div className="col" style={{borderLeft: '1px solid #000', paddingRight: '20px'}}>

     <div style={{paddingRight: '20px'}}>
     <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage6} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/press_release">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>

  <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage8} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/press_release">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>

  <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/press_release">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>


     </div>
     <div>
        
     </div>

    </div>
  </div>

  <div className="line"></div>

  <h1 id="subheader" className="mt-3r">News and Blog</h1>

  <div class="row">
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/news_title">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/news_title">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link  className="link-black" to="/sacco_news/news_title">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/news_title">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
  </div>

  <div class="row" style={{marginBottom: '4rem'}}>
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link className="link-black" to="/sacco_news/news_title">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Link>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
    </div>
  </div>

        </div>
        </div>
    )
}

export default NewsList
