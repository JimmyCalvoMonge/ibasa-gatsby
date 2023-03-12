
import * as React from "react"
import '../pages_styles/Teachers/Teachers.scss';

// Import base Layout
import Layout from "../components/layout"

var FullTeachersData = require('../pages_styles/Teachers/FullTeachersData.json');

const Teachers = () => {
  return (
    <Layout>

        <section className="hero-wrap hero-wrap-2 teacher_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Nuestro Personal</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Profesores<i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section className="ftco-section bg-light">
            <div className="container-fluid px-4">
                <div className="row">

                    {FullTeachersData.map(teacher =><div className="col-md-6 col-lg-3 ftco-animate" key={teacher.id}>
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
                        <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span>
                        <p style={{'display':'none'}}>Twitter</p>
                        </a></li>
                        <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span>
                        <p style={{'display':'none'}}>Facebook</p>
                        </a></li>
                        <li className="ftco-animate"><a href="/"><span className="icon-google-plus"></span>
                        <p style={{'display':'none'}}>Google plus</p>
                        </a></li>
                        <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span>
                        <p style={{'display':'none'}}>Instagram</p>
                        </a></li>
                        </ul>
                    </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>

    </Layout>
  );
}

export default Teachers;