import * as React from "react";
import { useState, useEffect } from "react";
import {isMobile} from 'react-device-detect';
import emailjs from "@emailjs/browser";

import { SEO } from "../components/seo";
import '../pages_styles/Contact/Contact.scss';
import Layout from "../components/layout";
import logo from "../assets/images/gallery/ibasa-alajuela.png";
if(isMobile) {
    var whatsapp_link = "https://api.whatsapp.com/send?phone=50684456161"
} else {
    var whatsapp_link = "https://web.whatsapp.com/send?phone=50684456161"
}
var base_url = process.env.REACT_APP_ROOT_URL;

const Contacto = () => {

    const [message, setMessage] = useState("");
    const getMessage = (t) => {
        setMessage(t);
    };

    const [email, setEmail] = useState("");
    const getEmail = (t) => {
        setEmail(t);
    };

    const [telephone, setTelephone] = useState("");
    const getTelephone = (t) => {
        setTelephone(t);
    };

    const [name, setName] = useState("");
    const getName = (t) => {
        setName(t);
    };

    const [course, setCourse] = useState("");
    const getCourse = (t) => {
        setCourse(t);
    };

    const [sent, setSent] = useState(false);
    const [errorSent, setErrorSent] = useState(false);

    useEffect(() => emailjs.init(process.env.REACT_EMAIL_JS_PUBLIC_KEY), []);
    const handleSubmit = async (e) => {

        e.preventDefault();

        const serviceId = process.env.REACT_EMAIL_JS_SERVICE_ID;
        const templateId = process.env.REACT_EMAIL_JS_TEMPLATE_ID;
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const isValidEmail = emailRegex.test(email);
        const conditionsArray = [
            name.length > 2,
            course.length > 2,
            isValidEmail
        ]

        if (conditionsArray.indexOf(false) === -1) {

          try {
              await emailjs.send(serviceId, templateId, {
                  name: name,
                  email: email,
                  course: course,
                  message: message,
                  phone: telephone
              });

          console.log('Correo enviado con éxito!');

          setName('');
          setEmail('');
          setCourse('Seleccione un Curso ...');
          setMessage('');
          setTelephone('');
          
          setSent(true);
          setErrorSent(false);

          setTimeout(() => {
              setSent(false)
          }, 10000);

          } catch (error) {
              console.log("Error!")
              console.log(error);
          } finally {
              console.log('Finalizado!')
          }

        } else {
            console.log('Valores de entrada incorrectos!')
            setErrorSent(true)
        }
    };

    return (
        <Layout>

            <section className="hero-wrap hero-wrap-2 contact_start_image">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 ftco-animate text-center">
                        <h1 className="mb-2 bread">¡Póngase en contacto con nosotros!</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Inicio <i className="ion-ios-arrow-forward"></i></a></span> <span>Contacto <i className="ion-ios-arrow-forward"></i></span></p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section contact-section">
                <div className="container">

                <h6 style={{textAlign:"center"}}> ¡Nuestras puertas están abiertas!</h6>
                    <div className="row d-flex contact-info">
                    <div className="col-md-3 d-flex">
                        <div className="bg-light align-self-stretch box p-4 text-center">
                            <h3 className="mb-4">Dirección </h3>
                            <p><a href="https://www.google.es/maps/place/Instituto+IBASA-Alajuela/@10.0164905,-84.2181734,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0f9c5a0054d07:0x9667c861164a0fb5!8m2!3d10.0164693!4d-84.2160421?hl=es&shorturl=1" target={'_blank'}></a> 2Q8M+HJ Alajuela, Provincia de Alajuela</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="bg-light align-self-stretch box p-4 text-center">
                            <h3 className="mb-4">Números de Contacto</h3>
                            <p><a href={whatsapp_link} target={'_blank'}>+ 506 8445 6161</a></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="bg-light align-self-stretch box p-4 text-center">
                            <h3 className="mb-4">Correo Electrónico</h3>
                            <p style={{fontSize:"12px"}}><a href="mailto:institutoibasa.alajuela@gmail.com">institutoibasa.alajuela@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="bg-light align-self-stretch box p-4 text-center">
                            <h3 className="mb-4">Sitio Web</h3>
                            <p><a href={`${base_url}`}>{base_url}</a></p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <h6 style={{textAlign:"center"}}> ¡Escríbanos y con gusto le atenderemos todas sus dudas!</h6>
            
            <section style={{marginBottom:"5%"}}>
                <div className="container">
                    
                    <div className="row d-flex align-items-stretch no-gutters">
                        <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">

                        <h1> Ibasa </h1>  
                                                
                        <script id="amoforms_script_1204064" async="async" 
                            charset="utf-8" src="https://forms.kommo.com/forms/assets/js/amoforms.js?1702422060"></script>
                        
                        </div>
                        <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
                        <a href="https://www.google.es/maps/place/Instituto+IBASA-Alajuela/@10.0164905,-84.2181734,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0f9c5a0054d07:0x9667c861164a0fb5!8m2!3d10.0164693!4d-84.2160421?hl=es&shorturl=1" target={'_blank'}>
                            <img src={logo} className="App-logo" alt="logo" style={{width:"100%"}}/>
                        </a>
                        </div>
                    </div>
                </div>
            </section>

            <h1> Fin de la pagina </h1>

        </Layout>
    );
}

export default Contacto;

export const Head = () => (
    <SEO title="IBASA | Contacto">
        <script type="application/ld+json">
            {`
                {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${base_url},
                "name": "Instituto Ibasa",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+506 8445 6161",
                    "contactType": "Customer Support"
                }
                }
            `}
        </script>
    </SEO>
  )