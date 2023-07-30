import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';
var base_url = process.env.REACT_APP_ROOT_URL;

const Dima = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Curso DiMA </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 dima_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso DiMA </h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>
        <p style={{marginTop:"5%", textAlign:"center"}}> Ir a <a href={`${base_url}/cursos/nivelacion-matematicas`}> Curso de Nivelación de Matemáticas </a></p>
    </Layout>
  );
}

export default Dima;