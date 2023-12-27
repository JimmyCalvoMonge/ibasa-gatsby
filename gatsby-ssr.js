const React = require("react")

export const onRenderBody = ({ setHeadComponents}, pluginOptions) => {
  setHeadComponents([
    <script
      src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      crossOrigin="anonymous">
    </script>,
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-V49YV81KCH"></script>
  ])
}