const supertest = require("supertest");
const app = require("../../index");
const characterModel = require("../schema/characters");
const { createCharacter } = require("./helpers/data");

const PATH = "/database/characters";
let userId = "";

beforeAll(async () => {
  await characterModel.deleteMany();
  const { _id } = await characterModel.create(createCharacter);
  userId = _id.toString();
}, 10000);

afterAll((done) => {
  done();
});

describe("[CHARACTERS]", () => {
  test("I should be able to list all the characters, and return them", async () => {
    const response = await supertest(app).get(PATH);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveLength(1);
  });

  test("must be able to create a character", async () => {
    const response = await supertest(app).post(PATH).send(createCharacter);

    expect(response.statusCode).toBe(201);
    expect(response.body.data).toHaveProperty("_id");
    expect(response.body.data).toHaveProperty("name", createCharacter.name);
  });

  test("must be able to properly upgrade a character", async () => {
    const response = await supertest(app)
      .put(`${PATH}/${userId}`)
      .send({
        ...createCharacter,
        name: "supertest"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty("name", "supertest");
  });

  test("must be able to remove a character", async () => {
    const response = await supertest(app).delete(`${PATH}/${userId}`);
    const verify = await characterModel.findOne({ _id: userId });

    expect(verify).toEqual(null);
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty("name", "supertest");
    expect(response.body.data).toHaveProperty("_id", userId);
  });
});
