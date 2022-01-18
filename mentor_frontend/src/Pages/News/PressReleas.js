import React from 'react'
import { Link } from 'react-router-dom'
import homeIcon from "../../images/icons/homevector.svg";
import WhiteHeader from '../../Navigation/WhiteHeader';
import NewsImage from '../../images/newsimage.svg'
import NewsImage5 from '../../images/newsImages/newsimage5.jpg'
import NewsImage9 from '../../images/newsImages/newsimage9.jpg'


function PressReleaseComponent({title, date, url}) {
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
              Press Release
            </span>
          </li>
        </ol>
      </nav>
      <div className="line"></div>


      <div className="container mt-2r">
          <h1 id="subheaderheavy2" className="py-4">Lorem ipsum dolor sit amet, cing elit consectetur adipiscing elit.</h1>
          <div class="row">
    <div class="col-10">
    <img src={NewsImage5} className="img-fluid" alt="" style={{width: '95%'}}/>
    <p className="news-title-date">October 19, 2021</p>
    
    <p className="article-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus id lorem vitae, turpis amet egestas non lectus. Tempus massa pretium elit, condimentum ut faucibus vel suscipit. Elementum et aliquam vestibulum tempor posuere scelerisque. Nunc felis ut nisi cursus vestibulum commodo. Viverra tincidunt odio lacus, at blandit sed gravida volutpat. Mattis sapien auctor condimentum enim maecenas risus. Nisl est mi enim pulvinar tincidunt sit. Scelerisque euismod quis sociis fringilla scelerisque ipsum rhoncus cum. Gravida cursus tellus sed curabitur semper proin et mattis. Morbi faucibus lectus quis velit consequat. Ac varius quis dolor, eleifend ut mi dapibus. Turpis maecenas elementum neque amet placerat. Et nunc lectus aenean in. Bibendum nisl ornare egestas facilisis id libero dolor, volutpat.
Pellentesque volutpat vulputate scelerisque consectetur mollis molestie. Risus tortor convallis lorem cras tortor. Risus, facilisi ullamcorper cras sit id amet tellus. Enim felis nec habitasse tristique dignissim in dis purus. Velit sodales amet morbi habitant nunc, venenatis. Morbi condimentum lorem nec netus euismod mauris, morbi lorem. 
</p>

<div className="article-highlight-div">
<p className="article-highlight-p">Dictum in sodales egestas vestibulum. Imperdiet placerat condimentum diam morbi donec nibh imperdiet. Lorem urna pulvinar tempor feugiat. Metus, ut amet, sem dolor. Fames nunc consequat suscipit nunc, eget. Id pellentesque luctus suscipit eget. Pellentesque enim cras quis adipiscing odio enim faucibus.</p>
</div>
<h1 id="subheaderheavy" className="mt-3r">Insert sub-topic</h1>
<img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%', height: '60vh'}}/>
<p className="article-p">
Urna dui pretium tincidunt dui. Nibh pellentesque suspendisse enim aliquam risus nec in sed integer. Cursus purus, netus nibh tellus nunc laoreet. Congue etiam vitae luctus nisl, tellus volutpat quis malesuada. Sed vitae luctus facilisi pellentesque nibh hac non. Eu semper ipsum orci nulla a sed. At fermentum vel, in libero, tortor gravida. Vestibulum diam suscipit donec feugiat massa donec. Cras eget sagittis suspendisse et cursus. At eget mauris porttitor magnis nunc commodo. 

A, gravida diam elementum ultricies aliquet et et venenatis est. Amet, mattis non ut sagittis volutpat neque ante. At quis massa, metus, ac vel convallis integer integer hendrerit. Vulputate tincidunt urna nec in.

Sit dolor ultrices dictumst sem egestas consequat orci volutpat orci. Nisi diam eget consectetur viverra vitae amet elementum sed. Tellus mauris vitae, gravida sapien adipiscing sagittis, quis cras. Non sit quis nullam lacus, volutpat nibh malesuada. Dictum consequat malesuada faucibus eu sit iaculis.

Venenatis aliquam eleifend pellentesque mattis congue a blandit. </p>
    </div>



    <div class="col-2">
        <p>Article writer</p>
        <p>designation</p>
        <p>More information about the author</p>
        <p>twitter: @twitterhandle</p>
        <p>facebook: @facebookhandle</p>
    </div>

  </div>


 
</div>

<div className="morenews"> 
<div className="container">
<h3 id="subheader">More form our news and blogs</h3>
<div class="row">
    <div class="col">
    <div class="row row-cols-2" style={{marginBottom: '1rem'}}>
    <div class="col">
        <img src={NewsImage9} alt="" className="img-fluid" style={{width: '100%'}}/>
    </div>
    <div class="col"> 
    <Link to="/sacco_news/news_title">
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
    <Link to="/sacco_news/news_title">
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
    <Link to="/sacco_news/news_title">
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

  <div class="row" style={{marginBottom: '4rem'}}>
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


<div className="container">

<h1 id="subheader" className="mt-3r">News and Blog</h1>
<div class="row mb-3">
    <div class="col">
    <img src={NewsImage5} className="img-fluid" alt="" style={{width: '95%'}}/>
    </div>
    <div class="col">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem odio eget venenatis consequat convallis praesent ultrices a.</p>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
    <img src={NewsImage5} className="img-fluid" alt="" style={{width: '95%'}}/>
    </div>
    <div class="col">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem odio eget venenatis consequat convallis praesent ultrices a.</p>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
  <div class="row mb-3">
    <div class="col">
    <img src={NewsImage5} className="img-fluid" alt="" style={{width: '95%'}}/>
    </div>
    <div class="col">
    <p className="news-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem odio eget venenatis consequat convallis praesent ultrices a.</p>
    <p className="news-title-date">October 19, 2021</p>
    </div>
  </div>
  
  </div>

      </div>
    )
}

export default PressReleaseComponent
