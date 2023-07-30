import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';
var base_url = process.env.REACT_APP_ROOT_URL;

const AdmisionTEC = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Examen de Admisión TEC </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 admision_tec_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso de Preparación para el Examen de Admisión TEC</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>
        <p style={{marginTop:"5%", textAlign:"center"}}> Ir a <a href={`${base_url}/cursos/admision-ucr-una`}> Cursos de Examen de Admisión </a></p>
    </Layout>
  );
}

export default AdmisionTEC;