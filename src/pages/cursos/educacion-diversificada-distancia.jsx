import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout"
import '../../pages_styles/Courses/Courses.scss';

import edad_1 from "../../assets/images/gallery/Educacion-Diversificada-a-distancia.jpg";
import edad_2 from "../../assets/images/gallery/Educacion-Diversificada-a-distancia-2.jpg";
import edad_3 from "../../assets/images/gallery/Educacion-Diversificada-a-distancia-3.jpg";
import edad_4 from "../../assets/images/gallery/Educacion-Diversificada-a-distancia-4.jpg";
import edad_5 from "../../assets/images/gallery/Bachillerato-por-Madurez-suficiente-5.jpg";
import edad_6 from "../../assets/images/gallery/Bachillerato-por-Madurez-suficiente-6.jpg";
import edad_7 from "../../assets/images/gallery/Bachillerato-por-Madurez-suficiente-7.jpg";

import boleta1 from '../../assets/files/24-2-22._boleta_recurso_revocatoria_composicion_y_ortografia_2022-edad_2022_0.pdf';
import boleta2 from '../../assets/files/24-2-2022-Boleta_recurso_revocatoria_items-edad_2022.pdf';
import boleta3 from '../../assets/files/formulario-de-solicitud-de-titulo-de-bachiller-en-educacion-media.pdf';

var base_url = process.env.REACT_APP_ROOT_URL;


const EdDiversificada = () => {
  return (
    
    <Layout>
      <Helmet>
          <title>IBASA | EDAD</title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 ed_diversificada_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Educación Diversificada a Distancia (EDAD) </h1>
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
            El programa de Educación Diversificada a Distancia EDAD es un programa dirigido
            a personas que cuentan con la educación general básica aprobada (noveno año de
            colegio aprobado o tercer ciclo de la EGBA aprobado) que como mínimo tienen 15
            años y que por diversos motivos no pudieron concluir sus estudios en el sistema
            tradicional (colegios).</p>
            <p>
            El plan de estudios consta de 6 asignaturas:
            </p>
            <ul style={{textAlign:"left"}}>
              <li>Ciencias <strong>(debe seleccionar una materia entre Biología, Química o Física)</strong>.</li>
              <li>Educación Cívica.</li>
              <li>Español.</li>
              <li>Estudios Sociales.</li>
              <li>Idioma extranjero <strong>(debe seleccionar entre inglés o francés)</strong>.</li>
              <li>Matemática.</li>
            </ul>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={edad_1} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
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
            
            <p>A partir del año 2003, la asignatura de Educación Cívica ha formado
            parte del plan de estudios del programa Bachillerato por Madurez Suficiente;
            por lo tanto, deberán realizar la prueba los postulantes que ingresen por
            primera vez o aquellos que no hubiesen aprobado al menos una asignatura en
            este programa antes de esa convocatoria.</p>
            
            <p> Para aprobar el ciclo, el estudiante debe presentar un parcial
            de cada materia en el mes de junio y otro en el mes de setiembre y
            si el promedio de los dos parciales en cada materia da un resultado
            de 70 o más, entonces tiene el cuarto ciclo aprobado en dichas
            asignaturas y obtiene el derecho de presentar los exámenes de
            Bachillerato de esas materias en diciembre con nota de presentación
            (40% corresponde al promedio de los parciales y 60% a la nota del examen de Bachillerato).
            </p>
            
            <p>Si perdiera el o los exámenes de Bachillerato puede presentarlos
            nuevamente en febrero o diciembre del siguiente año.</p>

            <p>Si se da el caso de que en una o más materias el promedio de los dos parciales
            (junio, setiembre) es inferior a 70 entonces debe presentar un examen comprensivo
            de dichas materias en diciembre y si las notas en esos exámenes fueran de 70 o más
            presentaría los exámenes de Bachillerato en febrero o diciembre del siguiente año
            </p>
            
            <p>La nota de presentación ha regido desde el curso lectivo 2001.
            El promedio de las pruebas 1 y 2 de todas las asignaturas representa un
            40% de la nota de la prueba y la prueba de bachillerato corresponde al 60%
            del total de cada asignatura. Para este 40% no se tomará en cuenta los resultados
            obtenidos en las pruebas comprensivas.   A partir del año 2020 la nota de presentación
            equivale a un 60% y la nota de los exámenes finales equivale a un 40%.
            </p>
            
            <p>La preparación para aprobar los exámenes de Bachillerato por madurez se puede
            realizar de diferentes maneras:</p>

            <ul>
              <li>En institutos privados como por ejemplo <a href={base_url}><strong>IBASA</strong></a>.</li>
              <li>En proyectos públicos que se habilitan únicamente para la segunda convocatoria.</li>
              <li>Con profesores particulares.</li>
              <li>En forma autodidacta utilizando por ejemplo los libros del Maestro en Casa del programa ICER.</li>
            </ul>

            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            <p>
            Las fechas de cada convocatoria de exámenes (que generalmente corresponden a sábados y domingos)
            son anunciadas por el MEP
            a inicios de cada año a través de un calendario llamado Calendario Anual de
            las Pruebas de Educación Abierta.</p>
            
            <p>Dicho calendario incluye los períodos de inscripción de las pruebas.
            En esa etapa, los interesados deben pagar un derecho por cada examen que
            deseen presentar. Además, de completar los datos personales en un formulario
            virtual y enviar los documentos solicitados, todo esto a través de una aplicación
            creada por el MEP y habilitada durante el período de inscripción para tal fin,
            llamada <a href="https://portaldgec.mep.go.cr/yo_aplico/Login" target={"_blanck"}>Yo Aplico</a>.</p>
            
            <p>Asimismo, en el calendario se indican las fechas y además,
            en la página <a href="www.dgec.mep.go.cr" target={"_blank"}>www.dgec.mep.go.cr</a>,
            las sedes de aplicación de las pruebas, que generalmente corresponden a escuelas y
            colegios públicos de todo el territorio nacional.
            </p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={edad_2} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={edad_3} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <p>Una vez presentadas las pruebas, el MEP entrega los resultados correspondientes,
              aproximadamente un mes después de su aplicación y habilita un período de 3 días
              hábiles para apelar dichos resultados mediante un trámite virtual que incluye el
              llenado de una boleta llamada <strong>boleta de revocatoria</strong>, a la que el MEP responde al
              cabo de aproximadamente 10 días hábiles y su sentencia es definitiva.
              </p>
              
              <p>En cada convocatoria, el estudiante puede presentar desde una hasta las
              6 materias. Cuando el estudiante ha aprobado las 6 materias, debe hacer el
              trámite (que incluye el pago del derecho de título) para poder obtener el
              título de <strong>Bachiller en Educación Media</strong> dado por el MEP, el cual tiene la
              misma validez que el que se entrega en los colegios y, por lo tanto, sirve
              para presentarlo en cualquier trabajo en que se solicite como requisito y
              adicionalmente para ingresar a la universidad.</p>

            </div>
          </div>
          
          <h2 style={{marginTop:"5%", textAlign:"center"}}>
          Fechas de inscripción y de aplicación de pruebas para el año 2022 - Educación Diversificada a Distancia </h2>
          
          <div style={{marginBottom:"5%"}}>
            <h3> Primera convocatoria</h3>
            <ul>
              <li> <strong>Inscripción</strong>: 04 al 08 de abril.</li>
              <li> <strong>Publicación de las sedes para las pruebas</strong>: 17 de junio 
              (visite la página web <a href="https://dgec.mep.go.cr" target={"_blank"}>dgec.mep.go.cr</a>).</li>
              <li> <strong>Período de pruebas</strong>: 26 de junio, 02 y 03 de julio.</li>
              <li> <strong>Entrega de resultados</strong>: La fecha se informará el 17 de junio.</li>
              <li> <strong>Período para presentar los recursos de revocatoria</strong>: La fecha se informará el 17 de junio.</li>
              <li> <strong>Entrega de la resolución de los recursos de revocatoria</strong>: La fecha se informará el 17 de junio.</li>
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
                <td rowspan="2">Domingo 26 de junio 2022</td>
                <td>De 8:30 a. m. a 11:30 a. m.</td>
                <td>Estudios Sociales</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 4:00 p. m</td>
                <td>Educación Cívica</td>
              </tr>
              <tr>
                <td rowspan="2">Sábado 2 de julio 2022</td>
                <td>De 8:30 a. m. a 11:30 a. m.</td>
                <td>Español</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 4:00 p. m</td>
                <td>Ciencias</td>
              </tr>
              <tr>
                <td rowspan="2">Domingo 3 de julio 2022</td>
                <td>De 8:30 a. m. a 11:30 a. m.</td>
                <td>Matemáticas</td>
              </tr>
              <tr>
                <td>De 1:00 p. m. a 4:00 p. m</td>
                <td>Inglés</td>
              </tr>
              </tbody>
            </table>
            <br></br>
            <h3> Segunda convocatoria</h3>
            <ul>
              <li> <strong>Inscripción</strong>: Del 27 de junio al 1 de julio.</li>
              <li> <strong>Publicación de las sedes para las pruebas</strong>: 02 de setiembre. </li>
              <li> <strong>Período de pruebas</strong>: 11, 17 y 18 de setiembre.</li>
              <li> <strong>Entrega de resultados</strong>:La fecha se informará el 02 de setiembre.</li>
              <li> <strong>Período para presentar los recursos de revocatoria</strong>: La fecha se informará el 02 de setiembre.</li>
              <li> <strong>Entrega de la resolución de los recursos de revocatoria</strong>: La fecha se informará el 02 de setiembre.</li>
            </ul>
            <h3> Calendario de pruebas</h3>
            <p>Se dará a conocer el 17 de junio.</p>

          </div>

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={edad_4} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
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
            <p>En el recibo deberá aparecer el nombre de la persona que presentará la prueba de EDAD y 
            la convocatoria en la que está inscribiendo. <strong>Debe conservar el comprobante de pago</strong>, ya que la foto o la captura de
            pantalla son requeridas para realizar el trámite, ya sea de inscripción de pruebas o de obtención del título.</p>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <h3>¿Quiénes pueden inscribirse en las pruebas de Educación Diversificada a Distancia?</h3>
              <ol>
                <li>Aquellos postulantes que hayan cumplido 15 años y tengan aprobado el III Ciclo de la Educación General Básica en Educación formal o abierta.
                </li>
                <li>Los postulantes pertenecientes al programa EDAD que se hayan inscrito en las pruebas ordinarias 1 y 2 o 
                comprensiva y no aprobaron la o las materias realizadas (es decir, no se egresaron del programa).</li>
                </ol>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <img src={edad_5} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={edad_6} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Requisitos para la inscripción de Educación Diversificada a Distancia</h3>
            <h6> <strong>Postulantes que presentaron documentación a partir de la convocatoria
            02-2002 del programa Bachillerato de Educación Diversificada a Distancia  (con expediente):</strong></h6>
            
            <ul>
              <li>Llenar el formulario en línea con los datos solicitados en el link: <a
              href="https://portaldgec.mep.go.cr/yo_aplico/Login" target={"_blank"}>
              https://portaldgec.mep.go.cr/yo_aplico/Login
              </a></li>
              <li> Adjuntar el documento de identificación (por ambos lados). </li>
              <li> Adjuntar el recibo del banco (debe aparecer el nombre del postulante y el
              número de convocatoria en la cual se está inscribiendo).</li>
            </ul>

            <h6> <strong>Postulantes nuevos y aquellos matriculados en las convocatorias anteriores a
            la 02-2002 del programa Bachillerato de Educación Diversificada a Distancia (sin expediente):</strong></h6>

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
                <li> Postulantes del plan antiguo: colilla de resultados de materias aprobadas. </li>
                <li> Mayores de edad: Certificado de Conclusión de Estudios de la Educación General Básica (9°año).</li>
                <li> Postulantes rezagados de las pruebas de bachillerato del sistema formal
                menores de edad: Adjuntar la certificación del centro educativo donde
                conste su condición de egresado en la asignatura que inscribe.
                </li>
                <li>Postulantes con estudios en el extranjero: Documento que convalida los
                estudios realizados en el extranjero, que deberá corresponder al nivel
                académico de III Ciclo de la Educación General Básica (noveno año) en Costa Rica.
                </li>
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
              <img src={edad_7} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>

          <p style={{textAlign:"center"}}> <strong>Si necesita más información sobre el Bachillerato de Educación 
          Diversificada a Distancia,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>

          <div style={{margin:"auto", textAlign:"center", marginTop:"5%", marginBottom:"5%"}}>

              <div className="row d-flex align-items-stretch no-gutters">

              <div className="col-md-4 p-4 p-md-5 order-md-last bg-light">
              <p>Descargar Boleta de recurso revocatoria composición y ortografía 2022</p>
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
              <p>Descargar boleta recurso revocatoria items edad 2022</p>
                <a
                    href={boleta2}
                    download="Boleta recurso revocatoria items edad 2022"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-primary py-3 px-5">Descargar</button>
                  </a>
              </div>


              <div className="col-md-4 p-4 p-md-5 order-md-last bg-light">
              <p>Descargar Formulario de Solicitud de Título de Bachiller en Educación Media</p>
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

export default EdDiversificada;