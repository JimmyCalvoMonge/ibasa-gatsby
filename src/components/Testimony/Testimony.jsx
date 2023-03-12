import * as React from "react"
import Loadable from "react-loadable"

import './Testimony.scss';  
var TestimonyData = require('./TestimonyData.json');

const loader=()=>(<div> Espera un momento ... </div>)
const MyLoadableOwlCarousel = Loadable({
  loader: () => import("../../components/OwlCarousel/OwlCarousel"),
  loading: loader,
})

const Testimony = () => {
  return (
    <div>
      <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-2">
              <div className="col-md-8 text-center heading-section ftco-animate">
                <h2 className="mb-4">¿Qué opinan nuestros estudiantes?</h2>
                <p> Le aseguramos un excelente trato y el mejor esfuerzo de nuestros profesores para que logre sus objetivos. Nuestros estudiantes
                confirman la calidad de nuestro servicio: </p>
              </div>
            </div>
            <div className="row ftco-animate justify-content-center">
              <div className="col-md-12">
                <MyLoadableOwlCarousel
                items={1}
                margin={8}
                loop={true}
                autoplay={true}
                animateOut={'slideOutLeft'}
                dots={true}
                dotsClass={'owl-dots'}
                children={
                  TestimonyData.map(testimony =><div className="item" key={testimony.id}>
                    <div className="testimony-wrap d-flex">
                      <div className={`user-img mr-4 ${testimony.id}`}>
                      </div>
                      <div className="text ml-2">
                        <span className="quote d-flex align-items-center justify-content-center">
                          <i className="icon-quote-left"></i>
                        </span>
                        <p>{testimony.testimony}</p>
                        <p className="name">{testimony.name}</p>
                        <span className="position">{testimony.info}</span>
                      </div>
                    </div>
                  </div>)
                  }
                ></MyLoadableOwlCarousel>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Testimony;