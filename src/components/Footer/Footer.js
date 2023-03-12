import * as React from "react"
import '../../components/Footer/Footer.scss'

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
                        <li><a href="/"><span className="icon icon-phone"></span><span className="text">+506 8445-6161</span></a></li>
                        <li><a href="/"><span className="icon icon-envelope"></span><span className="text long_text">institutoibasa.alajuela@gmail.com</span></a></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">Información Reciente</h2>
                    <div className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4 footer_blog_image" href="/"><p style={{'display':'none'}}>Image</p></a>
                    <div className="text">
                        <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                        <div className="meta">
                        <div><a href="/"><span className="icon-calendar"></span> June 27, 2019</a></div>
                        <div><a href="/"><span className="icon-person"></span> Admin</a></div>
                        <div><a href="/"><span className="icon-chat"></span> 19</a></div>
                        </div>
                    </div>
                    </div>
                    <div className="block-21 mb-5 d-flex">
                    <a className="blog-img mr-4 footer_blog_image" href="/"><p style={{'display':'none'}}>Image</p></a>
                    <div className="text">
                        <h3 className="heading"><a href="/">Even the all-powerful Pointing has no control about</a></h3>
                        <div className="meta">
                        <div><a href="/"><span className="icon-calendar"></span> June 27, 2019</a></div>
                        <div><a href="/"><span className="icon-person"></span> Admin</a></div>
                        <div><a href="/"><span className="icon-chat"></span> 19</a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5 ml-md-4">
                    <h2 className="ftco-heading-2">Enlaces</h2>
                    <ul className="list-unstyled">
                    <li><a href="/"><span className="ion-ios-arrow-round-forward mr-2"></span>Inicio</a></li>
                    <li><a href="/nosotros"><span className="ion-ios-arrow-round-forward mr-2"></span>Nosotros</a></li>
                    <li><a href="/cursos"><span className="ion-ios-arrow-round-forward mr-2"></span>Cursos</a></li>
                    <li><a href="/profes"><span className="ion-ios-arrow-round-forward mr-2"></span>Profesores</a></li>
                    <li><a href="/blogs"><span className="ion-ios-arrow-round-forward mr-2"></span>Información</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-5">
                    <h2 className="ftco-heading-2">¡Envíe sus dudas!</h2>
                    <form action="/" className="subscribe-form">
                    <div className="form-group">
                        <input type="text" className="form-control mb-2 text-center" placeholder="Correo Electrónico"></input>
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