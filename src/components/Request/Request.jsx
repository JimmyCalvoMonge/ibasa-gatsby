import * as React from "react"

import './Request.scss';

const Request= () => {
  return (
    <div>
      <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb request_background" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 py-5 px-md-5">
              <div className="py-md-5">
                <div className="heading-section heading-section-white ftco-animate mb-5">
                  <h2 className="mb-4">¡Póngase en contacto con nosotros!</h2>
                  <p>En Instituto IBASA contamos con profesionales en
                  educación para preparar a los y las estudiantes y
                  que puedas aprobar los exámenes que aplica el MEP
                  y para los exámenes de admisión de las universidades.</p>
                </div>
                <form action="#" className="appointment-form ftco-animate">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nombre Completo"></input>
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Correo Electrónico"></input>
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select name="" id="" className="form-control">
                            <option value="">Seleccione un Curso ...</option>
                            <option value="">Art Lesson</option>
                            <option value="">Language Lesson</option>
                            <option value="">Music Lesson</option>
                            <option value="">Sports</option>
                            <option value="">Other Services</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ml-md-4">
                      <input type="text" className="form-control" placeholder="Teléfono"></input>
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <textarea name="" id="" cols="30" rows="3" className="form-control" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="form-group ml-md-4">
                      <input type="submit" value="Solicitar Información" className="btn btn-primary py-3 px-4"></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Request;