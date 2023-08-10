import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';
import Courses from "../../components/Courses/Courses";

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

        <section style={{marginBottom:"5%", marginTop:"5%"}}>
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <form action="#">
                    <label class="required">Nombre Completo:</label>
                    <div className="form-group">
                        <input type="text" className="form-control" name="user_name" required></input>
                    </div>
                    <label class="required">Correo electrónico:</label>
                    <div className="form-group">
                        <input type="text" className="form-control" name="email" required></input>
                    </div>
                    <div className="form-group">
                        <select name="" id="" className="form-control">
                            <option value="" style={{backgroundColor:"white"}}>Clase Gratuita a recibir ...</option>
                            <option value="" style={{backgroundColor:"white"}}>Examen de admisión UCR-UNA</option>
                            <option value="" style={{backgroundColor:"white"}}>Examen de admisión TEC</option>
                            <option value="" style={{backgroundColor:"white"}}>Inglés Startup</option>
                            <option value="" style={{backgroundColor:"white"}}>Bachillerato por Madurez</option>
                            <option value="" style={{backgroundColor:"white"}}>Educación Diversificada a Distancia (EDAD)</option>
                            <option value="" style={{backgroundColor:"white"}}>Tercer Ciclo</option>
                            <option value="" style={{backgroundColor:"white"}}>Curso DiMA</option>
                            <option value="" style={{backgroundColor:"white"}}>Prueba de Habilidades Cuantitativas</option>
                            <option value="" style={{backgroundColor:"white"}}>Nivelación Matemática</option>
                            <option value="" style={{backgroundColor:"white"}}>Prueba de Diagnóstico de Matemática del TEC</option>
                        </select>
                    </div>
                    <label class="required">Mensaje:</label>
                    <div className="form-group">
                        <textarea name="message" id="" cols="30" rows="7" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar Mensaje" className="btn btn-primary py-3 px-5"></input>
                    </div>
                </form>
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