const { Schema, model } = require("mongoose");
const { insertStatic, removeStatic, updateStatic } = require("./statics");

const characterSchema = new Schema(
  {
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "planet" },
    films: [{ type: String, ref: "film" }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

characterSchema.statics.list = async function () {
  const data = await character.find().populate("homeworld").populate("films");
  return data;
};

characterSchema.statics.insert = (data) =>
  insertStatic({ model: character, data });
characterSchema.statics.removeItem = (id) =>
  removeStatic({ model: character, id });
characterSchema.statics.update = ({ data, id }) =>
  updateStatic({ model: character, data, id });

const character = model("character", characterSchema);
module.exports = character;
