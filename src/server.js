require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/sequelize"); // ✅ import direct

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connexion à PostgreSQL réussie");
    app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
  } catch (err) {
    console.error("❌ Impossible de se connecter à la base :", err.message);
    process.exit(1);
  }
})();
