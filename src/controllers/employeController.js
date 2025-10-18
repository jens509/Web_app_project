const { Employe } = require("../models");

const employeController = {
getAll: async (req, res, next) => {
  try {
    const data = await Employe.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
},

getById: async (req, res, next) => {
  try {
    const item = await Employe.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Employé introuvable" });
    res.json(item);
  } catch (err) {
    next(err);
  }
},

create: async (req, res, next) => {
  try {
    const item = await Employe.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
},

update: async (req, res, next) => {
  try {
    const item = await Employe.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Employé introuvable" });
    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
},

delete: async (req, res, next) => {
  try {
    const item = await Employe.findByPk(req.params.id);
    if (!item) return res.status(404).json({ message: "Employé introuvable" });
    await item.destroy();
    res.json({ message: "Employé supprimé avec succès" });
  } catch (err) {
    next(err);
  }
}
};

module.exports = employeController;
/*const { Employe } = require("../models");

// Récupérer tous les employés
exports.getAll = async (req, res) => {
  try {
    const employes = await Employe.findAll();
    res.json(employes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un employé
exports.create = async (req, res) => {
  try {
    const employe = await Employe.create(req.body);
    res.status(201).json(employe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un employé par ID
exports.getById = async (req, res) => {
  try {
    const employe = await Employe.findByPk(req.params.id);
    if (!employe) return res.status(404).json({ message: "Employé introuvable" });
    res.json(employe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un employé
exports.update = async (req, res) => {
  try {
    const employe = await Employe.findByPk(req.params.id);
    if (!employe) return res.status(404).json({ message: "Employé introuvable" });

    await employe.update(req.body);
    res.json(employe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un employé
exports.delete = async (req, res) => {
  try {
    const employe = await Employe.findByPk(req.params.id);
    if (!employe) return res.status(404).json({ message: "Employé introuvable" });

    await employe.destroy();
    res.json({ message: "Employé supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

*/
