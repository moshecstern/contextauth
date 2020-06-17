const router = require("express").Router();
const resourcesRoutes = require("./resources");
const applicationRoutes = require("./application");

// routes
router.use("/resources", resourcesRoutes);
router.use("/application", applicationRoutes);

module.exports = router;