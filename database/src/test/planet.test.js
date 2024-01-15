const supertest = require("supertest");
const app = require("../../index");
const planetModel = require("../schema/planet");
const { createPlanet } = require("./helpers/data");

let planetId = "";
const PATH = "/database/planet";
beforeAll(async () => {
  await planetModel.deleteMany();
  const { _id } = await planetModel.create(createPlanet);
  planetId = _id.toString();
}, 10000);

afterAll((done) => {
  done();
});

describe("[PLANETS]", () => {
  test("I should be able to list all the planets, and return them", async () => {
    const response = await supertest(app).get(PATH);

    const {
      body: { data }
    } = response;
    expect(response.statusCode).toBe(200);
    expect(data).toHaveLength(1);
  });

  test("must be able to create a character", async () => {
    const response = await supertest(app)
      .post(PATH)
      .send({
        ...createPlanet,
        name: "supertest"
      });

    const {
      body: { data }
    } = response;

    expect(response.statusCode).toBe(201);
    expect(data).toHaveProperty("name", "supertest");
    expect(data).toHaveProperty("_id");
  });

  test("must be able to properly upgrade a character", async () => {
    const name = "Dani";
    const climate = "tropical";
    const response = await supertest(app)
      .put(`${PATH}/${planetId}`)
      .send({
        ...createPlanet,
        name,
        climate
      });

    const {
      body: { data }
    } = response;

    expect(response.statusCode).toBe(200);
    expect(data).toHaveProperty("_id", planetId);
    expect(data).toHaveProperty("name", name);
    expect(data).toHaveProperty("climate", climate);
  });

  test("must be able to remove a character", async () => {
    const response = await supertest(app).delete(`${PATH}/${planetId}`);

    const {
      body: { data }
    } = response;

    const check = await planetModel.findOne({ _id: planetId });

    expect(response.statusCode).toBe(200);
    expect(data).toHaveProperty("_id", planetId);
    expect(check).toEqual(null);
  });
});
