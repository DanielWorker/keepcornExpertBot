/* eslint-disable no-undef */
import {Sequelize} from 'sequelize';
import SequelizeAuto from 'sequelize-auto';
import dotenv from 'dotenv';
import initModels from './models/init-models.js';
dotenv.config();

const options = {
  directory: './src/database/models',
  dialect: 'postgres',
  caseFile: 'l',
  caseModel: 'p',
  caseProp: 'c',
  lang: 'esm',
};
const config = {
  dialect: 'postgres',
  logging: false,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

export default class Queries {
  constructor() {
    this.connection = process.env.CONNECTION_TUNNEL;
    // this.connection = process.env.CONNECTION_MAIN;
    this.sequelize = new Sequelize(this.connection, config);
    this.autoModels = new SequelizeAuto(this.sequelize, null, null, options);
    this.model = initModels(this.sequelize);
  }

  async createExpert(firstName, lastName, username, userId) {
    return this.model.Experts.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      userId: userId
    });
  }

  async getExpert(userId) {
    return this.model.Experts.findOne({where: {userId: userId}});
  }

  async runAutoModels() {
    this.autoModels.run().then((data) => {
      console.log(data.tables); // table and field list
      console.log(data.foreignKeys); // table foreign key list
      console.log(data.indexes); // table indexes
      console.log(data.hasTriggerTables); // tables that have triggers
      console.log(data.relations); // relationships between models
      console.log(data.text); // text of generated models
    });
  }
}