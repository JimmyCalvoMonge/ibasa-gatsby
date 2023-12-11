import * as React from "react"
import { useState } from "react";
import './Request.scss';

const Request= () => {

    const [message, setMessage] = useState("");
    const getMessage = (t) => {
        setMessage(t);
    };

    const [email, setEmail] = useState("");
    const getEmail = (t) => {
        setEmail(t);
    };

    const [name, setName] = useState("");
    const getName = (t) => {
        setName(t);
    };

    const [telephone, setTelephone] = useState("");
    const getTelephone = (t) => {
        setTelephone(t);
    };

    const [course, setCourse] = useState("");
    const getCourse = (t) => {
        setCourse(t);
    };

    const [sent, setSent] = useState(false);

    const handleClick = () => {

        console.log(name);
        console.log(email);
        console.log(course);
        console.log(message);

        // Add send email logic here !

        setName('');
        setEmail('');
        setCourse('Seleccione un Curso ...');
        setMessage('');
        setTelephone('');
        
        setSent(true);
        setTimeout(() => {
            setSent(false)
         }, 10000);
    };


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
                <div className="appointment-form ftco-animate">
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input type="text" className="form-control"
                      placeholder="Nombre Completo" value={name} onChange={(e) => getName(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                      <input type="text" className="form-control"
                      placeholder="Correo Electrónico" value={email} onChange={(e) => getEmail(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                          <select name="" id="" className="form-control" value={course} onChange={(e) => getCourse(e.target.value)}>
                            <option value="">Seleccione un Curso ...</option>
                            <option value="">Examen de admisión UCR-UNA</option>
                            <option value="">Examen de admisión TEC</option>
                            <option value="">Inglés Startup</option>
                            <option value="">Bachillerato por Madurez</option>
                            <option value="">Educación Diversificada a Distancia (EDAD)</option>
                            <option value="">Tercer Ciclo</option>
                            <option value="">Curso DiMA</option>
                            <option value="">Prueba de Habilidades Cuantitativas</option>
                            <option value="">Nivelación Matemática</option>
                            <option value="">Prueba de Diagnóstico de Matemática del TEC</option>
                          </select>
                        </div>
                      </div>
                  </div>
                  <div className="d-md-flex">
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Teléfono"
                    value={telephone} onChange={(e) => getTelephone(e.target.value)}></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Mensaje"
                    value={message} onChange={(e) => getMessage(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Solicitar Información" className="btn btn-primary py-3 px-4"
                    onClick={() => handleClick()}></input>
                  </div>
                  <div>
                  {sent ? 
                  <h4> Su mensaje se ha enviado a IBASA con éxito.
                  Pronto un agente le contactará para aclarar todas sus dudas.
                  </h4>: <h4></h4>}
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

export default Request;