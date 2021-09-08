const mongoose = require("mongoose");
const slugify = require("slugify");

const produitSchema = new mongoose.Schema({
  nomProduit: {
    type: String,
    required: true,
  },
  slug: String,
  idMarque: {
    type: Number,
    required: true,
  },
});

produitSchema.pre("save", async function (next) {
  this.slug = slugify(this.nomProduit, { lower: true });

  next();
});

const Produit = mongoose.model("Produit", produitSchema);

module.exports = Produit;
