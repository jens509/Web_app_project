const express = require("express");
const router = express.Router();
const BACController = require("../controllers/BACController");

// Routes CRUD
router.get("/", BACController.getAll);
router.get("/:id", BACController.getById);
router.post("/", BACController.create);
router.put("/:id", BACController.update);
router.delete("/:id", BACController.delete);

module.exports = router;
