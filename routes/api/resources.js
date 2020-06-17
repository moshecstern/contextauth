const router = require("express").Router();
const resourceController = require("../../controllers/resourcesController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

router.route("/all").get(resourceController.getAll);
router.route("/catagory/:catagory").get(resourceController.getbycatagory);
router.route("/catagory/:catagory").put(jwtVerify.confirmToken, jwtVerify.verifyToken, resourceController.editbycatagory);
router.route("/catagory/:catagory").post(jwtVerify.confirmToken, jwtVerify.verifyToken, resourceController.createbycatagory);
router.route("/:id").delete(jwtVerify.confirmToken, jwtVerify.verifyToken, resourceController.deletebyid);


module.exports = router;