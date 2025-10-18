const express = require("express");
const router = express.Router();
const StructureController = require("../controllers/StructureController");

// Routes CRUD
router.get("/", StructureController.getAll);
router.get("/:id", StructureController.getById);
router.post("/", StructureController.create);
router.put("/:id", StructureController.update);
router.delete("/:id", StructureController.delete);

module.exports = router;
