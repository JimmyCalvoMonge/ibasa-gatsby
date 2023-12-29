const React = require("react")
import logo from "./src/assets/images/gallery/ibasa-alajuela.png";
import Footer from "./src/components/Footer/Footer"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents, pathname}, pluginOptions) => {

  setHeadComponents([
    <script
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      crossOrigin="anonymous">
    </script>,
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V49YV81KCH"></script>
  ])

  setPostBodyComponents([
  
    // <script
    // dangerouslySetInnerHTML={{
    //     __html: `
    //     jQuery(document).ready(function() {
    //             !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1204064",hash:"7c735ce48b32369276eb686c785a8da1",locale:"es"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    //     });`,
    // }}
    // />,

    <h6 style={{textAlign:"center"}}> ¡Escríbanos y con gusto le atenderemos todas sus dudas!</h6>,

    <section style={{marginBottom:"5%"}}>
        <div className="container">
            <div className="row d-flex align-items-stretch no-gutters">
                <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">

                <h1> {pathname} </h1>

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
    </section>,

    <Footer></Footer>
  
  ])
}