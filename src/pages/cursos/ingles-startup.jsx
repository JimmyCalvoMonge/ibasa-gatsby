import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';

import ingstartup1 from "../../assets/images/gallery/Startup.png";
import ingstartup2 from "../../assets/images/gallery/Ingles-Startup.jpg";
import ingstartup3 from "../../assets/images/gallery/Curso-de-Ingles-Startup.jpg";
import ingstartup4 from "../../assets/images/gallery/Curso-de-Ingles-Startup-1.jpg";
import ingstartup5 from "../../assets/images/gallery/Clases-de-Ingles-Startup.jpg";
import ingstartup6 from "../../assets/images/gallery/Clases-de-Ingles-Startup-1.jpg";
import ingstartup7 from "../../assets/images/gallery/MyEnglishLab.jpg";

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
                <h1 className="mb-2 bread">Curso de Inglés StartUp</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>

            <p>Startup es el nuevo <strong>curso de inglés general para adultos y jóvenes</strong> que
            quieren abrirse camino en el mundo y necesitan inglés para hacerlo.</p>

            <p>Este innovador curso multidisciplinar de ocho niveles es un programa de
            idiomas completo. Motiva a los estudiantes del siglo XXI con contenido relevante,
            rico en medios y brinda a los maestros un apoyo sólido para que la enseñanza sea
            personalizable y fácil.
            </p>

            <p>
            Las clases de inglés Startup es un curso combinado flexible que
            incluye la aplicación <strong>Pearson Practice English</strong> que lleva a los
            alumnos de la página al aprendizaje móvil en cualquier lugar y
            en cualquier momento. Trae el mundo al aula y lleva el aula al
            mundo, poniendo a los alumnos en el centro.
            </p>

            <p>
            Permita que los estudiantes completen actividades y accedan a los medios
            dondequiera que estén con un Student’s Book interactivo.
            Cree las pruebas que desee para su clase a partir del paquete
            de evaluación disponible con su curso.
            </p>

            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup1} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <form action="#">
            <h4> ¡Contáctenos para saber más sobre este curso!</h4>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nombre Completo"></input>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email"></input>
              </div>
              <div className="form-group">
                  <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Mensaje"></textarea>
              </div>
              <div className="form-group">
                  <input type="submit" value="Enviar Mensaje" className="btn btn-primary py-3 px-5"></input>
              </div>
          </form>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup2} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>


          <hr></hr>
          <div style={{textAlign:"center"}}>
            <h2 style={{marginTop:"5%"}}> Apoyamos una experiencia de aprendizaje</h2>
            <p>Entendemos la necesidad de apoyar la enseñanza y el aprendizaje con
            herramientas digitales modernas para ayudarlo a ofrecer mejores experiencias
            de aprendizaje, pero también administrar su salón de clases para ahorrar
            tiempo y esfuerzo.</p>
            <p>
            El curso de inglés Startup que <a href={`${base_url}`}>IBASA</a> ha comprado 
            a Pearson es para utilizarse vía internet 
            por medio de dispositivos móviles como teléfonos o 
            tabletas y también en computadoras de escritorio o 
            portátiles.
            </p>
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
                      <i class="material-icons" style={{color:"white", fontSize:"48px"}}>phonelink</i>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">Programa de videos de StartUp</h3>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </section>
          </div>
          <hr></hr>


          <h2 style={{marginTop:"5%"}}> IBASA: El curso de inglés tiene tres productos principales:</h2>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>eText</h3>
            <ul>
              <li>El libro es digital.</li>
              <li>Se accede por medio de un portal con su usuario y clave.</li>
              <li>Es como ver un libro de papel, pero en cada página se pueden
              escuchar los audios y ver los videos de forma instantánea.</li>
              <li>Cuando hay ejercicios, el estudiante lo completa dentro de la
              aplicación y el sistema lo revisa de inmediato y lo corrige si necesitará corrección.
              <li>Esto significa que el estudiante siempre va a ahorrar
              tiempo en sus estudios porque no necesita esperar a que
              el profesor le entregue la revisión hasta la siguiente clase.</li>
              Todo sucede en tiempo real.</li>
            </ul>
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
            <h3>App</h3>
            <ul>
              <li>El estudiante tiene derecho al matricularse, de tener
              un código que le permitirá descargar en su teléfono la aplicación de
              práctica, tanto de lectura, escritura, escucha y habla, para que en
              todo momento donde vaya no pierda el tiempo en aprender cada más y
              mejor inglés.</li>
              <li>Todo lo que haga en la app o en el eText
              queda grabado en el portal. <strong>Así que nunca perderá
              sus datos ante un robo de su dispositivo</strong>.</li>
            </ul>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>MyEnglishLab</h3>
            <ul>
              <li>Es un portal tecnológico de inteligencia artificial que es un laboratorio de idioma
              donde <strong>el estudiante interactúa su producción escrita, lectura, escucha y habla y el
              sistema le revisa.</strong></li>
              <li> Muchos estudiantes temen participar en clase por temor
              a los errores, pero en MyEnglishLab todo queda entre el
              estudiante y la inteligencia artificial. </li>
              <li>El profesor puede ver el progreso del estudiante
              desde la plataforma del profesor y así dar siempre
              acompañamiento.</li>
            </ul>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={ingstartup5} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>

          <h2 style={{marginTop:"5%"}}> Inglés para estudiantes del siglo XXI: </h2>


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
          </div>


          <hr></hr>
          <div>
            <h2 style={{marginTop:"5%", textAlign:"center"}}> Datos importantes del curso de inglés Startup </h2>
            <ol>
              <li>En inglés hay cinco vocales (a-e-i-o-u) pero para estas cinco vocales existen
              18 sonidos diferentes. Equivocar el sonido conlleva no solo a que no se puedan
              comunicar correctamente, sino a que se puedan cometer errores muy ofensivos. </li>
              <li> Por eso, junto con el paquete de que incluye las clases de inglés Startup,
              se incluirá esta metodología <strong>para que el estudiante tenga confianza y no tenga
              miedo de pronunciar palabras</strong> que a los oídos de los latinos suenan iguales,
              pero no lo son.
              </li>
              <li>
              Solo 20 profesores en Costa Rica a la fecha han sido capacitados
              en este método. Todo esto se incluye en el mismo precio del curso
              de inglés Startup.
              </li>
            </ol>
          </div>

          <p style={{textAlign:"center"}}> <strong>Si necesita más información sobre el curso de Inglés StartUp,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>
        </div>
        </section>

    </Layout>
  );
}

export default Ingles;