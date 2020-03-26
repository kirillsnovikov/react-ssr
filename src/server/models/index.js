// import fs from 'fs';
// import path from 'path';
// import paths from '../../../build/paths';
import Sequelize from 'sequelize';
import configDB from '../../config/db.config';

import Form from './form.model';

const env = process.env.NODE_ENV || 'development';
const config = configDB[env];
const models = [Form];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // this.connection = new Sequelize(databaseConfig);
    if (config.use_env_variable) {
      this.connection = new Sequelize(
        process.env[config.use_env_variable],
        config
      );
    } else {
      this.connection = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
      );
    }

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

// const basename = 'index.js';
// const db = {};

// let sequelize;

// fs.readdir(paths.models, (e, list) => {
//   list
//     .filter(file => {
//       return (
//         file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//       );
//     })
//     .forEach(file => {
//       // const model = sequelize.import(path.join(paths.models, file));
//       import(`./${file}`).then(model => {
//         let entity = model.model(sequelize, Sequelize.DataTypes);
//         entity.init(db)
//         // console.log(entity.name);
//         // db[entity.name] = entity;
//         // console.log(sequelize['import'](model.model));
//       });
//       // console.log(model.name, 'MODEL');
//     });
// });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// console.log(db.Form, 'DBF1');

export default new Database();
