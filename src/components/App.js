import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";


// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
console.log(user.links.github)

function App() {
  // function renderBio(){
  //   if (user.bio){
  //     return <p>{user.bio}</p>
  //   }
  // }
  return (
    <div>
      <NavBar />
      <Home username={user.name} name={user.name} city={user.city} color={user.color}/> 
      {/* <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} renderBio={renderBio}/> */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
