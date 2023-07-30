import React from "react"
import { Helmet } from "react-helmet"

import Footer from "./Footer/Footer"
import NavBarDark from "./NavBar/NavBarDark"
import NavBarLight from "./NavBar/NavBarLight"

export default function Layout({ children }) {
  return (
    <div>
    <Helmet>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" async />
      <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    </Helmet>
    <NavBarLight></NavBarLight>
    <NavBarDark></NavBarDark>
      {children}
    <Footer></Footer>
    </div>
  )
}