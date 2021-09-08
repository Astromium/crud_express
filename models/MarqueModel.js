const mongoose = require("mongoose");
const slugify = require("slugify");

const marqueSchema = new mongoose.Schema({
  nomMarque: {
    type: String,
    required: true,
  },
  slug: String,
  idMarque: Number,
});

marqueSchema.pre("save", async function (next) {
  if (this.isNew) {
    // id sequentiel
    const marques = await Marque.find({});
    this.idMarque = marques.length + 1;

    this.slug = slugify(this.nomMarque, { lower: true });
  }

  next();
});

const Marque = mongoose.model("Marque", marqueSchema);

module.exports = Marque;
