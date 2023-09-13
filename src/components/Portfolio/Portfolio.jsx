import React from "react";
import Header from "../Header/Header";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Image from "../Image/Image";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Portfolio({ title }) {
  const [imageClicked, setImageClicked] = useState(false);
  const [image, setImage] = useState("");

  function showImage(image) {
    setImage(image);
    setImageClicked((clicked) => !clicked);
  }

  function hideImage(e) {
    if (!e.src) {
      setImageClicked((clicked) => !clicked);
      setImage("");
    }
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="portfolio min-vh-100">
        {imageClicked ? (
          <div
            className="position-fixed d-flex justify-content-center align-items-center top-0 start-0 h-100 w-100 z-3 bg-black bg-opacity-50"
            onClick={(e) => hideImage(e.target)}>
            <div className="overflow-hidden" style={{ width: "500px" }}>
              <img src={image} alt="portfolio" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="container pt-5 text-center">
          <Header header="PORTFOLIO COMPONENT" />
          <div className="row g-4 mb-5">
            {[image1, image2, image3, image1, image2, image3].map(
              (image, index) => (
                <Image image={image} showImage={showImage} key={index} />
              )
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Portfolio;
