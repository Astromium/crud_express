const express = require("express");
const {
  getAllMarques,
  getMarque,
  updateMarque,
  deleteMarque,
  createMarque,
} = require("../controllers/marqueController");

const router = express.Router();

router.route("/").post(createMarque);
router.route("/getAllMarques").get(getAllMarques);
router.route("/getMarque/:slug").get(getMarque);
router.route("/updateMarque/:slug").patch(updateMarque);
router.route("/deleteMarque/:slug").delete(deleteMarque);

module.exports = router;
