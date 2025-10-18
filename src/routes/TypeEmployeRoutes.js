const express = require("express");
const router = express.Router();
const TypeEmployeController = require("../controllers/TypeEmployeController");

// Routes CRUD
router.get("/", TypeEmployeController.getAll);
router.get("/:id", TypeEmployeController.getById);
router.post("/", TypeEmployeController.create);
router.put("/:id", TypeEmployeController.update);
router.delete("/:id", TypeEmployeController.delete);

module.exports = router;
