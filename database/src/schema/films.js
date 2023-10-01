const { Schema, model } = require("mongoose");

const filmSchema = new Schema(
  {
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{ type: String, ref: "character" }],
    planets: [{ type: String, ref: "planet" }]
  },
  {
    timestamps: true
  }
);

filmSchema.statics.list = async function () {
  const data = await film.find().populate("characters").populate("planets");
  return data;
};

filmSchema.statics.insert = async function (data) {
  const create = await film.create(data);
  return create;
};

filmSchema.statics.removeItem = async function (id) {
  const remove = await film.findByIdAndRemove(id);
  return remove;
};

const film = model("film", filmSchema);
module.exports = film;
