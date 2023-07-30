import * as React from "react"
import { SEO } from "../components/seo"
import '../pages_styles/Courses/Courses.scss';
import Layout from "../components/layout"

var base_url = process.env.REACT_APP_ROOT_URL;
var FullCoursesData = require('../pages_styles/Courses/FullCoursesData.json');

const Courses = () => {
  return (
    <Layout>

        <section className="hero-wrap hero-wrap-2 courses_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Nuestros Cursos</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos<i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section className="ftco-section">
        <div className="container-fluid px-4">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section ftco-animate">
              <h6>Ofrecemos cursos de alta calidad que abarcan desde preparación para exámenes de admisión y bachillerato, 
                    hasta cursos completos de inglés y matemáticas.</h6>
            </div>
          </div>	
          <div className="row">
          {FullCoursesData.map(course =><div className="col-md-3 course ftco-animate course_cont" key={course.id}>
              
              <div className={`img ${course.id}`}></div>
              
              <div className="text pt-4 container_course_info">
                
                <p className="meta d-flex">
                  <span><i className="icon-user mr-2"></i>{course.prof}</span>
                  <span><i className="icon-table mr-2"></i>{course.seats}</span>
                  <span><i className="icon-calendar mr-2"></i>{course.type}</span>
                </p>

                <div className='course_name'>
                  <h3><a href={`${base_url}/cursos/${course.url}`}>{course.name}</a></h3>
                </div>
                
                <div className='course_description'>
                <p>{course.description}</p>
                </div>
                
                <div className='course_link'>
                <p><a href={`${base_url}/cursos/${course.url}`} className="btn btn-primary">Ver descripción del curso</a></p>
                </div>

              </div>

          </div>)}
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default Courses;

export const Head = () => (
    <SEO title="IBASA | Cursos" />
  )