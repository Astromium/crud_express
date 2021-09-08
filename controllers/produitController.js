const Produit = require("../models/ProduitModel");
const catchAsync = require("../utils/catchAsync");
const slugify = require("slugify");

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Produit.find({});

  res.status(200).json({
    status: "success",
    produits: products,
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  const product = await Produit.find({ slug });

  res.status(200).json({
    status: "success",
    produit: product,
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const { nomProduit, idMarque } = req.body;
  const product = await Produit.create({ nomProduit, idMarque });

  res.status(201).json({
    status: "success",
    message: "Product created succesfully",
    produit: product,
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  await Produit.deleteOne({ slug });

  res.status(200).json({
    status: "success",
    message: "Product deleted",
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  console.log(req.params.slug);
  const slug = req.params.slug;

  if (req.body.nomProduit) {
    req.body.slug = slugify(req.body.nomProduit, { lower: true });
  }

  const updatedProduct = await Produit.findOneAndUpdate({ slug }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    message: "Product updated",
    produit: updatedProduct,
  });
});
