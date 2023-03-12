import * as React from "react"
import Loadable from "react-loadable"

import './About.scss';

const loader=()=>(<div> Loading animating numbers ... </div>)
const MyLoadableAnimatedNumbers = Loadable({
  loader: () => import("../../components/AnimatedNumbers/AnimatedNumbers"),
  loading: loader,
})

const About= () => {

  return (
    <div>
      <section className="ftco-section ftco-counter img about_background" id="section-counter" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2 d-flex">
            <div className="col-md-6 align-items-stretch d-flex">
              <div className="img img-video d-flex align-items-center about_image">
                <div className="video justify-content-center">
                    <a href="https://www.youtube.com/watch?v=RDzxvLc3Pu4" className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                      <span className="ion-ios-play"></span>
                  </a>
                  </div>
              </div>
            </div>
            <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
            <h2 className="mb-4">Instituto IBASA</h2>
            <p>Fundado en Alajuela el 15 de abril de 1995. Cuatro años más tarde abrió su sede de San José.</p>
            <p>Desde nuestra fundación nos hemos caracterizado por impartir lecciones 
            de todas las materias en el área de Educación Formal y Abierta, 
            labor que hemos desempeñado con mucho éxito, esto se ve reflejado 
            en los altos porcentajes de rendimiento académico, lo cual nos ha 
            permitido ocupar en innumerables ocasiones los primeros lugares en 
            promoción a nivel nacional y también contar con una cantidad 
            considerable de estudiantes. </p>
            </div>
          </div>	
          <div className="row d-md-flex align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="row d-md-flex align-items-center">
                <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon"><span className="flaticon-doctor"></span></div>
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
                  <div className="icon"><span className="flaticon-doctor"></span></div>
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
                    <div className="icon"><span className="flaticon-doctor"></span></div>
                    <div className="text">
                    <strong className="number d-flex" data-number="30">
                    <div className='left'>
                      <MyLoadableAnimatedNumbers num={10} fontSize={40} color={'white'} mass={1} tension={100} friction={50}>
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
                      <MyLoadableAnimatedNumbers num={98} fontSize={40} color={'white'} mass={1} tension={100} friction={50}>
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
    </div>
  );
}

export default About;