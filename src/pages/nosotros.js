import * as React from "react"
import Loadable from "react-loadable"
import { SEO } from "../components/seo"

// Import Page css
import '../pages_styles/About/About.scss'

// Import base Layout
import Layout from "../components/layout"
// import Testimony from "../components/Testimony/Testimony";
import Gallery from "../components/Gallery/Gallery";

const loader=()=>(<div> Cargando ... </div>)
const MyLoadableAnimatedNumbers = Loadable({
  loader: () => import("../components/AnimatedNumbers/AnimatedNumbers"),
  loading: loader,
})

const MyLoadableTestimony = Loadable({
  loader: () => import("../components/Testimony/Testimony"),
  loading: loader,
})

const AboutPage = () => {

  return (
    <Layout>

      <section className="hero-wrap hero-wrap-2 about_start_image">
          <div className="overlay"></div>
          <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-center">
                  <div className="col-md-9 ftco-animate text-center">
                    <h1 className="mb-2 bread">Sobre Nosotros</h1>
                    <p className="breadcrumbs"><span className="mr-2"><a href="/">Inicio <i className="ion-ios-arrow-forward"></i></a></span> <span>Nosotros <i className="ion-ios-arrow-forward"></i></span></p>
                  </div>
              </div>
          </div>
      </section>
            
      <section className="ftco-section ftco-no-pt ftc-no-pb">
          <div className="container">
              <div className="row d-flex">
                  <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch">
                      <div className="img about_info_image"></div>
                  </div>
                  <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate">
          <h2 className="mb-4">Instituto IBASA</h2>

          <p>Fundado en Alajuela el 15 de abril de 1995. Cuatro años más tarde abrió su sede de San José.
          Desde su fundación nos hemos caracterizado por impartir lecciones de todas las materias en el
          área de Educación Formal y Abierta, labor que hemos desempeñado con mucho éxito, esto se ve
          reflejado en los altos porcentajes de rendimiento académico, lo cual nos ha permitido ocupar
          en innumerables ocasiones los primeros lugares en promoción a nivel nacional y también contar
          con una cantidad considerable de estudiantes.</p>

          </div>
              </div>
          </div>
      </section>
      
      <section className="ftco-section ftco-counter img about_background_image" id="section-counter" data-stellar-background-ratio="0.5">
        
        <div className="container">
            
            <div className="row justify-content-center mb-5 pb-2 d-flex">
                
                <div className="col-md-6 align-items-stretch d-flex">
                    <div className="img img-video d-flex align-items-center about_video_image">
                        <div className="video justify-content-center">
                          <a href="https://www.youtube.com/watch?v=RDzxvLc3Pu4" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                            <span className="ion-ios-play"></span>
                          </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
                    <h2 className="mb-4">Misión</h2>
                    <p>Crecer como institución en la enseñanza y preparación académica,
                    satisfaciendo las necesidades de nuestros clientes y brindándoles un
                    servicio de calidad y excelencia.</p>

                    <h2 className="mb-4">Visión</h2>
                    <p>Ser reconocidos a nivel nacional como un instituto innovador,
                    eficiente y comprometido con la preparación académica de nuestros estudiantes.</p>

                    <h2 className="mb-4">Valores</h2>
                    <ul className='ul_list'>
                        <li>Disciplina</li>
                        <li>Responsabilidad</li>
                        <li>Honestidad</li>
                        <li>Compromiso</li>
                        <li>Calidad</li>
                        <li>Trabajo en Equipo</li>
                    </ul>
                </div>

            </div>	
            
            <div className="row d-md-flex align-items-center justify-content-center">
                
              <div className="col-lg-12">

                <div className="row d-md-flex align-items-center">
                
                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon"><span className="flaticon-doctor"></span>
                      </div>
                      <div className="text">
                        <strong className="number d-flex" data-number="30">
                          <div className='left'>
                            <MyLoadableAnimatedNumbers num={30} fontSize={40} color={'white'} mass={1} tension={100} friction={50}>
                            </MyLoadableAnimatedNumbers>
                          </div>
                          <div className='right'>
                            <p>+</p>
                          </div>
                        </strong>
                        <span>Profesores</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon"><span className="flaticon-doctor"></span>
                      </div>
                      <div className="text">
                        <strong className="number d-flex" data-number="30">
                          <div className='left_b'>
                            <MyLoadableAnimatedNumbers num={6000} fontSize={40} color={'white'} mass={1} tension={100} friction={50}>
                            </MyLoadableAnimatedNumbers>
                          </div>
                          <div className='right_b'>
                            <p>+</p>
                          </div>
                        </strong>
                        <span>Estudiantes</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon"><span className="flaticon-doctor"></span>
                      </div>
                      <div className="text">
                        <strong className="number d-flex" data-number="30">
                        <div className='left'>
                          <MyLoadableAnimatedNumbers num={18} fontSize={40} color={'white'} mass={1} tension={100} friction={50}>
                          </MyLoadableAnimatedNumbers>
                        </div>
                        <div className='right'>
                          <p>+</p>
                        </div>
                        </strong>
                        <span>Programas</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18">
                      <div className="icon"><span className="flaticon-doctor"></span></div>
                      <div className="text">
                        <strong className="number d-flex" data-number="50">
                        <div className='left'>
                          <MyLoadableAnimatedNumbers num={98} fontSize={40} color={'white'} mass={2} tension={100} friction={50}>
                          </MyLoadableAnimatedNumbers>
                        </div>
                        <div className='right'>
                          <p>%</p>
                        </div>
                        </strong>
                        <span>Graduados</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          
        </div>

      </section>

      <MyLoadableTestimony></MyLoadableTestimony>
      <Gallery></Gallery>

    </Layout>
  )
}

export default AboutPage

export const Head = () => (
  <SEO title="IBASA | Sobre Nosotros" />
)