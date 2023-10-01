require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;
// const character = process.env.CHARACTERS;
// const planets = process.env.PLANETS;
// const films = process.env.films;

const routeEnv = {
  character: process.env.CHARACTERS,
  planets: process.env.PLANETS,
  films: process.env.films
};

if (NODE_ENV === "development") {
  for (const key in routeEnv) {
    routeEnv[key] = routeEnv[key].replace(/\/\/[^:]+:/, "//localhost:");
  }
}

console.log(routeEnv);

module.exports = routeEnv;
