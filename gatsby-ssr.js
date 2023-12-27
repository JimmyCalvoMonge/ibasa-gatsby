const React = require("react")
import Footer from "./src/components/Footer/Footer"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents}, pluginOptions) => {

  setHeadComponents([
    <script
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      crossOrigin="anonymous">
    </script>,
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V49YV81KCH"></script>
  ])

  setPostBodyComponents([
    <script
    dangerouslySetInnerHTML={{
        __html: `
        !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1204064",hash:"7c735ce48b32369276eb686c785a8da1",locale:"es"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    `,
    }}
    />,
    <Footer></Footer>
  ])
}