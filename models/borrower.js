'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('Borrower', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    file_name: DataTypes.STRING
  }, {});
  Borrower.associate = function(models) {

  Borrower.hasMany(models.CreditRequest, { as: "borrower_id" }) 

  };
  return Borrower;
};