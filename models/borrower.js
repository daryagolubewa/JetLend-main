'use strict';
module.exports = (sequelize, DataTypes) => {
  const Borrower = sequelize.define('Borrower', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    file_name: DataTypes.STRING,
    password: DataTypes.STRING
    // active:DotaTypes.BOOLEAN
  }, {});
  Borrower.associate = function(models) {
    Borrower.hasOne(models.Profile, { foreignKey: "borrower_id"})
    Borrower.hasMany(models.CreditRequest, { foreignKey: "borrower_id" }) 
  };

  Borrower.checkUser = async (name, userEmail, userPassword) => {
    let arrOfUsers = await Borrower.findAll({
      where: {
        name: name,
        email: userEmail,

        password: userPassword
      }
    })
    return arrOfUsers
  }

  Borrower.getEmail = async (email) => {
    return await Borrower.findAll({
      where: {
        email:email
      }
    })
  }
  Borrower.getPhone = async (phone) => {
    return await Borrower.findAll({
      where: {
        phone:phone
      }
    })
  }
  return Borrower;
};