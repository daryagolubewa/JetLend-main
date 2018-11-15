'use strict';
module.exports = (sequelize, DataTypes) => {
  const Loan = sequelize.define('Loan', {
    lender_id: DataTypes.INTEGER,
    date_give: DataTypes.DATE,
    amount_give: DataTypes.INTEGER,
    status: DataTypes.STRING,
    date_return: DataTypes.DATE
  }, {});
  Loan.associate = function(models) {
        Loan.belongsTo(models.Lender , {foreignKey: "lender_id"})

        Loan.hasMany(models.Credit, { foreignKey: "loan_id" }) 
  };
  return Loan;
};