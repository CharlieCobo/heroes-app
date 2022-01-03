import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { parse } from "query-string";
import { HeroCard } from "../hero/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../helpers/getHeroes";

export const SearchPage = () => {
  const [heroes, setHeroes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = parse(location.search);

  const [{ term }, handleInputChange] = useForm({
    term: q,
  });

  useEffect(() => {
    if (term) {
      const heroesFiltered = getHeroesByName(term);

      setHeroes(heroesFiltered);
    }
  }, [term]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${term}`);

    const heroesFiltered = getHeroesByName(term);

    setHeroes(heroesFiltered);
  };

  return (
    <main className="pb-4 text-white">
      <h1 className="fs-2 fw-bold">Search Page</h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-5 mb-3">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="term"
              autoComplete="off"
              onChange={handleInputChange}
              value={term}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search now...
            </button>
          </form>
        </div>

        <div className="col-12 col-md-7">
          {q === "" ? (
            <div className="alert alert-info">Serch Hero</div>
          ) : (
            heroes.length < 1 && (
              <div className="alert alert-danger">No heroes</div>
            )
          )}

          <div className="row gy-3">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
