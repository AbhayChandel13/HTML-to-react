import React from "react";

const Create = () => {
  const responseBody = {};

  let job = {
    jobTitle: "JavaScript Developer",
    location: "USA",
  };

  const inputChangeHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, property) => (responseBody[property] = value));
    console.log(JSON.stringify(responseBody));

    let newhoonmain = { ...responseBody, ...job };
    console.log("This is the New Object :", newhoonmain);
    //console.log(responseBody);
  };
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
                {/* <form className="row g-3">
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
                </form> */}

                {/* <form onSubmit={onSubmitHandler}>
            <div><label htmlFor="first_name">First Name</label></div>
            <div><input id="first_name" ref={inputFirstName} type="text"/></div>
            <div><label htmlFor="last_name">Last Name</label></div>
            <div><input id="last_name" ref={inputLastName} type="text"/></div>
            <div><label htmlFor="age">Age</label></div>
            <div><input id="age" ref={inputAge} type="number"/></div>
            <input type="submit"/>
        </form> */}

                <form onSubmit={inputChangeHandler}>
                  <div>
                    <label htmlFor="firstName">First Name</label>
                  </div>
                  <div>
                    <input id="firstName" name="firstName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                  </div>
                  <div>
                    <input id="lastName" name="lastName" type="text" />
                  </div>
                  <div>
                    <label htmlFor="age">Age</label>
                  </div>
                  <div>
                    <input id="age" name="age" type="number" />
                  </div>
                  <input type="submit" />
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
