import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';

const ClasesGratuitas = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Explorar Clases </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 clases_gratuitas_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">¡Descubre la calidad de nuestros cursos con clases gratuitas registrándote acá!</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>
    </Layout>
  );
}

export default ClasesGratuitas;