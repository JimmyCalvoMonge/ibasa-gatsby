import * as React from "react"
import Loadable from "react-loadable"
import './Carousel.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
var base_url = 'https://institutoibasacr.com';
var CarouselData = require('./CarouselData.json');

const loader=()=>(<div> Cargando ... </div>)
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
            <div data-scrollax-parent="true">
            <div className="carousel_content">
              <div className='carousel_text'>
                <h1 className="mb-4">{carousel.title}</h1>
                <p>{carousel.description}</p>
                <p><a href={`${base_url}/${carousel.href}`} className="btn btn-primary px-4 py-3 mt-3">Leer más</a></p>
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
                  <h3 className="heading">Profesores Certificados</h3>
                  <p>Nuestros profesores cuentan con gran experiencia en educación y preparación para exámenes de admisión y bachillerato.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-reading"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Clases Virtuales</h3>
                  <p>Nuestro modelo de clases virtuales se ajusta a las necesidades y horario de nuestros estudiantes.</p>
                </div>
              </div>    
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-books"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Recursos Actualizados</h3>
                  <p>Todo nuestro material se actualiza con los temas y evaluaciones más recientes del MEP y Universidades Públicas.</p>
                </div>
              </div>      
            </div>
            <div className="col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
              <div className="media block-6 d-block text-center">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="flaticon-diploma"></span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Desempeño Histórico</h3>
                  <p>IBASA ha sido uno de los institutos privados con mayor promoción histórica en Costa Rica</p>
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