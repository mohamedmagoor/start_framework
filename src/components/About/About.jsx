import React from "react";
import Header from "../Header/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function About({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="about vh-100">
        <div className="container pt-5 text-center">
          <Header header="ABOUT COMPONENT" />
          <div className="row g-4 text-start">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
