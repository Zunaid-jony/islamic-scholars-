import React, { useEffect, useState } from "react";

import Footer from "../Footer/Footer";

const getDatafromLS = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Scholar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getDatafromLS());
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-center mt-5"> 🆂🅲🅷🅾🅻🅰🆁 🆂🅲🅷🅴🅳🆄🅻🅴</h2>
      {/* <div style={{width:'100px'}} className="container mt-5 mb-5">
            
            <Calendar onChange={onChange} value={date}></Calendar>

        </div> */}

      <div className="container mt-5 mb-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SCHOLAR</th>
              <th>DATE</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>DELETE</th>
            </tr>

            {data ? (
              data.map((d) => (
                <tr>
                
                  <td>{d.schol}</td>
                  <td>{d.isbn}</td>
                  <td>{d.title}</td>
                  <td>{d.author}</td>
                  <td>Delete</td>
                </tr>
              ))
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </thead>
        </table>
      </div>

      {/* <Services></Services> */}
      <Footer></Footer>
    </div>
  );
};

export default Scholar;
