import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class JobTransactions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    jobId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'job_id'
    },
    userIdFrom: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id_from'
    },
    userIdTo: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'user_id_to'
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    typeId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'type_id'
    },
    jobDayId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'job_day_id'
    }
  }, {
    sequelize,
    tableName: 'job_transactions',
    schema: 'public',
    timestamps: true
  });
  }
}
