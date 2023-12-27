import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"

import ContactForm from "../../components/ContactForm/contactform";

import '../../pages_styles/Courses/Courses.scss';
import paa_ucr from "../../assets/images/gallery/paa-ucr.jpg";
import paa_ucr_2 from "../../assets/images/gallery/prueba-de-aptitud-academica.jpg";
import paa_ucr_3 from "../../assets/images/about.jpg";
import paa_ucr_4 from "../../assets/images/gallery/aptitud-academica.jpg";
import reporte_mej_prom from '../../assets/files/Estudiantes-con-mejores-notas-de-admision-preparados-en-IBASA-2021.pdf';
var base_url = process.env.REACT_APP_ROOT_URL;

const AdmisionUCRUNA = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Examen de Admisión UCR-UNA </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 admision_ucr_una_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso de Preparación para el Examen de Admisión UCR-UNA</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <h3> Prueba de Aptitud Académica de la UCR-UNA </h3>
            <p>
            Dirigido a estudiantes que requieren prepararse para enfrentar con éxito
            la prueba de ingreso a la Universidad de Costa Rica y a la Universidad Nacional
            de Costa Rica llamada <strong>Prueba de Aptitud Académica (P.A.A.)</strong>.</p>
            <p>
            La P.A.A. o examen de admisión UCR-UNA mide <strong>el razonamiento en contextos verbales 
            y matemáticos</strong>, consta en total de 50 ítems, todos son de selección única y 
            deben resolverse en un tiempo máximo de 2 horas y sin el uso de ningún tipo 
            de calculadora ni diccionario.
            </p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={paa_ucr} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            {/* <ContactForm course={'Examen de admisión UCR-UNA'} showmessage={true}></ContactForm> */}
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <h3>¿Qué contenidos evalúa la P.A.A. UCR?</h3>
              <p>
              La P.A.A. o examen de admisión UCR NO mide conocimientos ni contenidos particulares de matemáticas,
              español u otras materias. Por ello, para prepararse no conviene estudiar contenidos
              específicos de dichas materias.
              </p>
              <h3>¿Qué es la nota de presentación y qué relación tiene con la P.A.A.?</h3>
              <p>La nota de presentación se define como el promedio de las calificaciones obtenidas
              por el estudiante en décimo año y el primer semestre de undécimo año en las siguientes materias:
              </p>
              <ul>
                <li>Español.</li>
                <li>Matemática.</li>
                <li>Estudios Sociales.</li>
                <li>Educación Cívica.</li>
                <li>Inglés o Francés (según corresponda).</li>
                <li>Biología, Química o Física (según corresponda).</li>
              </ul>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <p>
            Para el caso de los <strong>colegios técnicos</strong> se considerarán las calificaciones obtenidas
            por el estudiante en décimo año, undécimo año y el primer semestre de duodécimo año
            en las mismas asignaturas señaladas anteriormente.
            </p>
            <p>
            La nota de presentación representa 50% en la UCR y 40% en la UNA del
            Promedio de Admisión. El otro porcentaje del Promedio de Admisión
            corresponde a la calificación obtenida en la PAA: 50% en la UCR y 60% en la UNA.
            </p>
            <p>
            Es indispensable que conozca estos datos antes cuando vaya
            a presentar el examen de admisión UCR-UNA.
            </p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={paa_ucr_2} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={paa_ucr_3} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <h3>¿Dónde puedo hallar más información y consultar sobre el proceso de inscripción a la P.A.A. UCR?</h3>
              <ul style={{textAlign:"left"}}>
                <li> La información referente al proceso y examen de admisión UCR la puede encontrar en la página de la Universidad de
                Costa Rica: <a href="http://www.ucr.ac.cr/estudiantes/admision/" target={"_blank"}>http://www.ucr.ac.cr/estudiantes/admision/</a>.</li>
                <li> También puede buscar información en la página del Instituto de
                Investigaciones Psicológicas en el enlace respectivo a la prueba <a href="http://paa.iip.ucr.ac.cr/" target={"_blank"}>http://paa.iip.ucr.ac.cr/</a>.</li>
              </ul>
              <h3>Puede consultar también:</h3>
              <p style={{textAlign:"left"}}><strong>Oficina de Registro e Información (ORI) de la Universidad de Costa Rica (UCR)</strong></p>
              
                <ul style={{textAlign:"left"}}>
                  <li> Correo electrónico: <a href="mailto:registro@ucr.ac.cr">registro@ucr.ac.cr</a></li>
                  <li> Teléfono: 2511-5508 </li>
                  <li> Fax: 2234-1260</li>
                </ul>
              <p style={{textAlign:"left"}}><strong>Departamento de Registro de la Universidad Nacional (UNA)</strong></p>
                <ul style={{textAlign:"left"}}>
                  <li> Correo electrónico: <a href="mailto: registro@una.cr">registro@una.cr</a></li>
                  <li> Teléfono: 2277-3000, 2277-3010 </li>
                </ul>
            </div>
          </div>
          <h2 style={{marginTop:"5%"}}> IBASA: Curso de Preparación para el Examen de Admisión UCR-UNA</h2>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <h3>Objetivos del curso</h3>
            <p>El curso de preparación para la P.A.A. o examen de admisión UCR provee al estudiante las
            herramientas para que su desempeño sea eficaz en ambos campos de razonamiento: verbal y matemático. </p>
            <ul style={{textAlign:"left"}}>
              <li>
              <p> En el área de <strong>razonamiento verbal</strong>, en el curso de preparación para examen de admisión UCR-UNA 
              se capacita al estudiante para que, al utilizar material verbal, pueda mediante las estrategias 
              suponer, presuponer, parafrasear, oponer, deducir y reducir, resolver los ítems de la prueba.
              </p>
              </li>
              <li>
                <p>
                Paralelamente, en el área de <strong>Razonamiento matemático</strong>, en el curso se fomenta el desarrollo de las habilidades del estudiante
                para que este pueda manejar y aplicar las estrategias de generalizar, verificar, indagar y
                representar, en conjunto con las nociones de conceptos básicos matemáticos para la solución de problemas.
                </p>
              </li>
            </ul>
            <h3>¿Cuáles son los resultados de los estudiantes que se preparan en IBASA para la P.A.A. o examen de admisión UCR?
            </h3>
            <p>
            <strong>El rendimiento de los estudiantes que se preparan en IBASA para la P.A.A. es excepcional.</strong>
            Como muestra, adjuntamos una lista de nuestros estudiantes más sobresalientes en la P.A.A.
            (prueba de admisión UCR-UNA) y en el examen de admisión del TEC para el año 2021.
            </p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={paa_ucr_4} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div style={{textAlign:"center", marginBottom:"5%"}}>
            <hr></hr>
            <h2> Universidad de Costa Rica (UCR)</h2>
            <hr></hr>

            <p>La nota máxima que se puede alcanzar en la UCR es 800 y
            más de 100 de nuestros estudiantes obtuvieron notas superiores a 700.
            </p>
            <p>Nuestros mejores promedios son:</p>
            <ul style={{textAlign:"left"}}>
              <li><strong>Felipe Murillo Ramírez</strong>:décimo lugar a nivel nacional con una nota de 777.32.</li>
              <li><strong>Gerixon Calvo Carrillo</strong>:decimoséptimo lugar a nivel nacional con una nota de 771.11.</li>
            </ul>

            <hr></hr>
            <h2> Universidad Nacional de Costa Rica (UNA)</h2>
            <hr></hr>
            
            <p>La nota máxima que se puede alcanzar en la UNA es 900 y nuevamente más de 100
            de nuestros estudiantes obtuvieron notas superiores a 800. </p>

            <p> Tenemos 5 estudiantes con nota perfecta de 900 (a nivel nacional solo hubo
            36 estudiantes con nota perfecta): </p>

            <ul style={{textAlign:"left"}}>
              <li><strong>Gerixon Calvo Carrillo</strong>:primer lugar a nivel nacional.</li>
              <li><strong>Ariana Paola Fallas Calderón</strong>:primer lugar a nivel nacional.</li>
              <li><strong>Joselyn Montero Mata</strong>:primer lugar a nivel nacional.</li>
              <li><strong>Yadir de la Trinidad González Salazar</strong>:primer lugar a nivel nacional.</li>
              <li><strong>Alisson Arguedas Villalobos</strong>:primer lugar a nivel nacional.</li>
            </ul>
            <br></br>
            <hr></hr>
            <h2> Instituto Tecnológico de Costa Rica (TEC)</h2>
            <hr></hr>

            <p>La nota máxima que se puede alcanzar en el TEC es 800 y más de 100 de nuestros
            estudiantes obtuvieron notas superiores a 700.
            </p>
            <p>Nuestros mejores promedios son:</p>
            <ul style={{textAlign:"left"}}>
              <li><strong>Camilo Cárdenas Gonzáles</strong>:segundo promedio a nivel nacional con una nota de 797.92.</li>
              <li><strong>Ariana Paola Fallas Calderón:</strong>:duodécimo promedio a nivel nacional con una nota de 789.2.</li>
            </ul>

          </div>

          <p style={{textAlign:"center"}}> <strong>Si necesita más información sobre el curso de Prueba de Actitud Académica de la UCR y la UNA,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>

          <div style={{margin:"auto", textAlign:"center", marginTop:"5%", marginBottom:"5%"}}>

            <p>Descargar Estudiantes con Mejores Notas IBASA 2021</p>

            <a
              href={reporte_mej_prom}
              download="Estudiantes con Mejores Notas IBASA 2021"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary py-3 px-5">Descargar Reporte</button>
            </a>

          </div>

        </div>
        </section>
    </Layout>
  );
}

export default AdmisionUCRUNA;