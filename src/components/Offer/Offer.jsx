import * as React from "react"

import './Offer.scss';

const Offer= () => {
  return (
    <div className="home-wrapper">
      <section className="ftco-section ftco-no-pt ftc-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
              <div className="img offer_side_image"></div>
            </div>
            <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
              <h1> Instituto IBASA</h1>
              <h2 className="mb-4">¿Por qué estudiar con Instituto IBASA?</h2>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-security"></span></div>
                    <div className="text pl-3">
                      <h3>Mayor accesibilidad</h3>
                      <p>En Instituto IBASA ofrecemos cursos a un costo accesible,
                      contamos con ofertas de matrículas y materiales
                      como los temas de examen de las asignaturas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-reading"></span></div>
                    <div className="text pl-3">
                      <h3>Flexibilidad en horarios</h3>
                      <p>Tenemos horarios durante mañana, tarde y noche, que se adaptan a los tiempos de cualquier persona.</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-diploma"></span></div>
                    <div className="text pl-3">
                      <h3>Temario completo del examen de admisión</h3>
                      <p>En Instituto IBASA le brindamos información completa de los
                      exámenes de admisión para las universidades públicas.</p>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-6">
                  <div className="services-2 d-flex">
                    <div className="icon mt-2 d-flex justify-content-center align-items-center"><span className="flaticon-education"></span></div>
                    <div className="text pl-3">
                      <h3>Clases interactivas</h3>
                      <p>Contamos con profesores expertos que utilizan recursos dinámicos y 
                      efectivos para brindarte los mejores métodos para un aprendizaje eficaz. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Offer;