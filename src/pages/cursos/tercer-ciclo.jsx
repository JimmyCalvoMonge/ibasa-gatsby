import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';

import tercerc_1 from "../../assets/images/gallery/examenes-de-Tercer-Ciclo-1.jpg";
import tercerc_2 from "../../assets/images/gallery/examenes-de-Tercer-Ciclo-2.jpg";
import tercerc_3 from "../../assets/images/gallery/examenes-de-Tercer-Ciclo-3.png";
import tercerc_4 from "../../assets/images/gallery/examenes-de-Tercer-Ciclo-4.jpg";
import tercerc_5 from "../../assets/images/gallery/examenes-de-Tercer-Ciclo-5.jpg";
import tercerc_6 from "../../assets/images/gallery/Bachillerato-por-Madurez-suficiente-6.jpg";
import tercerc_7 from "../../assets/images/gallery/Bachillerato-por-Madurez-suficiente-7.jpg";

import boleta1 from '../../assets/files/24-2-22._boleta_recurso_revocatoria_composicion_y_ortografia_2022-edad_2022_0.pdf';
import boleta2 from '../../assets/files/formulario_de_solicitud_de_reconocimiento_de_materias_o_niveles_de_educacion_formal_o_abierta3172.pdf';
import boleta3 from '../../assets/files/24-2-2022.boleta_recurso_revocatoria_items-iii_ciclo_2022.pdf';

var base_url = process.env.REACT_APP_ROOT_URL;


const TercerCiclo = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Tercer Ciclo </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 tercer_ciclo_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Tercer Ciclo</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <h3> Información general </h3>
            <p>
            El programa de Tercer Ciclo de la Educación General Básica Abierta
            es un programa dirigido a personas que cuenta con I y II Ciclo
            (sexto grado) de la Educación General Básica, la edad mínima para
            ingresar a este programa es de 14 años.
            </p>

            <p>
            Este programa de Tercer Ciclo, también llamado Ujarrás 
            comprende 3 niveles, Sétimo, Octavo y Noveno, 
            por cada nivel el estudiante debe aprobar 6 materias que son:
            </p>
            <ul style={{textAlign:"left"}}>
              <li>Ciencias.</li>
              <li>Educación Cívica.</li>
              <li>Español.</li>
              <li>Estudios Sociales.</li>
              <li>Inglés.</li>
              <li>Matemática.</li>
            </ul>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={tercerc_1} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">

            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">

            <p>
            Para aprobar cada una de las 6 materias por cada nivel, 
            el estudiante debe presentar un examen por asignatura y 
            obtener una nota mayor o igual a 65 en cada examen.
            </p>

            <p>En este sistema el MEP (Tercer Ciclo) reconoce materias 
            y años aprobados en educación formal (colegio diurno) 
            siempre que el estudiante no aplazara el año por conducta.</p>
            
            <p>Para que el MEP le reconozca el año o la(s) materia(s) aprobada(s) 
            el estudiante debe realizar un trámite de reconocimiento, que 
            consiste en solicitar una certificación de cada nivel aprobado o de la(s) materia(s) aprobada(s) 
            en el colegio donde curso ese ciclo lectivo, esta certificación debe estar firmada 
            y sellada por el director(a) del colegio y por el supervisor(a) de circuito.</p>
            
            
            <p>Una vez que realice los primeros exámenes en el sistema de Tercer Ciclo 
            de la Educación General Básica Abierta y le entreguen el resultado oficial, 
            debe presentarse a control de calidad donde le entregarán un formulario que 
            debe llenar y adjuntar la(s) certificación (certificaciones) y para dejar 
            en trámite la solicitud de reconocimiento o bien puede gestionar el trámite 
            por correo electrónico <a href="mailto:plataformadgec@mep.go.cr" target={"_blank"}>
            plataformadgec@mep.go.cr</a>.</p>

            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <p>
            El MEP publica todos los contenidos a evaluar en los exámenes de
            Tercer Ciclo para cada asignatura, de manera que el estudiante
            es libre de buscar la materia que debe estudiar, por los medios
            que considere convenientes.</p>
            
            <p>
            Dichos contenidos se encuentran en las tablas de especificaciones 
            para las pruebas de certificación de conocimientos del programa 
            Tercer Ciclo de la Educación General Básica Abierta, las cuales 
            pueden consultarse en la sección de Documentos de este mismo sitio.</p>

            <p>La preparación para aprobar los exámenes se puede realizar de diferentes maneras:</p>

            <ul>
              <li>En institutos privados como por ejemplo <a href={base_url}><strong>IBASA</strong></a>.</li>
              <li>En proyectos públicos que se habilitan únicamente para la segunda convocatoria.</li>
              <li>Con profesores particulares.</li>
              <li>En forma autodidacta utilizando por ejemplo los libros del Maestro en Casa del programa ICER.</li>
            </ul>
            
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={tercerc_2} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={tercerc_3} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            
              <p>Los exámenes de Tercer Ciclo de la Educación General Básica Abierta
              <strong>se aplican dos veces al año</strong> en períodos llamados primera y segunda
              convocatoria. Las fechas de dichas convocatorias generalmente
              corresponden a sábados y domingos, son anunciadas por el MEP a
              inicios de cada año a través de un calendario llamado <strong>Calendario
              Anual de las Pruebas de Educación Abierta</strong>.</p>
              
              <p>Dicho calendario incluye los períodos de inscripción de las pruebas.
              En esa etapa, los interesados deben pagar un derecho por cada examen que
              deseen presentar. Además, deben completar los datos personales en un formulario
              virtual y enviar los documentos solicitados, todo esto a través de una aplicación
              creada por el MEP y habilitada durante el período de inscripción para tal fin,
              llamada <a href="https://portaldgec.mep.go.cr/yo_aplico/Login" target={"_blank"}>Yo Aplico</a>.</p>
              
              <p>Asimismo, en el calendario se indican las fechas de los exámenes de Tercer Ciclo y,
              además, en la página <a href="https://dgec.mep.go.cr/" target={"_blank"}>dgec.mep.go.cr/</a>,
              las sedes de aplicación de las pruebas,
              que generalmente corresponden a escuelas y colegios públicos de todo el territorio nacional.
              </p>

              <p>Una vez presentadas las pruebas de Tercer Ciclo, 
              también llamado Ujarrás, el MEP entrega los resultados 
              correspondientes, aproximadamente un mes después de su 
              aplicación y habilita un período de 3 días hábiles para 
              apelar dichos resultados mediante un trámite virtual que 
              incluye el llenado de una boleta llamada <strong>boleta de revocatoria</strong>, 
              a la que el MEP responde al cabo de aproximadamente 10 días hábiles 
              y su sentencia es definitiva.
              </p>
              
              <p>En cada convocatoria, el estudiante puede presentar desde una hasta las 6 materias 
              de Tercer Ciclo. Cuando el estudiante ha aprobado las 6 materias de sétimo, las 6 
              materias de octavo y las 6 materias de noveno, debe hacer el trámite (<strong>que incluye 
              el pago del derecho de título</strong>) para poder obtener el título de Tercer Ciclo de la 
              Educación General Básica (noveno) otorgado por el MEP, el cual tiene la misma 
              validez que el dado en los colegios y, por lo tanto, sirve para presentarlo en 
              cualquier trabajo en que se solicite como requisito y adicionalmente para 
              ingresar al programa de bachillerato.</p>

            </div>
          </div>
          
          {/* <h2 style={{marginTop:"5%", textAlign:"center"}}>
          Fechas de inscripción y de aplicación de pruebas de Tercer Ciclo para el año 2022 </h2>
          
          <div style={{marginBottom:"5%"}}>
            <h3> Primera convocatoria</h3>
            <ul>
              <li> <strong>Inscripción</strong>: 07 al 11 de marzo del 2022.</li>
              <li> <strong>Publicación de las sedes para las pruebas</strong>: 06 de mayo del 2022.</li>
              <li> <strong>Período de pruebas</strong>: 15, 21 y 22 de mayo..</li>
              <li> <strong>Entrega de resultados</strong>: La fecha se informará el 6 de mayo.</li>
              <li> <strong>Período para presentar los recursos de revocatoria</strong>: La fecha se informará el 6 de mayo.</li>
              <li> <strong>Entrega de la resolución de los recursos de revocatoria</strong>: La fecha se informará el 6 de mayo.</li>
            </ul>
            <h3> Calendario de pruebas</h3>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Asignatura</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td rowspan="3">Sábado 15 de mayo del 2022</td>
                <td>De 8:30 a. m. a 11:30 a. m.</td>
                <td>Estudios Sociales</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 5:00 p. m</td>
                <td>Español (sétimo y octavo)</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 5:00 p. m </td>
                <td>Español Noveno</td>
              </tr>
              <tr>
                <td rowspan="2">Domingo 21 de mayo del 2022</td>
                <td>8:30 a. m. a 11:30 a. m.</td>
                <td>Ciencias</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 5:00 p. m</td>
                <td>Inglés</td>
              </tr>
              <tr>
                <td rowspan="2">Sábado 22 de mayo del 2022</td>
                <td>8:30 a. m. a 11:30 a. m.</td>
                <td>Matemáticas</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 5:00 p. m</td>
                <td>Cívica</td>
              </tr>
              </tbody>
            </table>
            <br></br>
            <h3> Segunda convocatoria</h3>
            <ul>
              <li> <strong>Inscripción</strong>: Del 08 al 12 de agosto.</li>
              <li> <strong>Publicación de las sedes para las pruebas</strong>: 21 de octubre. </li>
              <li> <strong>Período de pruebas</strong>: 30 de octubre, 5 y 6 de noviembre. </li>
              <li> <strong>Entrega de resultados</strong>:La fecha se informará el 21 de octubre.</li>
              <li> <strong>Período para presentar los recursos de revocatoria</strong>: La fecha se informará el 21 de octubre.</li>
              <li> <strong>Entrega de la resolución de los recursos de revocatoria</strong>: La fecha se informará el 21 de octubre.</li>
            </ul>
            <h3> Calendario de pruebas</h3>
            <p>Se dará a conocer el 29 de julio.</p>

          </div> */}

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={tercerc_4} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Costo del derecho de examen, título y cuentas habilitadas para el pago:</h3>
            <ul>
              <li><strong>Costo del derecho de examen</strong>: ¢8000 colones.</li>
              <li><strong>Costo del derecho de título</strong>: ¢6600 colones.</li>
            </ul>
            <p>El pago de los derechos anteriores puede realizarse de diferentes formas:</p>
            <ul>
              <li>En forma presencial en cualquier sucursal del BNCR o en un BN servicios en
              la cuenta <strong>128600-4</strong> a nombre de Asociación Costarricense de Enseñanza Radiofónica.
              </li>
              <li>
              Por transferencia electrónica en la cuenta <strong>IBAN CR730100010011286004</strong>,
              cédula jurídica <strong>ICER 3-002-045772</strong> a nombre de <strong>Asociación Costarricense
              de Enseñanza Radiofónica</strong>.
              </li>
              <li>
              Por sinpe móvil al número <strong>89471010</strong>.
              </li>
            </ul>
            <p>En el recibo deberá aparecer el nombre de la persona que presentará la prueba de Tercer Ciclo y
            la convocatoria en la que está inscribiendo. <strong>Debe conservar el comprobante de pago</strong>, ya que la foto o la captura de
            pantalla son requeridas para realizar el trámite, ya sea de inscripción de pruebas o de obtención del título.</p>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <h3>Para ingresar al programa de Tercer Ciclo es requisito indispensable:</h3>
              <ol>
              <li>Haber cumplido 14 años (<strong>cumplidos a más tardar al día que inicia la convocatoria que inscribe</strong>).</li>
              <li>Tener el certificado de <strong>Conclusión de Estudios de Primero y Segundo Ciclos (sexto grado)
              o certificación de Conclusión de Estudios de Primero y Segundo Ciclos (sexto grado)</strong>.</li>
              <li>Poseer una cuenta de correo electrónico. El correo electrónico
              que el postulante indique en la boleta de matrícula virtual
              será la comunicación oficial entre la Dirección de Gestión y
              Evaluación de la Calidad y el postulante.
              </li>
              <li>En caso de haber obtenido el título de sexto grado en el extranjero,
              deberá <strong>adjuntar la resolución de reconocimiento</strong>.</li>
              </ol>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <img src={tercerc_5} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={tercerc_6} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Para inscribirse en los exámenes de tercer ciclo en educación abierta deberán:</h3>
            <h6> <strong>POSTULANTES REGULARES QUE PRESENTARON DOCUMENTACIÓN A PARTIR DE LA
            CONVOCATORIA 02-2002 Y SUCESIVAS (CON EXPEDIENTE):</strong></h6>
            
            <ul>
              <li>Llenar el formulario en línea con los datos solicitados en el link: <a
              href="https://portaldgec.mep.go.cr/yo_aplico/Login" target={"_blank"}>
              https://portaldgec.mep.go.cr/yo_aplico/Login
              </a></li>
              <li> Adjuntar el documento de identificación (por ambos lados). </li>
              <li> Adjuntar el recibo del banco (debe aparecer el nombre del postulante y el
              número de convocatoria en la cual se está inscribiendo).</li>
            </ul>

            <h6> <strong>LOS POSTULANTES DEL PROGRAMA QUE NO SE MATRICULARON EN LAS CONVOCATORIAS
            ANTERIORES A LA 02-2021 (sin expediente):</strong></h6>

            <ul>
            <li>Llenar el formulario en línea con los datos solicitados en el link: <a
              href="https://portaldgec.mep.go.cr/yo_aplico/Login" target={"_blank"}>
              https://portaldgec.mep.go.cr/yo_aplico/Login
            </a></li>
            <li> Adjuntar fotografía reciente, tamaño pasaporte, de frente (no se aceptan fotos con sellos). </li>
            <li> Adjuntar el documento de identificación (por ambos lados). </li>
            <li> Adjuntar el recibo del banco (debe aparecer el nombre del postulante y
            el número de convocatoria en la cual se está inscribiendo). </li>
            <li> Adjuntar el siguiente documento, de acuerdo con su situación:
              <ul>
              <li>Documento de identificación por ambos lados (escaneado o foto)
              (El documento de identificación, puede ser cédula de identidad costarricense,
              licencia de conducir costarricense, pasaporte, documento de identificación de
              personas extranjeras emitido por la Dirección General de Migración y Extranjería
              DIMEX o tarjeta de identidad de menores de edad, expedida por el Tribunal Supremo de Elecciones).
              </li>
              <li>Certificado de Conclusión de Estudios de Primero y Segundo Ciclos
              (sexto grado) o certificación de Conclusión de Estudios de Primero y
              Segundo Ciclos (sexto grado) emitida y firmada por el director del centro
              educativo de procedencia. (escaneado o foto).</li>
              <li> Fotografía tamaño pasaporte reciente de frente y sin sellos (escaneado o foto).</li>
              <li>Recibo del pago original de pruebas (escaneada o foto). Deberá escribir 
              los siguientes datos antes de subir el documento de pago: nombre 
              completo del postulante, número de identificación, fecha y número 
              de convocatoria en la cual se está inscribiendo.</li>
              </ul>
            </li>
            </ul>

            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <h3>Apoyos educativos: de acceso y curriculares no significativos</h3>
              
              <p>Las personas <strong>deben optar por el servicio educativo que mejor favorezca su condición</strong> y
              en algunos casos los programas de educación abierta no son la mejor alternativa para
              la población con dificultades específicas en el aprendizaje o para las personas con
              discapacidad, pues es en el sistema formal en el que se le pueden brindar más apoyos
              para solventar sus necesidades.</p>
              
              <p>No obstante, a los postulantes que se inscriben para realizar pruebas en los
              programas de educación abierta, <strong>se les aplican apoyos educativos</strong> que no impliquen
              la eliminación (adecuación curricular significativa) de contenidos y objetivos
              medibles de los programas de estudio de la educación formal.</p>

              <p>Los postulantes que requieran apoyos educativos (de acceso y curriculares
              no significativos) durante la aplicación de las pruebas, deberán tramitarlas
              con anticipación en la <strong>Asesoría de Educación Especial</strong> de la dirección regional
              de educación respectiva y aportar, en el proceso de matrícula, la autorización
              emitida.</p>

              <p>Los postulantes de educación formal a quienes se les aplicaron las pruebas
              nacionales, del año 2004 en adelante, con apoyos educativos (de acceso y
              curriculares no significativos) solamente deberán marcar en el espacio
              correspondiente a los apoyos educativos.</p>

              <p>A aquellos que se les aplicaron los apoyos educativos (de acceso y
              curriculares no significativos) entre los años 1998 y 2003 (Bachillerato o
              noveno), deberán aportar en la matrícula la hoja de registro firmada por
              el equipo del circuito respectivo.</p>

              <p>Los postulantes que han presentado pruebas en los programas de educación
              abierta y se les otorgó en este algún apoyo educativo (de acceso y curriculares
              no significativos), solamente deben indicarlo en el espacio correspondiente.</p>

            
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={tercerc_7} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>

          <p style={{textAlign:"center"}}> <strong>Si necesita más información sobre  los exámenes de Tercer Ciclo de
          la Educación General Básica Abierta, puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto 
          le ayudaremos.</strong></p>

          <div style={{margin:"auto", textAlign:"center", marginTop:"5%", marginBottom:"5%"}}>

              <div className="row d-flex align-items-stretch no-gutters">

              <div className="col-md-4 p-4 p-md-5 order-md-last bg-light">
              <p>Descargar Boleta recurso de revocatoria, composición y ortografía 2022</p>
                <a
                    href={boleta1}
                    download="Boleta recurso de revocatoria, composición y ortografía 2022"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-primary py-3 px-5">Descargar</button>
                  </a>
              </div>

              <div className="col-md-4 p-4 p-md-5 order-md-last bg-light">
              <p>Descargar Boleta recurso de revocatoria de ítems III ciclo 2022</p>
                <a
                    href={boleta2}
                    download="Boleta recurso de revocatoria de ítems III ciclo 2022"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-primary py-3 px-5">Descargar</button>
                  </a>
              </div>


              <div className="col-md-4 p-4 p-md-5 order-md-last bg-light">
              <p>Descargar Formulario de solicitud de reconocimiento de materias o niveles de educación formal o abierta</p>
                <a
                    href={boleta3}
                    download="Formulario de Solicitud de Título de Bachiller en Educación Media"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-primary py-3 px-5">Descargar</button>
                  </a>
              </div>
              </div>
          </div>

        </div>
        </section>

    </Layout>
  );
}

export default TercerCiclo;