import React from "react";

export default function Header({ header }) {
  return (
    <div className="mt-4">
      <h1 className="h2 fw-bold">{header}</h1>
      <div className="d-flex align-items-center justify-content-center my-2">
        <div className="line my-3"></div>
        <i className="fa-solid fa-star mx-3 fs-6"></i>
        <div className="line"></div>
      </div>
    </div>
  );
}
