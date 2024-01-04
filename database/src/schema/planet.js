const { Schema, model } = require("mongoose");
const { updateStatic, insertStatic, removeStatic } = require("./statics");

const planetSchema = new Schema(
  {
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: Array,
    films: [{ type: String, ref: "film" }]
  },
  {
    timestamps: true
  }
);

planetSchema.statics.list = async function () {
  const data = await planet.find().populate("films");
  return data;
};

planetSchema.statics.insert = (data) => insertStatic({ model: planet, data });
planetSchema.statics.removeItem = (id) => removeStatic({ model: planet, id });
planetSchema.statics.update = ({ data, id }) =>
  updateStatic({ model: planet, data, id });

const planet = model("planet", planetSchema);

module.exports = planet;
