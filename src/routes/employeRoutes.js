const express = require("express");
const router = express.Router();
const employeController = require("../controllers/employeController");
const verifyToken = require("../middlewares/AuthMiddleware");
const { isAdmin, isManager, hasRole } = require("../middlewares/RoleMiddleware");

//  Accessible à tous les utilisateurs connectés
router.get("/", verifyToken, employeController.getAll);
router.get("/:id", verifyToken, employeController.getById);

// Accessible uniquement à l’admin
router.post("/", verifyToken, isAdmin, employeController.create);
router.put("/:id", verifyToken, isAdmin, employeController.update);
router.delete("/:id", verifyToken, isAdmin, employeController.delete);

// Exemple : route réservée aux managers OU admins
router.get("/rapport/mois", verifyToken, hasRole("admin", "manager"), (req, res) => {
  res.json({ message: "Rapport mensuel accessible" });
});

module.exports = router;


