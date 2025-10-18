const express = require("express");
const router = express.Router();
const employeController = require("../controllers/employeController");

// Routes CRUD
router.get("/", employeController.getAll);
router.post("/", employeController.create);
router.get("/:id", employeController.getById);
router.put("/:id", employeController.update);
router.delete("/:id", employeController.delete);

module.exports = router;

