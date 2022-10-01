import React from "react";
import HomePageBody from "./HomePageBody";

import Navbar from "./Navbar";


function HomePage() {
  return (
    <div>
      <div className="container-fluid ">
       
        <Navbar />
        <HomePageBody/>
      </div>
    </div>
  );
}

export default HomePage;
