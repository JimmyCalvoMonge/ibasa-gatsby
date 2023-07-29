import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Ibasa | Página no encontrada</h1>
      <p style={paragraphStyles}>
        Lo sentimos 😔, no pudimos encontrar la página que buscas!
        <br />
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Ibasa | Página no encontrada</title>
