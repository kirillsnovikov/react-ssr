'use strict';
module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    title: DataTypes.STRING
  }, {});
  Form.associate = function(models) {
    // associations can be defined here
  };
  return Form;
};