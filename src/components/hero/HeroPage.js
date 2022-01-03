import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getHeroById } from "../../helpers/getHeroes";
import { getImg } from "../../helpers/getImg";

export const HeroPage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => navigate(-1);

  if (!hero) return <Navigate to="/" />;

  const { alter_ego, characters, first_appearance, id, publisher, superhero } =
    hero;

  return (
    <div className="row text-white">
      <div className="col-4">
        <img
          src={getImg(id)}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3 className="fs-3">{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3 fs-5">Characters</h5>
        <p className="">{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};
