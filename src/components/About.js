import React from "react";
import Links from "./Links"

function About(props) {
    console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* conditional statement */}
      {props.bio && <p>{props.bio}</p>}
      {/* {props.renderBio()} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin}/>
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
