import React from "react";
import "./PastEvents.css";
import { Carousel } from "3d-react-carousal";
import autorun from "../../../assets/Events/autorun.png";
// npm install 3d-react-carousal --force

const PastEvents = () => {
  let slides = [
    <img src={autorun} style={{ width: "350px" }} alt="1" />,
    <img src={autorun} style={{ width: "350px" }} alt="2" />,
    <img src={autorun} style={{ width: "350px" }} alt="3" />,
    <img src={autorun} style={{ width: "350px" }} alt="4" />,
    <img src={autorun} style={{ width: "350px" }} alt="5" />,
    <img src={autorun} style={{ width: "350px" }} alt="6" />,
    <img src={autorun} style={{ width: "350px" }} alt="7" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };

  return (
    <section className="section h-100vh" id="pastevent">
      <div className="container">
        <div className="gbc2"></div>
        <div className="row">
          <div className="text-center">
            <h2 className="section-title">
              Our{" "}
              <span style={{ color: "var(--secondary-color)" }}>Past</span>{" "}
              Events
            </h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="carousal">
            {" "}
            <Carousel
              slides={slides}
              interval={1000}
              onSlideChange={callback}
            />
          </div>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />          
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
