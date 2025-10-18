const express = require("express");
const router = express.Router();
const ServiceController = require("../controllers/ServiceController");

// Routes CRUD
router.get("/", ServiceController.getAll);
router.get("/:id", ServiceController.getById);
router.post("/", ServiceController.create);
router.put("/:id", ServiceController.update);
router.delete("/:id", ServiceController.delete);

module.exports = router;
