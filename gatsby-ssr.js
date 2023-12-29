const React = require("react")

import Footer from "./src/components/Footer/Footer"
import ContactForm from "./src/components/ContactForm/contactform";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents, pathname}, pluginOptions) => {

  setHeadComponents([
    <script
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      crossOrigin="anonymous">
    </script>,
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V49YV81KCH"></script>
  ])

  if(pathname.includes("contacto") || pathname.includes("nosotros") || pathname === "/"){

    setPostBodyComponents([
      <ContactForm></ContactForm>,
      <Footer></Footer>
    ])

  }else{

    setPostBodyComponents([
      <Footer></Footer>
    ])
  }

  
}