import React from 'react'
import  "./nav.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className=" navbar-toggler-icons"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/form">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active text-dark"  to="/participants">Participants</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}
