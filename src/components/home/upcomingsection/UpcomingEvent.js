import React from "react";
import "./UpcomingEvent.css";
import autorun from "../../../assets/Events/autorun.png";
import TimeStamp from "./TimeStamp";

const UpcomingEvent = () => {
  return (
    <>
      <section className="section h-100vh" id="upcomingevents">
        <div className="container">
          <div className="bbc1"></div>
          <div className="row">
            <div className="text-center">
              <h2 className="section-title">
                Our{" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  Upcomming
                </span>{" "}
                Events
              </h2>
              <p className="section-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-around mx-auto">
            <TimeStamp
              img={autorun}
              title="12 jan 2021"
              url="https://www.google.com"
            />
            <TimeStamp
              img={autorun}
              title="15 Nov 2022"
              url="https://www.google.com"
            />
            <TimeStamp
              img={autorun}
              title="Yet to be decided"
              url="https://www.google.com"
            />
          </div>
        </div>
        <div className="bar"></div>
      </section>
    </>
  );
};

export default UpcomingEvent;
