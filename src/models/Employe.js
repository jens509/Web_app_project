const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Employe = sequelize.define("Employe", {
  id_employe: { type: DataTypes.INTEGER, primaryKey: true },
  nom: { type: DataTypes.STRING(25), allowNull: true },
  prenom: { type: DataTypes.STRING(50), allowNull: true },
  code: { type: DataTypes.STRING(50), allowNull: true },
  email: { type: DataTypes.STRING(255), allowNull: true },
  adresse: { type: DataTypes.STRING(255), allowNull: true },
  date_naissance: { type: DataTypes.DATEONLY, allowNull: true },
  lieu_naissance: { type: DataTypes.STRING(255), allowNull: true },
  nom_du_dependant: { type: DataTypes.STRING(255), allowNull: true },
  groupe_sanguin: { type: DataTypes.STRING(50), allowNull: true },
  telephone: { type: DataTypes.STRING(20), allowNull: true },
  etat_matrimonial: { type: DataTypes.STRING(50), allowNull: true },
  nif: { type: DataTypes.STRING(50), allowNull: true },
  ninu: { type: DataTypes.STRING(50), allowNull: true },
  type: { type: DataTypes.STRING(50), allowNull: true }
}, {
  tableName: "employe",
  timestamps: false
});

module.exports = Employe;



/*const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Employe = sequelize.define("Employe", {
  id_employe: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // PostgreSQL gère l’auto-incrément avec SERIAL
  },
  nom: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  adresse: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  date_naissance: {
    type: DataTypes.DATEONLY, // correspond à DATE dans PostgreSQL
    allowNull: true
  },
  lieu_naissance: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  nom_du_dependant: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  groupe_sanguin: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  telephone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  Etat_matrimonial: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  NIF: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  NINU: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: "employe", // correspond au nom de la table SQL
  timestamps: false     // désactive createdAt et updatedAt
});

module.exports = Employe;
*/