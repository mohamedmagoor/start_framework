import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import notfound from "../../assets/not found.jpg"


export default function NotFound({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container py-5">
         <div className="notFound w-50 mx-auto">
        <img src={notfound} alt="not found" />
      </div>
      </div>
    </HelmetProvider>
  );
}
