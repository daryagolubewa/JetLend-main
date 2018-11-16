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

   Lender.checkUser = async (name, userEmail, userPassword) => {
    let arrOfUsers = await  Lender.findAll({
      where: {
        name: name,
        email: userEmail,
        password: userPassword
      }
    })
    return arrOfUsers
  }

   Lender.getEmail = async (email) => {
    return await  Lender.findAll({
      where: {
        email:email
      }
    })
  }
   Lender.getPhone = async (phone) => {
    return await  Lender.findAll({
      where: {
        phone:phone
      }
    })
  }
  return  Lender;
};