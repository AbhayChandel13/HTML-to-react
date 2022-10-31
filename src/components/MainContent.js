import React from "react";

const MainContent = () => {
  return (
    <>
      <main id="main" className="Main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <h1> You Are On The Dashboard </h1>
      </main>
    </>
  );
};

export default MainContent;
