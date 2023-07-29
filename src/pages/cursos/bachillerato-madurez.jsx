import * as React from "react"
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';

const BachMadurez = () => {
  return (
    <Layout>
        <section className="hero-wrap hero-wrap-2 bach_madurez_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Bachillerato por Madurez</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>
    </Layout>
  );
}

export default BachMadurez;