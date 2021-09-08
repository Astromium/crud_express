const Marque = require("../models/MarqueModel");
const catchAsync = require("../utils/catchAsync");
const slugify = require("slugify");

exports.getAllMarques = catchAsync(async (req, res, next) => {
  const marques = await Marque.find({});

  res.status(200).json({
    status: "success",
    marques,
  });
});

exports.getMarque = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  const marque = await Marque.find({ slug });

  res.status(200).json({
    status: "success",
    marque,
  });
});

exports.createMarque = catchAsync(async (req, res, next) => {
  const { nomMarque } = req.body;
  const marque = await Marque.create({ nomMarque });

  res.status(201).json({
    status: "success",
    message: "Marque created succesfully",
    marque,
  });
});

exports.deleteMarque = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;
  await Marque.deleteOne({ slug });

  res.status(200).json({
    status: "success",
    message: "Marque deleted",
  });
});

exports.updateMarque = catchAsync(async (req, res, next) => {
  const slug = req.params.slug;

  if (req.body.nomMarque) {
    req.body.slug = slugify(req.body.nomMarque, { lower: true });
  }

  const updatedMarque = await Marque.findOneAndUpdate({ slug }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    message: "Marque updated",
    marque: updatedMarque,
  });
});
