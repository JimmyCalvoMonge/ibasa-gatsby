import * as React from "react"
import './contactform.scss'

const ContactForm = () => {
    return (
    <div>
        <section className="ftco-section ftco-consult ftco-no-pt ftco-no-pb request_background" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-md-6 py-5 px-md-5">
                        <div className="py-md-5">
                            <div className="heading-section heading-section-white ftco-animate mb-5">
                                <h2 className="mb-4">¡Póngase en contacto con nosotros!</h2>
                                <p>En Instituto IBASA contamos con profesionales en
                                educación para preparar a los y las estudiantes y
                                que puedas aprobar los exámenes que aplica el MEP
                                y para los exámenes de admisión de las universidades.
                                </p>
                                <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                    !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1204064",hash:"7c735ce48b32369276eb686c785a8da1",locale:"es"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
                                `,
                                }}
                                />
                                <script id="amoforms_script_1204064" async="async" charset="utf-8" 
                                    src="https://forms.kommo.com/forms/assets/js/amoforms.js?1702422060">
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default ContactForm;

// import logo from "../../assets/images/gallery/ibasa-alajuela.png";
// <script
// dangerouslySetInnerHTML={{
//     __html: `
//     jQuery(document).ready(function() {
//             !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1204064",hash:"7c735ce48b32369276eb686c785a8da1",locale:"es"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
//     });`,
// }}
// />,

{/* <div>
        <h6 style={{textAlign:"center"}}> ¡Escríbanos y con gusto le atenderemos todas sus dudas!</h6>,
        <section style={{marginBottom:"5%"}}>
            <div className="container">
                <div className="row d-flex align-items-stretch no-gutters">
                    <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">

                    <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1204064",hash:"7c735ce48b32369276eb686c785a8da1",locale:"es"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
                    `,
                    }}
                    />

                    <script id="amoforms_script_1204064" async="async" charset="utf-8" 
                        src="https://forms.kommo.com/forms/assets/js/amoforms.js?1702422060">
                    </script>

                    </div>
                    <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
                    <a href="https://www.google.es/maps/place/Instituto+IBASA-Alajuela/@10.0164905,-84.2181734,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0f9c5a0054d07:0x9667c861164a0fb5!8m2!3d10.0164693!4d-84.2160421?hl=es&shorturl=1" target={'_blank'}>
                        <img src={logo} className="App-logo" alt="logo" style={{width:"100%"}}/>
                    </a>
                    <p> Oficinas Centrales Ibasa. ¡Todos nuestros cursos son virtuales para su mayor comodidad!</p>
                    </div>
                </div>
            </div>
        </section>
    </div> */}