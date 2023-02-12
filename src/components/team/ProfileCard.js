import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <>
    <div className="col-lg-3 ml-auto mr-auto">
      <div className="custom-card card text-center">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.role}
          </p>
          <a href={props.url} target="_blank" rel="noreferrer" className="connect-button btn">
            Connect
          </a>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProfileCard;