import * as React from "react";
import { useState } from "react";
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm/contactform";
import '../../pages_styles/Courses/Courses.scss';
import Courses from "../../components/Courses/Courses";

const ClasesGratuitas = () => {

  const [courseUse, setCourseUse] = useState('Seleccione un Curso ...');
  const getCourseUse = (t) => {
    setCourseUse(t);
  };

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

        <section style={{marginBottom:"5%", marginTop:"5%"}}>
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <div>
                <select name="" id="" value={courseUse} onChange={(e) => getCourseUse(e.target.value)}>
                  <option value="Seleccione un Curso ..." style={{backgroundColor:"white"}}>Clase Gratuita a recibir ...</option>
                  <option value="Examen de admisión UCR-UNA" style={{backgroundColor:"white"}}>Examen de admisión UCR-UNA</option>
                  <option value="Examen de admisión TEC" style={{backgroundColor:"white"}}>Examen de admisión TEC</option>
                  <option value="Inglés Startup" style={{backgroundColor:"white"}}>Inglés Startup</option>
                  <option value="Bachillerato por Madurez" style={{backgroundColor:"white"}}>Bachillerato por Madurez</option>
                  <option value="Educación Diversificada a Distancia (EDAD)" style={{backgroundColor:"white"}}>Educación Diversificada a Distancia (EDAD)</option>
                  <option value="Tercer Ciclo" style={{backgroundColor:"white"}}>Tercer Ciclo</option>
                  <option value="Curso DiMA" style={{backgroundColor:"white"}}>Curso DiMA</option>
                  <option value="Prueba de Habilidades Cuantitativas" style={{backgroundColor:"white"}}>Prueba de Habilidades Cuantitativas</option>
                  <option value="Nivelación Matemática" style={{backgroundColor:"white"}}>Nivelación Matemática</option>
                  <option value="Prueba de Diagnóstico de Matemática del TEC" style={{backgroundColor:"white"}}>Prueba de Diagnóstico de Matemática del TEC</option>
                </select>
              </div>
              <ContactForm course={courseUse} showmessage={false}></ContactForm>
            </div>
            
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <h2>¡Descubre la calidad de nuestros cursos con clases gratuitas registrándote acá!</h2>
            <br></br>
            <h6>Cuéntanos algunos detalles y te contactaremos para indicarte cómo obtener las clases gratuitas.</h6>
            </div>
      
          </div>
        </div>
        </section>

        <Courses></Courses>

    </Layout>
  );
}

export default ClasesGratuitas;