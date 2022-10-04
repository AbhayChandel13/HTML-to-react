import React from 'react'

const MainContent = () => {
  return (
    <div>
      <main id="main" className="main">

<div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
<h1> You  Are On The Dashboard </h1>

<section className="section dashboard" style={{  "minHeight":"100vh",
  "display": "flex",
  "flexDirection" :" column"}}>
     
</section>

</main>
    </div>
  )
}

export default MainContent
