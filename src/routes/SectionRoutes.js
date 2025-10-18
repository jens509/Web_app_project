const express = require("express");
const router = express.Router();
const SectionController = require("../controllers/SectionController");

// Routes CRUD
router.get("/", SectionController.getAll);
router.get("/:id", SectionController.getById);
router.post("/", SectionController.create);
router.put("/:id", SectionController.update);
router.delete("/:id", SectionController.delete);

module.exports = router;
