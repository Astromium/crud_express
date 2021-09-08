const express = require("express");
const {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/produitController");

//const { protect } = require("../controllers/authController");

const router = express.Router();

router.route("/").post(createProduct);
router.route("/getAllProducts").get(getAllProducts);
router.route("/getProduct/:slug").get(getProduct);
router.route("/updateProduct/:slug").patch(updateProduct);
router.route("/deleteProduct/:slug").delete(deleteProduct);

module.exports = router;
