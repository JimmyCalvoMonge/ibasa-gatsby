import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from "../../components/layout";
import ContactForm from "../../components/ContactForm/contactform";
import '../../pages_styles/Courses/Courses.scss';
import niv_mate from "../../assets/images/gallery/Nivelacion-en-Matematica-1024x490.jpg";
import niv_mate_2 from "../../assets/images/gallery/Curso-de-Nivelacion-en-Matematica-1.jpg";
import niv_mate_3 from "../../assets/images/gallery/Nivelacion-en-Matematica-1.jpg";
import niv_mate_4 from "../../assets/images/gallery/Curso-de-Nivelacion-en-Matematica.jpg";
var base_url = process.env.REACT_APP_ROOT_URL;


const NivMate = () => {
  return (
    <Layout>
        <Helmet>
          <title>IBASA | Nivelación Matemática </title>
        </Helmet>
        <section className="hero-wrap hero-wrap-2 niv_matematicas_start_image">
        <div className="overlay"></div>
        <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center">
                <h1 className="mb-2 bread">Curso de Nivelación en Matemática</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio<i className="ion-ios-arrow-forward"></i></a></span> <span>Cursos <i className="ion-ios-arrow-forward"></i></span></p>
            </div>
            </div>
        </div>
        </section>

        <section>
        <div className="container">

          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3> El curso de Nivelación de Matemáticas está dirigido principalmente a: </h3>
            <ol>
              <li>Estudiantes de 11° y 12° de colegios académicos y técnicos.</li>
              <li>Estudiantes egresados de secundaria que desean ingresar este año o 
              el próximo a cualquiera de las universidades públicas o privadas.</li>
              <li>Estudiantes universitarios que estén iniciando su carrera y tengan en su plan 
              de estudio algún curso de matemática.</li>
              <li>En general, el curso está dirigido a cualquier persona que 
              desee mejorar sus conocimientos y destrezas en el área de matemática.</li>
            </ol>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={niv_mate} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
            {/* <ContactForm course={'Nivelación Matemática'} showmessage={true}></ContactForm> */}
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <h3>Objetivo Principal</h3>
              <p>La finalidad del curso de Nivelación de Matemáticas es corregir 
              las debilidades de los estudiantes de nuevo ingreso en los procesos 
              básicos requeridos para asumir exitosamente los cursos de matemáticas 
              en la universidad.
              </p>
              <h4>El MEP los puntualiza con precisión: «incluyen cinco procesos básicos«yen cinco procesos básicos»</h4>
              <ol>
                <li>Razonar y argumentar.</li>
                <li>Plantear y resolver problemas.</li>
                <li>Conectar, establecer relaciones.</li>
                <li>Representar de diversas formas (gráficas, numéricas, simbólicas, tabulares, etc.).</li>
                <li>Comunicar, expresar ideas matemáticas formal y verbalmente.</li>
              </ol>
              <p>En este curso de Nivelación de Matemáticas se estudian los mismos temas que
              tienen otros cursos, por ejemplo, el curso MA-0001 Precálculo y MA-0101 Matemática
              General que imparten la UCR y el TEC respectivamente.
              </p>
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
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light" style={{textAlign:"center"}}>
              <img src={niv_mate_3} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <h3>Ventajas del curso de nivelación:</h3>
            <ul>
              <li>Proporcionar al estudiante de secundaria, los conocimientos y herramientas básicas 
            para aprobar la materia de matemática de 11° y 12° con facilidad y con excelentes 
            notas que le ayuden a elevar su promedio y su nota de presentación.</li>
              <li>Preparar al estudiante de secundaria para que apruebe los exámenes del Proyecto MATEM.</li>
              <li>Proveer al estudiante, a los egresados de secundaria y a los estudiantes que están iniciando o 
            próximamente iniciarán su carrera universitaria, las herramientas requeridas para que puedan hacer 
            frente de manera exitosa a las pruebas:</li>
            </ul>
            
            <p><strong>1. DIMA (diagnóstico en matemática) de la UCR:</strong> Este examen lo deben presentar los 
            estudiantes que en el plan de estudio de la carrera de su preferencia incluya alguna 
            de las siguientes materias: MA-1001 Cálculo I, MA-1101 Cálculo I, MA-1210 Cálculo I 
            para Ciencias de la Salud, MA-0320 Estructuras Matemáticas Discretas, MA-0291 Introducción 
            a la Matemática para Computación, MA-1021 Cálculo para Ciencias Económicas I, MA-0230 
            Matemática para Ciencias Económicas I, MA-0101 Matemática de Ingreso, MA-0002 Álgebra 
            Elemental y MA-0150 Principios de Matemática.
            </p>


            </div>
          </div>
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
            <p><strong>2. Examen de diagnóstico y de ubicación del TEC (requisito de ingreso en todas las carreras que imparte el TEC 
            para todos sus estudiantes):</strong> Apoyar en la preparación para la prueba de aptitud académica (PAA) 
            de la UCR-UNA y en el examen de admisión del TEC.
            Aumentar las probabilidades de enfrentar con éxito la prueba de 
            habilidades cuantitativas (PHC) que es un examen que mide la capacidad para resolver problemas en 
            los cuales el proceso de razonamiento con contenidos matemáticos es lo primordial y no solamente 
            la aplicación de un algoritmo y su aprobación es un requisito adicional de ingreso para las siguientes 
            carreras de la UCR: Farmacia, Química, Física, Meteorología, Matemática, Ciencias Actuariales, Geología, 
            Estadística, Ingeniería Mecánica e Ingeniería Mecánica con énfasis en protección contra incendios.</p>
            <p>
            En términos generales, si usted hace un examen de conciencia y reconoce que las huelgas, 
            la pandemia, los cambios en los temarios del MEP y/o su poco interés y disciplina le han 
            ocasionado problemas para dominar los contenidos y las habilidades requeridas en matemática 
            y usted ha decidido solucionar dichos problemas <em>tomando el toro por los cuernos</em>, entonces <strong>ESTE CURSO ES PARA USTED</strong>.
            </p>
            </div>
            <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
              <img src={niv_mate_4} className="App-logo" alt="logo" style={{width:"100%"}} ></img>
            </div>
          </div>
          <h2 style={{marginTop:"5%", textAlign:"center"}}> Temas y Contenidos del Curso de Nivelación de Matemáticas </h2>

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
                  Tema 1 de Nivelación de Matemáticas: Operaciones con expresiones algebraicas y números reales
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Operaciones con números racionales y radicales.</li>
                  <li>Operaciones con polinomios y expresiones algebraicas fraccionarias (suma, resta, multiplicación y división).</li>
                  <li>Simplificación de expresiones algebraicas fraccionarias.</li>
                  <li>Factorización de polinomios, mediante dos o más métodos.</li>
                </ol>     
                </td>
              </tr>
              <tr>
                <td >
                  Tema 2 de Nivelación de Matemáticas: Ecuaciones e inecuaciones
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Ecuaciones: polinomiales (de grado uno, dos y tres), fraccionarias, radicales y con valor absoluto.</li>
                  <li>Planteo y solución de problemas que involucren ecuaciones polinomiales (de grado uno y dos) o fraccionarias.</li>
                  <li>Solución de sistemas de dos ecuaciones lineales con dos incógnitas.</li>
                  <li>Inecuaciones: polinomiales (de grado uno, dos y tres), fraccionarias y con valor absoluto.</li>
                </ol>   
                </td>
              </tr>
              <tr>
                <td>
                  Tema 3 de Nivelación de Matemáticas: Funciones
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Identificar funciones de una lista de relaciones dadas.</li>
                  <li> Determinar el dominio y el ámbito de una función dada, simbólica o gráficamente.</li>
                  <li> Determinar la imagen o preimágenes de un valor y puntos de intersección con los ejes, usando el criterio de la función o su gráfica.</li>
                  <li> Determinar el dominio máximo de una función que involucre expresiones polinomiales, fraccionarias y con radicales.</li>
                  <li> Reconocer gráficamente funciones crecientes y funciones decrecientes. – Determinar los intervalos de monotonía en la gráfica de la función. </li>
                  <li> Clasificar las funciones como inyectivas, sobreyectivas y biyectivas.</li>
                  <li> Verificar si una función dada posee inversa.</li>
                  <li> Reconocer gráficamente una función y su inversa.</li>
                  <li> Dada la gráfica de una función resolver inecuaciones del tipo f (x) &gt; 0, f (x) &lt; O, f (x) &gt; 0, f (x) &lt; 0.</li>
                  <li> Efectuar operaciones con funciones: suma, resta, multiplicación, división y composición.</li>
                  <li> Dibujar gráficas de algunas funciones simples: lineales, cuadráticas, con valor absoluto, radicales.</li>
                </ol>
                </td>
              </tr>
              <tr>
                <td>
                  Tema 4 de Nivelación de Matemáticas: Rectas y parábolas en el plano
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Identificar las ecuaciones de rectas y parábolas.</li>
                  <li>Interpretar y calcular la pendiente de una recta y los puntos de intersección con los ejes coordenados.</li>
                  <li>Determinar la intersección de dos rectas dadas o una recta y una parábola.</li>
                  <li>Determinar la ecuación de una recta paralela o perpendicular a otra recta dada.</li>
                  <li>Determinar el ámbito, el vértice, la concavidad, el eje de simetría, los puntos de intersección con los ejes coordenados de una parábola, a partir de su ecuación o su gráfica.</li>
                  <li>Trazar gráficas de rectas y parábolas dada su ecuación.</li>
                </ol>
                </td>
              </tr>
              <tr>
                <td>
                  Tema 5 de Nivelación de Matemáticas: Función exponencial y logarítmica
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Operar con exponentes y logaritmos.</li>
                  <li>Conocer y aplicar las propiedades de las funciones logarítmicas y exponenciales.</li>
                  <li>Analizar sus gráficas considerando el valor de sus bases.</li>
                  <li>Resolver ecuaciones exponenciales.</li>
                  <li>Resolver ecuaciones logarítmicas.</li>
                </ol>
                </td>
              </tr>
              <tr>
                <td>
                  Tema 6 de Nivelación de Matemáticas: Trigonometría
                </td>
                <td style={{textAlign:"left"}}>
                <ol>
                  <li>Identificar ángulos referidos a un sistema de coordenadas.</li>
                  <li>Determinar la medida de ángulos en grados o radianes, incluyendo conversiones de grados radianes y viceversa.</li>
                  <li>Determinar razones trigonométricas de ángulos agudos.</li>
                  <li>Establecer equivalencias de expresiones trigonométricas.</li>
                  <li>Determinar valores de las funciones trigonométricas para la medida de los ángulos en el círculo trigonométrico mediante el ángulo de referencia o a partir de pares ordenados.</li>
                  <li>Resolver ecuaciones trigonométricas en el intervalo indicado.</li>
                </ol>   
                </td>
              </tr>
            </tbody>
          </table>

          <p style={{textAlign:"center", marginTop:"5%"}}> <strong>Si necesita más información sobre el curso de Nivelación de Matemáticas,
          puede <a href={`${base_url}/contacto`}>contactarnos</a> y con gusto le ayudaremos.</strong></p>
        </div>
        </section>
    </Layout>
  );
}

export default NivMate;