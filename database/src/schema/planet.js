const { Schema, model } = require("mongoose")

const planetSchema = new Schema(
  {
    _id: String,
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
)

planetSchema.statics.list = async function () {
  const data = await planet.find().populate("films")
  return data
}

planetSchema.statics.insert = async function (data) {
  const create = await planet.create(data)
  return create
}

const planet = model("planet", planetSchema)

module.exports = planet
