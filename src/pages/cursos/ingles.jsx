import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm/contactform";
import '../../pages_styles/Courses/Courses.scss';

import ingstartup1 from "../../assets/images/gallery/Startup.png";
// import ingstartup2 from "../../assets/images/gallery/Ingles-Startup.jpg";
import ingstartup3 from "../../assets/images/gallery/Curso-de-Ingles-Startup.jpg";
import ingstartup4 from "../../assets/images/gallery/Curso-de-Ingles-Startup-1.jpg";
// import ingstartup5 from "../../assets/images/gallery/clases-de-Ingles-Startup.jpg";
import ingstartup6 from "../../assets/images/gallery/Clases-de-Ingles-Startup-1.jpg";
// import ingstartup7 from "../../assets/images/gallery/MyEnglishLab.jpg";

var base_url = process.env.REACT_APP_ROOT_URL;

const Ingles = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Inglés Startup </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 ingles_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso de Inglés</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>

            <p>El programa de inglés que IBASA le ofrece tiene como fin principal que el estudiante desarrolle al máximo
            las habilidades de comprensión y expresión oral y de lectura y escritura de la lengua inglesa.
            Nuestro objetivo es que el estudiante, al finalizar el programa, obtenga el nivel <strong>B2</strong> del 
            Marco Común Europeo de Referencia para las lenguas.
            </p>

            <p>
            El Marco Común Europeo de Referencia para las lenguas es una calificación internacional
            que define los conocimientos de la lengua inglesa. Se utiliza en la mayor parte del mundo
            para definir las destrezas lingüisticas de los estudiantes en una escala de niveles de inglés
            desde <strong>A1</strong> (nivel inglés básico), hasta <strong>C2</strong> (para aquellos que dominan 
            el inglés de manera excepcional, casi nativos).
            </p>

            <p> Tener un nivel <strong>B2</strong> es manejar un nivel de inglés intermedio-alto, lo que significa tener 
            la fluidez adecuada para hablar y escuchar en inglés, es decir comunicarse sin mayor esfuerzo, sin dejar
            de lado una correcta escritura y lectura.</p>

            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup1} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <ContactForm course={'Curso de Inglés'} showmessage={true}></ContactForm>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup6} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>

          <hr></hr>
          <div style={{textAlign:"center"}}>
            <h2 style={{marginTop:"5%"}}> Apoyamos una experiencia de aprendizaje</h2>
            <p>Entendemos la necesidad de apoyar la enseñanza y el aprendizaje con
            herramientas digitales modernas para ayudarlo a ofrecer mejores experiencias
            de aprendizaje, pero también administrar su salón de clases para ahorrar
            tiempo y esfuerzo.</p>
            <section className="ftco-services ftco-no-pb">
              <div className="container-wrap">
                <div className="row no-gutters">
                  <div className="col-md-4 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                    <div className="media block-6 d-block text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-teacher"></span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Enseñanza personalizada y flexible</h3>
                        
                      </div>
                    </div>      
                  </div>
                  <div className="col-md-4 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-darken">
                    <div className="media block-6 d-block text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="flaticon-reading"></span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Aprendizaje motivador y relevante</h3>
                      </div>
                    </div>    
                  </div>
                  <div className="col-md-4 d-flex services align-self-stretch py-5 px-4 ftco-animate bg-primary">
                    <div className="media block-6 d-block text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                      <i className="material-icons" style={{color:"white", fontSize:"48px"}}>phonelink</i>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Material virtual didáctico</h3>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr></hr>

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Estructura del programa</h3>
            <p>El programa está dividido en cuatro niveles y éstos a su vez en dos módulos cada uno, para un total de ocho módulos.
            Cada módulo consta de ocho unidades y se imparte en un periodo de diez semanas. Después de finalizado cada módulo,
            el estudiante tendrá un receso de una semana para descansar, excepto a fin de año, en el cual se 
            programó un receso de un mes (el cual por supuesto no se cobra).</p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup3} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <img src={ingstartup4} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Metodología del programa</h3>

            <p>
              Las lecciones son sincrónicas (o sea en vivo) e impartidas por medio de la aplicación ZOOM.
              Cada estudiante tendrá un texto en PDF con el material que se estudiará durante el desarrollo de 
              dos módulos, el profesor a cargo del grupo explicará la materia y aclarará todas las dudas que surjan.
              Mediante el texto y el uso de aplicaciones gratuitas y de enlaces que conducen a métodos interactivos,
              se incentivará la interacción entre todos los alumnos, favoreciendo que la clase sea fluida y amena.
            </p>

            <p>
              El estudiante contará con otro texto en PDF llamado el Workbook, y el profesor asignará prácticas de 
              tarea de dicho texto,las cuales el estudiante deberá realizar para optimizar su aprendizaje. Las tareas
              no tienen ningún valor porcentual para efectos de aprobar el nivel respectivo.
            </p>

            <p>
              Igualmente, el docente podrá aplicar exámenes cortos (quizzes) cuando lo considere conveniente y éstos
              quizzes tampoco tendrán valor porcentual para aprobar el nivel, sólo tendrán carácter correctivo.
            </p>

            <p>
              Adicionalmente, el educador podrá solicitar trabajos de investigación y de cualquier otro tipo y éstos trabajos
              tendrán carácter grupal y no tendrán ningún valor porcentual sumativo en la nota final.
            </p>
            </div>
          </div>

          {/* <h2 style={{marginTop:"5%"}}> Inglés para estudiantes del siglo XXI: </h2>


          <p>Este curso o clases de inglés es ideal para personas que quieren aprender
          el idioma para comunicarse en su vida personal, académica y laboral en el
          siglo XXI, mientras desarrolla sus habilidades de pensamiento crítico y
          colaborativo. Este curso de inglés se va a reforzar en fonética con:</p>

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <h3>English Language Training Solutions (ELTS)</h3>
            <p>
            Es una empresa de formación educativa creada por docentes que ha ayudado
            a más de 10.000 profesores en todo el mundo a abordar los desafíos de la
            enseñanza y el aprendizaje del inglés. ELTS es el proveedor exclusivo de
            capacitación de Color Vowel® Approach y editor de Color Vowel® Chart.
            </p>

            <p>
            Ofreciendo un enfoque basado en el cerebro para el aprendizaje de
            idiomas que es accesible y atractivo para estudiantes de todas las
            edades y niveles, capacitamos a maestros individuales y trabajamos
            con escuelas y organizaciones que van desde la Oficina de Programas
            de Idioma Inglés del Departamento de Estado de EE. UU. y el Cuerpo de
            Paz de EE. UU. hasta universidades, organizaciones sin fines de lucro
            y escuelas públicas.
            </p>

            <p>
            Nuestro proceso de aprendizaje patentado está integrado en
            nuestro innovador juego de pronunciación/alfabetización,
            ¡Coloréalo!, y en nuestra galardonada aplicación móvil, Blue Canoe.
            </p>

            <p>
            La tabla Color Vowel® es utilizada por profesores de inglés
            como segundo idioma, terapeutas del habla, entrenadores de
            pronunciación, especialistas en lectura y educadores en los
            EE. UU. y en todo el mundo.
            </p>

            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup6} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <img src={ingstartup7} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>MyEnglishLab</h3>

            <p><strong>Pearson English Portal</strong> ofrece un único punto de entrada para
            todos los componentes de su curso en línea, incluido MyEnglishLab.
            Necesitará una cuenta del Portal para acceder a MyEnglishLab.</p>
            
            <p>MyEnglishLab ofrece beneficios adicionales que <strong>lo ayudan a acceder
            al aprendizaje en cualquier momento y en cualquier lugar</strong>.</p>
            
            <p>El estudiante podrá:</p>

            <ul>
              <li>Utilizar la app para estudiar, el curso de inglés inicial e intermedio,
              <strong>cuando el estudiante lo desee en su teléfono</strong>, puede seguir practicando
              o aprendiendo por medio de la app conectada al portal.
              </li>
              <li>Utilizar el portal de MyEnglishLab para que el estudiante <strong>estudie,
              practique y haga sus exámenes y tareas con revisiones y correcciones en tiempo real</strong>.
              </li>
              <li>El estudiante puede <strong>practicar su pronunciación, dicción y
              enunciación del inglés</strong> grabando su voz y el sistema con inteligencia
              artificial le señalará el nivel de aproximación correcta al inglés americano.
              </li>
              <li>A los estudiantes matriculados se les incluirá el estudio
              de la fonética de vocales en inglés con un método revolucionario
              que permite su dominio de forma fácil y respetando los diferentes estilos de aprendizaje.
              </li>
            </ul>

            </div>
          </div> */}

          <p style={{textAlign:"center"}}> <strong>Si necesita más información sobre el curso de Inglés de IBASA,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>
        </div>
        </section>

    </Layout>
  );
}

export default Ingles;