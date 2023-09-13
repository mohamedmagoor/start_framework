import React from "react";
import myImage from "../../assets/avataaars.svg";
import Header from "../Header/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="home vh-100">
        <div className="container pt-5 text-center">
          <img src={myImage} alt="avatar" className="avatar" />
          <Header header="START FRAMEWORK" />
          <p style={{ fontSize: "13px" }}>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
}
