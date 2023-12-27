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
    <script id="amoforms_script_1204064" async="async" 
    charset="utf-8" src="https://forms.kommo.com/forms/assets/js/amoforms.js?1702422060"></script>,
    <Footer></Footer>
  ])
}