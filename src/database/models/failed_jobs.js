import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class FailedJobs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "failed_jobs_uuid_unique"
    },
    connection: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    queue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payload: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exception: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    failedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'failed_at'
    }
  }, {
    sequelize,
    tableName: 'failed_jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "failed_jobs_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "failed_jobs_uuid_unique",
        unique: true,
        fields: [
          { name: "uuid" },
        ]
      },
    ]
  });
  }
}
