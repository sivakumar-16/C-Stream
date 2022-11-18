//import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import React from "react";
export default function Nav(){
    return(
        <>
        <center><h3>C Stream (CODIIS Stream)
</h3></center>
        <nav className="navbar navbar-expand-lg navbar-dark bg-pink">
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
     
      <li class="nav-item">
        <a class="nav-link" href="#/Register">Register</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/Login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/Upload">Upload Video</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#/withdraw">Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#/alldata">All Data</a>
      </li> */}
    </ul>
  </div>
</nav>
        </>

    )
}