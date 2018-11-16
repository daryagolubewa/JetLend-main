'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lender = sequelize.define('Lender', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    passport_number: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Lender.associate = function(models) {
   Lender.hasMany(models.Loan, { foreignKey: "lender_id" }) 
  };
  return Lender;
};