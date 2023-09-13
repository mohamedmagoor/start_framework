import React from "react";
import Header from "../Header/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Input from "../Input/Input";

export default function Contact({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="contact vh-100">
        <div className="container pt-5 text-center">
          <Header header="CONTACT SECTION" />
          <div className="w-75 mx-auto">

          <div className="form-floating">

            <Input id="floatingName" type="text" placeholder="Enter Your Name" />
            <label htmlFor="floatingName">Enter Your Name</label>

          </div>
            
          <div className="form-floating">
            
            <Input  id="floatingNumber" type="number" placeholder="Enter Your Age" />
            <label htmlFor="floatingNumber">Enter Your Age</label>
            
             </div>
          <div className="form-floating">
            
            <Input  id="floatingEmail" type="email" placeholder="Enter Your Email" />
            <label htmlFor="floatingEmail">Enter Your Email</label>

             </div>
          
          <div className="form-floating">
            
            <Input  id="floatingPassword" type="password" placeholder="Enter Your Password" />
            <label htmlFor="floatingPassword">Enter Your Password</label>

             </div>
          

           

            <button type="submit" className="btn text-white px-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
