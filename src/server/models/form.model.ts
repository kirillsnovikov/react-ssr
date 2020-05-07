import { Model, STRING, INTEGER } from 'sequelize';
import { sequelize } from './index';

// export interface FormAddModel {
//   title: string;
// }

export interface FormModel {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

// export interface FormModel extends Sequelize.Model<FormModel, FormAddModel>

// export interface FormViewModel {
//   id: number;
//   title: string;
// }

export class Form extends Model<FormModel> implements FormModel {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

Form.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    title: {
      type: STRING,
    },
  },
  { sequelize }
);

// ('form', {
//   id: {
//     type: INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   title: {
//     type: STRING,
//   },
// });
