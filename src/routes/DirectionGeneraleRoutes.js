const express = require("express");
const router = express.Router();
const DirectionGeneraleController = require("../controllers/DirectionGeneraleController");

// Routes CRUD
router.get("/", DirectionGeneraleController.getAll);
router.get("/:id", DirectionGeneraleController.getById);
router.post("/", DirectionGeneraleController.create);
router.put("/:id", DirectionGeneraleController.update);
router.delete("/:id", DirectionGeneraleController.delete);

module.exports = router;
