import * as React from "react"
import {isMobile} from 'react-device-detect';
import '../../components/Footer/Footer.scss'
var base_url = process.env.REACT_APP_ROOT_URL;

if(isMobile) {
    var whatsapp_link = "https://api.whatsapp.com/send?phone=50684456161"
} else {
    var whatsapp_link = "https://web.whatsapp.com/send?phone=50684456161"
}

var FullBlogsData = require('../../pages_styles/Blogs/FullBlogsData.json');

const Footer = () =>  {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">¿Tiene preguntas?</h2>
                    <div className="block-23 mb-3">
                    <ul>
                        <li><span className="icon icon-map-marker"></span><span className="text"><a href="https://www.google.es/maps/place/Instituto+IBASA-Alajuela/@10.0164905,-84.2181734,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0f9c5a0054d07:0x9667c861164a0fb5!8m2!3d10.0164693!4d-84.2160421?hl=es&shorturl=1" target={'_blank'} rel="noopener noreferrer">Cómo llegar</a></span></li>
                        <li><a href={whatsapp_link} target={'_blank'}><span className="icon icon-phone"></span><span className="text">+506 8445-6161</span></a></li>
                        <li><a href="mailto:institutoibasa.alajuela@gmail.com" target={'_blank'}><span className="icon icon-envelope"></span><span className="text long_text">institutoibasa.alajuela@gmail.com</span></a></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">Información Reciente</h2>
                    <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4 footer_blog_image" href={`${base_url}/cursos/admision-ucr-una/`}><p style={{'display':'none'}}>Image</p></a>
                    <div className="text">
                        <h3 className="heading"><a href={`${base_url}/cursos/admision-ucr-una/`}> {FullBlogsData[0].title}</a></h3>
                        <div className="meta">
                        <div><a href={`${base_url}/cursos/admision-ucr-una/`}><span className="icon-calendar"></span> {FullBlogsData[0].day} {FullBlogsData[0].month}, {FullBlogsData[0].year} </a></div>
                        </div>
                    </div>
                    </div>
                    <div className="block-21 mb-5 d-flex">
                    <a className="blog-img mr-4 footer_blog_image" href={`${base_url}/cursos/ingles/`}><p style={{'display':'none'}}>Image</p></a>
                    <div className="text">
                        <h3 className="heading"><a href={`${base_url}/cursos/ingles/`}>{FullBlogsData[1].title}</a></h3>
                        <div className="meta">
                        <div><a href={`${base_url}/cursos/ingles/`}><span className="icon-calendar"></span> {FullBlogsData[1].day} {FullBlogsData[1].month}, {FullBlogsData[1].year}</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5 ml-md-4">
                    <h2 className="ftco-heading-2">Enlaces</h2>
                    <ul className="list-unstyled">
                    <li><a href={`${base_url}`}><span className="ion-ios-arrow-round-forward mr-2"></span>Inicio</a></li>
                    <li><a href={`${base_url}/nosotros`}><span className="ion-ios-arrow-round-forward mr-2"></span>Nosotros</a></li>
                    <li><a href={`${base_url}/cursos`}><span className="ion-ios-arrow-round-forward mr-2"></span>Cursos</a></li>
                    <li><a href={`${base_url}/profes`}><span className="ion-ios-arrow-round-forward mr-2"></span>Profesores</a></li>
                    <li><a href={`${base_url}/blogs`}><span className="ion-ios-arrow-round-forward mr-2"></span>Información</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">¡Pruebe una de nuestras clases!</h2>
                    <form action={`${base_url}/cursos/clases-gratuitas/`} className="subscribe-form">
                    <div className="form-group">
                        <input type="submit" value="Solcitar información" className="form-control submit px-3"></input>
                    </div>
                    </form>
                </div>
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2 mb-0">¡Conecte con nosotros!</h2>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li className="ftco-animate"><a href="https://www.facebook.com/ibasacr/" target={'_blank'} rel="noopener noreferrer"><span className="icon-facebook"></span> <p style={{'display':'none'}}>Image</p></a></li>
                    <li className="ftco-animate"><a href="https://www.instagram.com/ibasacr/" target={'_blank'} rel="noopener noreferrer"><span className="icon-instagram"></span> <p style={{'display':'none'}}>Image</p></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">

                <p> Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by 
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" >Colorlib</a></p>
                </div>
            </div>
        </div>
    </footer>
  );
}
  
export default Footer;