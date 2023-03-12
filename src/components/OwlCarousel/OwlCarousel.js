import React from "react"
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

const MyOwlCarousel = (props) => (
    <OwlCarousel
    items={props.items}
    margin={props.margin}
    loop={props.loop}
    autoplay={props.autoplay}
    animateOut={props.animateOut}
    dots={props.dots}
    dotsClass={props.dotsClass}>
    {props.children}
    </OwlCarousel>
)

export default MyOwlCarousel