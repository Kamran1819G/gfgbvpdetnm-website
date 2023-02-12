import React from "react";
import Community from "../assets/Images/community.png";

function copyLink() {
  var link = window.location.href;
  navigator.clipboard.writeText(link);
  alert("Link Copied");
}
function shareOnWhatsApp() {
  var link = window.location.href;
  window.open("https://wa.me/?text=" + link);
}

function JoinCommunity() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="gbc1"></div>
          <div className="row ">
            <div className="col-md-12 text-center">
              <h1 className="section-title">
                Join
                <span style={{ color: "var(--secondary-color)" }}>
                  {" "}
                  Community
                </span>
              </h1>
              <p className="section-subtitle">
                We are a community of students where we provide the coding
                culture for the students who are interested in Computer Science
                and other core technical competencies. We will provide you the
                opportunities to enhance your coding skills and take them to the
                next level.
              </p>
            </div>
            <ul className="list-unstyled text-center">
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#7289DA" }}
                  href="https://discord.gg/7W2SS9Ugu2"
                >
                  <i className="bi bi-discord"></i> Join Discord
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#d6249f",
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                  }}
                  href="https://www.instagram.com/gfg_bvdu_det_nm/"
                >
                  <i className="bi bi-instagram"></i> Follow Instagram
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#1DA1F2" }}
                  href="https://www.linkedin.com/company/gfg-bvdu-det-nm-chapter"
                >
                  <i className="bi bi-linkedin"></i> Follow LinkedIn
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#25D366" }}
                  href
                  onClick={shareOnWhatsApp}
                >
                  <i className="bi bi-whatsapp"></i> Share on WhatsApp
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-primary"
                  style={{ background: "#808080" }}
                  href
                  onClick={copyLink}
                >
                  <i className="bi bi-link-45deg"></i> Copy Link
                </a>
              </li>
            </ul>
            <div className="col-md-12 text-center">
              <img
                src={Community}
                alt="Community"
                style={{ width: "100%", height: "100%", filter: "contrast(200%)" }}
              />
            </div>
          </div>
          <div className="container" style={{ marginTop: "100px" }}>
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title text-center">How to join Club?</h1>
                <div className="d-flex" style={{ flex: "50%" }}>
                  <div>
                    <p>1. Go to the GeeksforGeeks website.</p>
                    <p>2. Click the "SignIn" button.</p>
                    <p>3. Then, click the "SignUp" button.</p>
                    <p>
                      4. Enter your email address and create a password for your
                      account.
                    </p>
                    <p>
                      5. Enter your college or institution name, such as
                      "Bharati Vidyapeeth (Deemed to be University) Department
                      of Engineering and Technology Navi Mumbai." If no
                      suggestions appear, leave it blank and update it through
                      your profile later.
                    </p>
                    <p>6. Finally, click the "Submit" button.</p>
                  </div>
                  <div style={{ flex: "50%" }}>
                    <img
                      src="https://i.ibb.co/0hY4Z4j/1.png"
                      alt="1"
                      border="0"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinCommunity;
