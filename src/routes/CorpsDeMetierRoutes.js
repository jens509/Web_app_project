const express = require("express");
const router = express.Router();
const CorpsDeMetierController = require("../controllers/CorpsDeMetierController");

// Routes CRUD
router.get("/", CorpsDeMetierController.getAll);
router.get("/:id", CorpsDeMetierController.getById);
router.post("/", CorpsDeMetierController.create);
router.put("/:id", CorpsDeMetierController.update);
router.delete("/:id", CorpsDeMetierController.delete);

module.exports = router;
