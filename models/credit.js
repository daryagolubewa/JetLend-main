'use strict';
module.exports = (sequelize, DataTypes) => {
  const Credit = sequelize.define('Credit', {
    credit_request_id: DataTypes.INTEGER,
    loan_id: DataTypes.INTEGER,
    date_cred: DataTypes.DATE,
    amount_cred: DataTypes.INTEGER,
    agriment: DataTypes.STRING
  }, {});
  Credit.associate = function(models) {
   Credit.belongsTo(models.CreditRequest, {foreignKey: "credit_request_id"})
   Credit.belongsTo(models.Loan, {foreignKey: "loan_id"})
  };
  return Credit;
};