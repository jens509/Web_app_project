const express = require("express");
const router = express.Router();
const DirectionController = require("../controllers/DirectionController");

// Routes CRUD
router.get("/", DirectionController.getAll);
router.get("/:id", DirectionController.getById);
router.post("/", DirectionController.create);
router.put("/:id", DirectionController.update);
router.delete("/:id", DirectionController.delete);

module.exports = router;
