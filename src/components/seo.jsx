import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

var base_url = process.env.REACT_APP_ROOT_URL;
export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername
  }

  const google_tag_styles = {
    display:"none",
    visibility:"hidden"
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
      <link rel="canonical" href={base_url} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Instituto IBASA ✅ Aprueba Bachillerato por Madurez y Admisión UCR" />
      <meta property="og:description" content="Apruebe los exámenes de Bachillerato por Madurez Suficiente, FARO, Admisión UCR, TEC, UNA con nuestro Instituto IBASA ❤️" />
      <meta property="og:url" content={base_url} />
      <meta property="og:site_name" content="Instituto IBASA" />
      <meta property="og:updated_time" content="2023-07-25T11:13:45-06:00" />
      <meta property="article:published_time" content="2022-04-29T12:04:15-06:00" />
      <meta property="article:modified_time" content="2023-07-25T11:13:45-06:00" />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>" />
      {children}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K76LX6L"
      height="0" width="0" style={google_tag_styles}></iframe></noscript>
    </>
  )
}