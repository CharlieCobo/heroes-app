import { heroes, validPublishers } from "../data/heroes";

export const getHeroById = (id = "") => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByPublisher = (publisher) => {
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroesByName = (name = "") => {
  if (name === "") return [];

  name = name.toLowerCase();

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
