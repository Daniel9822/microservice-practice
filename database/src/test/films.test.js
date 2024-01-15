const supertest = require("supertest");
const app = require("../../index");
const filmModel = require("../schema/films");
const { createFilms } = require("./helpers/data");

let filmId = "";
const PATH = "/database/films";
beforeAll(async () => {
  await filmModel.deleteMany();
  const { _id } = await filmModel.create(createFilms);
  filmId = _id.toString();
}, 10000);

afterAll((done) => {
  done();
});

describe("[FILMS]", () => {
  test("I should be able to list all the films, and return them", async () => {
    const response = await supertest(app).get("/database/films");
    const {
      body: { data }
    } = response;

    expect(response.statusCode).toBe(200);
    expect(data).toHaveLength(1);
  });

  test("must be able to create a film", async () => {
    const response = await supertest(app)
      .post(PATH)
      .send({
        ...createFilms,
        title: "supertest"
      });

    const {
      body: { data }
    } = response;

    expect(response.statusCode).toBe(201);
    expect(data).toHaveProperty("title", "supertest");
    expect(data).toHaveProperty("_id", data._id);
  });

  test("must be able to properly upgrade a films", async () => {
    const title = "hi world";
    const director = "Daniel";
    const response = await supertest(app)
      .put(`${PATH}/${filmId}`)
      .send({
        ...createFilms,
        title,
        director
      });

    const {
      body: { data }
    } = response;

    expect(response.statusCode).toBe(200);
    expect(data).toHaveProperty("title", title);
    expect(data).toHaveProperty("_id", filmId);
    expect(data).toHaveProperty("director", director);
  });

  test("must be able to remove a film", async () => {
    const response = await supertest(app).delete(`${PATH}/${filmId}`);
    const {
      body: { data }
    } = response;

    const verify = await filmModel.findOne({ _id: filmId });

    expect(response.statusCode).toBe(200);
    expect(data).toHaveProperty("_id", filmId);
    expect(verify).toEqual(null);
  });
});
