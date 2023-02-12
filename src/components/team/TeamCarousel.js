import React from "react";
import { Carousel } from "react-bootstrap";
import CoreTeam from "../../assets/CoreMembers/CoreTeam.jpeg";
import eventpic1 from "../../assets/Events/event_pic1.jpg";
import eventpic2 from "../../assets/Events/event_pic2.jpg";

function TeamCarousel() {
  return (
    <>
      <section className="section" style={{paddingTop: "0px"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5 col-lg-9 w-100vw">
              <Carousel fade>
                <Carousel.Item>
                  <img src={CoreTeam} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Core Team Members</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={eventpic2} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={eventpic1} className="d-block w-100" alt="..." />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCarousel;
