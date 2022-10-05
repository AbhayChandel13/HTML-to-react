import React from 'react';
import {NavLink}  from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="Main">
    

      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking for doesn't exist.</h2>
        <NavLink className="btn" to="/">Back to home</NavLink>
        <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
        <div className="credits">          
          Designed by <a href="https://bootstrapmade.com/">Abhay Chandel</a>
        </div>
      </section>

    
  </main>
      
    </>
  )
}

export default Error
