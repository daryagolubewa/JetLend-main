'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    paternity_name: DataTypes.STRING,
    date_birth: DataTypes.DATE,
    passport_number: DataTypes.INTEGER,
    organization: DataTypes.STRING,
    release_date: DataTypes.DATE,
    tax_number: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    borrower_id: DataTypes.INTEGER,
    is_scored: DataTypes.BOOLEAN
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.Borrower, {foreignKey: "borrower_id"})
  };
  return Profile;
};