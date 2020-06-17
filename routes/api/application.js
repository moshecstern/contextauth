const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// Matches with "/api/application"
router.route("/")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, applicationController.findAll)
  .post(applicationController.create);

// Matches with "/api/application/:id"
router
  .route("/:id")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, applicationController.findById)
  .put(jwtVerify.confirmToken, jwtVerify.verifyToken, applicationController.update)
  .delete(jwtVerify.confirmToken, jwtVerify.verifyToken, applicationController.remove);

module.exports = router;