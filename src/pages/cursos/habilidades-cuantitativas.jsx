import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';
import niv_mate from "../../assets/images/gallery/Nivelacion-en-Matematica-1024x490.jpg";
import niv_mate_2 from "../../assets/images/gallery/Curso-de-Nivelacion-en-Matematica-1.jpg";
import niv_mate_3 from "../../assets/images/gallery/Prueba-de-Habilidades-Cuantitativas-phc.png";
import boleta1 from '../../assets/files/Manual-Usuario-de-Inscripcion-PHC.pdf';
var base_url = process.env.REACT_APP_ROOT_URL;


const HabCuantitativas = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Prueba de Habilidades Cuantitativas </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 habilidades_cuantitativas_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso de Preparación para la Prueba de Habilidades Cuantitativas</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3> El curso principalmente a estudiantes que desean ingresar a la U.C.R. a las siguientes carreras: </h3>
            <ul>
              <li>Farmacia</li>
              <li>Química</li>
              <li>Física</li>
              <li>Meteorología</li>
              <li>Matemática</li>
              <li>Ciencias Actuariales</li>
              <li>Geología</li>
              <li>Estadística</li>
              <li>Ingeniería Mecánica</li>
              <li>Ingeniería Mecánica con énfasis en protección contra incendios.</li>
            </ul>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={niv_mate} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
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
              <h3>¿Qué es la Prueba de Habilidades Cuantitativas?</h3>
              <p>La Prueba de Habilidades Cuantitativas (PHC) es una prueba 
              estandarizada de selección única, que mide la capacidad para 
              resolver problemas matemáticos en los cuales el proceso de 
              razonamiento con contenidos matemáticos es lo primordial y 
              no solamente la aplicación de un algoritmo. </p>
              <p>Las puntuaciones obtenidas en la prueba son utilizadas por varias carreras, 
              con el fin de seleccionar a las personas que pueden concursar por los campos de estas. 
              Las carreras que utilizan la Prueba de Habilidades Cuantitativas fueron mencionadas arriba.
              </p>
              <p>El concurso a las carreras se realiza únicamente con el promedio de admisión. 
              El cumplir con el requisito de ingreso establecido por determinada carrera 
              permite concursar por un cupo, pero no garantiza el ingreso a la misma.</p>

              <p>
              Esta prueba de habilidades cuantitativas se compone de cuarenta ítems de 
              selección única, distribuidos equitativamente según su área de contenido principal:
              </p>

              <ul>
                <li>Análisis de datos</li>
                <li>Aritmética</li>
                <li>Álgebra</li>
                <li>Geometría</li>
              </ul>
              
              <p>Los contenidos utilizados en cada una de estas áreas están basados en los programas 
              de estudio de la Educación Primaria y Secundaria costarricense. Se resuelve sin el uso 
              de calculadora, en un tiempo máximo de dos horas. 
              Dentro de este tiempo, él (la) examinado (a) también debe marcar sus respuestas en la 
              hoja proporcionada para este fin.</p>
            
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" >
            <p>Esto significa que en su temario se incluyen los temas que han sido excluidos del 
            programa de matemática del MEP por cambios en la malla curricular como, por ejemplo:</p>
            <ul>
              <li>Trigonometría.</li>
              <li>Operaciones con Fracciones Algebraicas.</li>
            </ul>
            <p>Asimismo, el temario del examen de Nivelación de Matemáticas incluye los temas de matemáticas que 
            se estudian a nivel de secundaria con el fin de reforzarlos y abarca todos los temas que son indispensables 
            para un desempeño exitoso en cualquier curso de matemática introductorio a nivel universitario.
            </p>
            <p>Por tanto, otra de las finalidades del curso es proveer a los estudiantes de 
            los conocimientos básicos requeridos para aprobar cualquier curso de matemática elemental 
            a nivel universitario y, también, lograr que el estudiante desarrolle la disciplina y las 
            destrezas necesarias para enfrentar satisfactoriamente cualquier otro curso de matemática 
            incluido en su plan de estudio.
            </p>
           </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={niv_mate_2} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <h2 style={{marginTop:"5%", textAlign:"center"}}> Contenidos a evaluar en la PHC </h2>

          <table>
          <thead>
            <tr>
              <th width="30%">Tema</th>
              <th width="70%">Contenidos</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>
                  Tema 1: Análisis de datos
                </td>
                <td style={{textAlign:"left"}}>

                <h6 style={{color:"#dc3545"}}>Descripción de datos</h6>
                <ol>
                  <li>Variables cuantitativas y cualitativas. </li>
                  <li>Análisis de gráficos estadísticos: barras, circulares, lineales y de puntos. </li>
                  <li>Frecuencias relativas y absolutas de datos.</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Medidas de posición</h6>

                <ol>
                  <li>Moda. Media. Recorrido. Máximo. Mínimo. Mediana.</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Probabilidad</h6>

                <ol>
                  <li>Eventos aleatorios.</li>
                  <li>Espacio muestral.</li>
                  <li>Eventos simples y compuestos.</li>
                  <li>Probabilidad frecuencial.</li>
                  <li>Definición clásica de probabilidad.</li>
                  <li>Eventos seguros, probables e imposibles.</li>
                  <li>Introducción a la ley de los grandes números.</li>
                </ol>

                </td>
              </tr>
              <tr>
                <td >
                  Tema 2: Aritmética
                </td>
                <td style={{textAlign:"left"}}>

                <h6 style={{color:"#dc3545"}}>Conjuntos Numéricos</h6>
                <ol>
                  <li>Números Naturales (propiedades y operaciones).</li>
                  <li>Números Enteros (propiedades y operaciones).</li>
                  <li>Números Racionales (propiedades y operaciones).</li>
                  <li>Números Reales (propiedades y operaciones).</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Teoría de números naturales</h6>

                <ol>
                  <li>Divisibilidad, Múltiplos, Números primos, Números compuestos, Descomposición prima, Mínimo común múltiplo y máximo común divisor</li>
                </ol>

                </td>
              </tr>
              <tr>
                <td>
                  Tema 3: Álgebra
                </td>
                <td style={{textAlign:"left"}}>

                <h6 style={{color:"#dc3545"}}>Operaciones fundamentales con expresiones algebraicas</h6>
                <ol>
                  <li> Expresiones algebraicas.</li>
                  <li>Valor numérico de una expresión algebraica.</li>
                  <li>Operaciones con polinomios (suma, resta, multiplicación, división).</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Simplificación y factorización de expresiones algebraicas</h6>

                <h6 style={{color:"#dc3545"}}>Ecuaciones e inecuaciones</h6>

                <ol>
                  <li>Ecuaciones de primer grado.</li>
                  <li>Ecuaciones de segundo grado.</li>
                  <li>Inecuaciones de primer grado.</li>
                </ol>

                </td>
              </tr>
              <tr>
                <td>
                  Tema 4: Geometría
                </td>
                <td style={{textAlign:"left"}}>

                <h6 style={{color:"#dc3545"}}>Geometría plana</h6>
                <ol>
                  <li>Elementos básicos de geometría (punto, recta, plano, rectas paralelas, 
                  perpendiculares y concurrentes, clasificación y medida de ángulos, 
                  ángulos entre rectas paralelas y transversales,
                   teoremas relacionados con rectas paralelas y perpendiculares). </li>
                   <li>Triángulos (desigualdad triangular, ángulos internos y externos, 
                   semejanza, congruencia, teorema de Pitágoras).</li> 
                   <li>Cuadriláteros (propiedades). </li>
                   <li>Elementos básicos del círculo y la circunferencia. </li>
                   <li>Polígonos regulares (ángulo central, radio, apotema, área y perímetro). </li>
                   <li>Razones trigonométricas (definición, ley de senos y ángulos de elevación y depresión).</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Geometría analítica</h6>

                <ol>
                  <li>Coordenadas de puntos en el plano.</li>
                  <li>Distancia entre puntos.</li>
                  <li>Ecuaciones de rectas.</li>
                  <li>Ecuación de la parábola.</li>
                </ol>

                <h6 style={{color:"#dc3545"}}>Cuerpos sólidos</h6>
                
                <ol>
                  <li>Prismas rectos (área y volumen).</li>
                  <li>Pirámide recta (área y volumen).</li>
                </ol>

                </td>
              </tr>
            </tbody>
          </table>

          <br></br>
          <h2 style={{marginTop:"5%", textAlign:"center"}}> Inscripción de la prueba </h2>
          <p style={{textAlign:"center"}}> Para la inscripción de la Prueba de Habilidades Cuantitativas (PHC) en la UCR y para cualquier otro trámite relacionado con esta prueba, el estudiante debe consultar el Manual 
          de usuario del sistema de inscripción web de la PHC en las fechas siguientes:</p>

          <table>
          <thead>
            <tr>
              <th width="50%">Actividad</th>
              <th width="50%">Fecha</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Periodo de inscripción</td>
                <td>Del 8 de agosto a las 8:00 a.m. al 5 de setiembre de 2022 a las 5:00 p.m.</td>
              </tr>
              <tr>
                <td>Publicación de citas de examen</td>
                <td>26 de setiembre de 2022.</td>
              </tr>
              <tr>
                <td>Solicitud de revisión de cita de examen</td>
                <td>Del 26 al 30 de setiembre de 2022</td>
              </tr>
              <tr>
                <td>Fechas de aplicación</td>
                <td>29 y 30 de octubre, 5 y 6 de noviembre de 2022</td>
              </tr>
              <tr>
                <td>Solicitud de reprogramación debido a causas de fuerza mayor</td>
                <td>5 días hábiles después de la fecha de aplicación de la prueba</td>
              </tr>
              <tr>
                <td>Publicación de resultados</td>
                <td>28 de noviembre de 2022</td>
              </tr>
              <tr>
                <td>Solicitud de apelación a los resultados</td>
                <td>Del 28 de noviembre al 02 de diciembre de 2022</td>
              </tr>
            </tbody>
          </table>

          <h2 style={{marginTop:"5%", textAlign:"center"}}> Pago de arancel de derecho de inscripción 
          para la prueba de habilidades cuantitativas </h2>

          

          <div style={{textAlign:"center"}}>
            <p>El arancel corresponde a ₡1000 y debe ser cancelado en 
            la página <a href="https://www.ucrenlinea.com" target={"_blank"}>https://www.ucrenlinea.com</a>, también debe 
            imprimir el comprobante de inscripción, el cual es indispensable para 
            cualquier consulta o gestión relacionada con el proceso de inscripción
            o asignación de citas.
            </p>
            
            <img src={niv_mate_3} className="App-logo" alt="logo" style={{width:"50%", margin:"auto"}} ></img>

            <p>Descargar Manual Usuario de Inscripción PHC</p>
            <a
                href={boleta1}
                download="Manual Usuario de Inscripción PHC"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary py-3 px-5">Descargar</button>
            </a>
          </div>

          <br></br>
          <p style={{textAlign:"center", marginTop:"5%"}}> <strong>Si necesita más información sobre el curso para la Prueba de Habilidades Cuantitativas de la UCR,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>
        </div>
        </section>

    </Layout>
  );
}

export default HabCuantitativas;