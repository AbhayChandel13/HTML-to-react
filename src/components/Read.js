import React, { useState, useEffect } from "react";

const Read = () => {
  const [getdata, setData] = useState([]);

  const getuser = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  return (
    <>
      <main id="main" className="Main">
        <div className="pagetitle">
          <h1>Read Data Page</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">New Menu</li>
              <li className="breadcrumb-item active">Read</li>
            </ol>
          </nav>
        </div>
        <h1> You Are On The Read Me Page</h1>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {getdata.map((data) => (
            <tbody key={data.id}>
              <tr>
                <td>{data.id} </td>
                <td>{data.name} </td>
                <td>{data.email} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </main>
    </>
  );
};

export default Read;
