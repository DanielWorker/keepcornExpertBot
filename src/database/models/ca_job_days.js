import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CaJobDays extends Model {
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
      references: {
        model: 'assistant_jobs',
        key: 'id'
      },
      field: 'job_id'
    },
    startingAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'starting_at'
    },
    finishingAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'finishing_at'
    },
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      field: 'is_active'
    }
  }, {
    sequelize,
    tableName: 'ca_job_days',
    schema: 'public',
    timestamps: false
  });
  }
}
