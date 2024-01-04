const { Schema, model } = require("mongoose");
const { insertStatic, removeStatic, updateStatic } = require("./statics");

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

filmSchema.statics.insert = (data) => insertStatic({ model: film, data });
filmSchema.statics.removeItem = (id) => removeStatic({ model: film, id });
filmSchema.statics.update = ({ id, data }) =>
  updateStatic({ model: film, data, id });

const film = model("film", filmSchema);
module.exports = film;
