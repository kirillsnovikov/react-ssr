import Sequelize, { Model } from 'sequelize';

class Form extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING
        }
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Form;

// export const model = (sequelize, DataTypes) => {
//   const Form = sequelize.define(
//     'Form',
//     {
//       title: DataTypes.STRING
//     },
//     {}
//   );
//   Form.associate = function(models) {
//     // associations can be defined here
//   };
//   return Form;
// };
