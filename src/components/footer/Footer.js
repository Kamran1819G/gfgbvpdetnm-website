import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import CreatorCard from "./CreatorCard";
import "./Footer.css";
import Kamran from "../../assets/ExecutiveMembers/Kamran.jpg";
import Khushi from "../../assets/ExecutiveMembers/Khushi.jpg";
function Footer() {
  return (
    <>
      <footer>
        <div className="main-footer container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="footer-container d-flex flex-wrap justify-content-evenly text-center">
                <div className="col-lg-3">
                  <h3>Follow Us</h3>
                  <ul className="social-links list-unstyled text-center pt-4">
                    <li className="list-inline-item">
                      <a href="https://github.com/kamran1819g">
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/kamran1819g">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/kamran1819g">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h3>Contact Us</h3>
                  <ul className="contact-list list-unstyled">
                    <li className="list-item">
                      <i className="bi bi-envelope"></i>
                      <a href="mailto:geeksforgeeksbvudetnm@gmail.com">
                        geeksforgeeksbvudetnm@gmail.com
                      </a>
                    </li>
                    <li className="list-item">
                      <i className="bi bi-phone"></i>
                      <a href="tel:+91 99999 88888">
                        +91 99999 88888 / +91 77777 66666
                      </a>
                    </li>
                    <li className="list-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <a href="https://goo.gl/maps/6Z5Z1Z1Z1Z1Z1Z1Z9">
                        Bharati Vidyapeeth College of Engineering and
                        Technology,
                        <br /> Off-Campus Navi Mumbai, Kharghar (400 000)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3>Made By</h3>
                  <Carousel className="footer-carousel" fade indicators={false}>
                    <Carousel.Item>
                          <CreatorCard
                            img={Kamran}
                            title="Kamran  Khan"
                            role="Frontend Developer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Khushi}
                            title="Khushi"
                            role="Role"
                          />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="copyright text-center">
                <p>
                  &copy; All rights reserved by
                  <NavLink to="#"> GFG BVDUDET-NM</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
