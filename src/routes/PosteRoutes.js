const express = require("express");
const router = express.Router();
const PosteController = require("../controllers/PosteController");

// Routes CRUD
router.get("/", PosteController.getAll);
router.get("/:id", PosteController.getById);
router.post("/", PosteController.create);
router.put("/:id", PosteController.update);
router.delete("/:id", PosteController.delete);

module.exports = router;
