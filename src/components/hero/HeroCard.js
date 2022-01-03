import React from "react";
import { getImg } from "../../helpers/getImg";
import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero, publisher }) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="mx-auto w-auto p-1 my-4 avatar-container">
          <img src={getImg(id)} alt={superhero} className=" avatar" />
        </div>

        <div className="card-body text-center">
          <p className="fw-bold fs-6 text-primary m-0">{publisher}</p>
          <h5 className="card-title">{superhero}</h5>
          {/* <p className="card-text">{alter_ego}</p> */}

          {/* {alter_ego !== characters && (
            <p className="text-muted">{characters}</p>
          )}

          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p> */}
        </div>
        <div className="d-grid gap-2">
          <Link to={`/hero/${id}`} className="btn btn-success">
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
