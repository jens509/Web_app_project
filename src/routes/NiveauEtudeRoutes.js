const express = require("express");
const router = express.Router();
const NiveauEtudeController = require("../controllers/NiveauEtudeController");

// Routes CRUD
router.get("/", NiveauEtudeController.getAll);
router.get("/:id", NiveauEtudeController.getById);
router.post("/", NiveauEtudeController.create);
router.put("/:id", NiveauEtudeController.update);
router.delete("/:id", NiveauEtudeController.delete);

module.exports = router;
