import React from "react"
import AnimatedNumbers from "react-animated-numbers";

const AnimatedNumbrs = (props) => (
  <AnimatedNumbers
      animateToNumber={props.num}
      fontStyle={{ fontSize: props.fontSize, color: props.color }}
      configs={[
        { mass: props.mass, tension: props.tension, friction: props.friction }
      ]}
  ></AnimatedNumbers>
)

export default AnimatedNumbrs