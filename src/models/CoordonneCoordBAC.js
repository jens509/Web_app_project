const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const CoordonneCoordBAC = sequelize.define("coordonneCoordBAC", {
  id_coordination: { type: DataTypes.INTEGER, primaryKey: true, field: "id_coordination" },   
  id_bac: { type: DataTypes.INTEGER, primaryKey: true, field: "id_bac" }
}, {
  tableName: "coordonne_coord_bac",
  timestamps: false
});

module.exports = CoordonneCoordBAC;
