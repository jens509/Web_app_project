const express = require("express");
const router = express.Router();
const CoordinationController = require("../controllers/CoordinationController")

// Routes CRUD
router.get("/", CoordinationController.getAll);
router.get("/:id", CoordinationController.getById);
router.post("/", CoordinationController.create);
router.put("/:id", CoordinationController.update);
router.delete("/:id", CoordinationController.delete);

module.exports = router;

