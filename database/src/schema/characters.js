const { Schema, model } = require("mongoose");

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

characterSchema.statics.insert = async function (char) {
  const data = await character.create(char);
  return data;
};

characterSchema.statics.removeItem = async function (id) {
  const data = await character.findByIdAndDelete(id);
  return data;
};

const character = model("character", characterSchema);
module.exports = character;
