import * as React from "react"
import './Teachers.scss';

var base_url = process.env.REACT_APP_ROOT_URL;
var TeachersData = require('./TeachersData.json');

const Teachers= () => {
  return (
    <div className="home-wrapper">
      <section className="ftco-section bg-light">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <h2 className="mb-4">Profesores Certificados</h2>
            <p>Nuestro personal cuenta con una amplia experiencia en educación, cursos presenciales y virtuales. Recibirá una atención de 
            calidad de la mano de los expertos.</p>
          </div>
          </div>	
          <div className="row">

            {TeachersData.map(teacher =><div className="col-md-6 col-lg-3 ftco-animate" key={teacher.id}>
              <div className="staff">
                <div className="img-wrap d-flex align-items-stretch">
                  <div className={`img align-self-stretch ${teacher.id}`}></div>
                </div>
                <div className="text pt-3 text-center">
                  <h3>{teacher.name}</h3>
                  <span className="position mb-2">{teacher.position}</span>
                  <div className="faded">
                    <p>{teacher.description}</p>
                    <ul className="ftco-social text-center">
                    <li className="ftco-animate"><a href={`${base_url}`}><span className="icon-twitter"></span><p style={{'display':'none'}}> Teacher1</p></a></li>
                    <li className="ftco-animate"><a href={`${base_url}`}><span className="icon-facebook"></span><p style={{'display':'none'}}> Teacher1</p></a></li>
                    <li className="ftco-animate"><a href={`${base_url}`}><span className="icon-google-plus"></span><p style={{'display':'none'}}> Teacher1</p></a></li>
                    <li className="ftco-animate"><a href={`${base_url}`}><span className="icon-instagram"></span><p style={{'display':'none'}}> Teacher1</p></a></li>
                    </ul>
                </div>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teachers;