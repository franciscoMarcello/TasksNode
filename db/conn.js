const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("Conectamos ao banco de dados");
} catch (error) {
  console.log(`Não foi possivel conectar:${error}`);
}

module.exports = sequelize;
