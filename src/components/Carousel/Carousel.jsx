import * as React from "react"
import Loadable from "react-loadable"

import './Carousel.scss';  
var CarouselData = require('./CarouselData.json');

const loader=()=>(<div> Loading owl carousel ... </div>)
const MyLoadableOwlCarousel = Loadable({
  loader: () => import("../OwlCarousel/OwlCarousel"),
  loading: loader,
})

const Carousel= () => {

  return (
    <React.Fragment>
      <section>
      <MyLoadableOwlCarousel
      items={1}
      margin={8}
      loop={true}
      autoplay={true}
      animateOut={'slideOutLeft'}
      dots={true}
      dotsClass={'owl-dots'}
      children={CarouselData.map(carousel =><div className={`${carousel.id}`} key={carousel.id}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
            <div className="carousel_content">
              <div className='carousel_text'>
                <h1 className="mb-4">{carousel.title}</h1>
                <p>{carousel.description}</p>
                <p><a href={carousel.href} className="btn btn-primary px-4 py-3 mt-3">Leer más</a></p>
              </div>
            </div>
          </div>
          </div>
        </div>)}
      >
      </MyLoadableOwlCarousel>
      </section>
      <section className="ftco-services ftco-no-pb">
        <div className="container-wrap">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-teacher"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Certified Teachers</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Special Education</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>    
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Book &amp; Library</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Sport Clubs</h3>
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
              </div>      
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Carousel;