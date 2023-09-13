import React from "react";

export default function Footer() {
  const pStyle = { fontSize: "13px" };

  return (
    <>
      <div className="info py-5 text-white">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <h3 className="h5">LOCATION</h3>
              <p style={pStyle}>2215 John Daniel Drive</p>
              <p style={pStyle}>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
              <h3 className="h5">AROUND THE WEB</h3>
              <div className="social">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter mx-3"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h3 className="h5">ABOUT FREELANCER</h3>
              <p style={pStyle}>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center text-white">
        <p className="py-3 m-0" style={pStyle}>
          Copyright © Your Website 2021
        </p>
      </div>
    </>
  );
}
