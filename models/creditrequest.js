'use strict';
module.exports = (sequelize, DataTypes) => {
  const CreditRequest = sequelize.define('CreditRequest', {
    borrower_id: DataTypes.INTEGER,
    amount_req: DataTypes.INTEGER,
    date_req: DataTypes.DATE,
    status: DataTypes.STRING,
    date_done: DataTypes.DATE
  }, {});
  CreditRequest.associate = function(models) {

    CreditRequest.belongsTo(models.Borrower, { foreignKey: "borrower_id"})

    CreditRequest.hasMany(models.Credit, { foreignKey: "credit_request_id" }) 

    CreditRequest.hasMany(models.PayBack, { foreignKey: "credit_request_id"}) 
  };
  return CreditRequest;
};