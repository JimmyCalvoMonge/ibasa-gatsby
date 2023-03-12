import * as React from "react"
import '../pages_styles/Courses/Courses.scss';

// Import base Layout
import Layout from "../components/layout"

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

        <section className="ftco-section bg-light">
            <div className="container-fluid px-4">
                <div className="row">

                    {FullCoursesData.map(course =><div className="col-md-3 course ftco-animate" key={course.id}>
                            <div className={`img ${course.id}`}></div>
                            <div className="text pt-4">
                                <p className="meta d-flex">
                                    <span><i className="icon-user mr-2"></i>{course.prof}</span>
                                    <span><i className="icon-table mr-2"></i>{course.seats}</span>
                                    <span><i className="icon-calendar mr-2"></i>{course.type}</span>
                                </p>
                                <h3><a href="/">{course.name}</a></h3>
                                <p>{course.description}</p>
                                <p><a href="/" className="btn btn-primary">Ver Descripción del curso</a></p>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>

    </Layout>
  );
}

export default Courses;