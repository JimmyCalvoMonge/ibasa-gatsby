import * as React from "react"
import './Courses.scss';
var base_url = process.env.REACT_APP_ROOT_URL;
var CoursesData = require('./CoursesData.json');

const Courses= () => {
  return (
    <div>
       <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h2 className="mb-4"><span>Nuestros</span> Cursos</h2>
              <p>Algunos de nuestros cursos más populares. Mire la lista completa <a href="/cursos">aquí.</a></p>
            </div>
          </div>	
          <div className="row">
          {CoursesData.map(course =><div className="col-md-3 course ftco-animate course_cont" key={course.id}>
              
              <div className={`img ${course.id}`}></div>
              
              <div className="text pt-4 container_course_info">
                
                <p className="meta d-flex">
                  <span><i className="icon-user mr-2"></i>{course.prof}</span>
                  <span><i className="icon-table mr-2"></i>{course.seats}</span>
                  <span><i className="icon-calendar mr-2"></i>{course.type}</span>
                </p>
                
                <div className='course_name'>
                  <h3><a href={`${base_url}`}>{course.name}</a></h3>
                </div>
                
                <div className='course_description'>
                <p>{course.description}</p>
                </div>
                
                <div className='course_link'>
                <p><a href={`${base_url}`} className="btn btn-primary">Ir al programa</a></p>
                </div>

              </div>

          </div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;