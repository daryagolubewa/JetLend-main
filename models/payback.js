'use strict';
module.exports = (sequelize, DataTypes) => {
  const PayBack = sequelize.define('PayBack', {
    credit_request_id: DataTypes.INTEGER,
    amount_part: DataTypes.INTEGER,
    date_return: DataTypes.DATE
  }, {});
  PayBack.associate = function(models) {

PayBack.belongsTo(models.CreditRequest, {foreignKey: "credit_request_id"})


  };
  return PayBack;
};