import React from "react";

const Create = () => {    
  return (
    <>
      <main id="main" className="Main">
        <div className="pagetitle">
          <h1>Create Data Page</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">New Menu</li>
              <li className="breadcrumb-item active">Create</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Create User Form </h5>
                <form className="row g-3">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="Your Name"
                    />
                    <label htmlFor="floatingName">Your Name </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingName"
                      placeholder="Your Email"
                    />
                    <label htmlFor="floatingEmail">Email </label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      placeholder="Your Email"
                    />
                    <label htmlFor="floatingEmail">Address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingName"
                      maxLength={10}
                      placeholder="Your Phone "
                    />
                    <label htmlFor="floatingEmail">Phone Number</label>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Create;
