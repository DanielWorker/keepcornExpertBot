import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BgwJob extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    applicationName: {
      type: "NAME",
      allowNull: false,
      field: 'application_name'
    },
    scheduleInterval: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'schedule_interval'
    },
    maxRuntime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max_runtime'
    },
    maxRetries: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max_retries'
    },
    retryPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'retry_period'
    },
    procSchema: {
      type: "NAME",
      allowNull: false,
      field: 'proc_schema'
    },
    procName: {
      type: "NAME",
      allowNull: false,
      field: 'proc_name'
    },
    owner: {
      type: "NAME",
      allowNull: false,
      defaultValue: "CURRENT_ROLE"
    },
    scheduled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'hypertable_id'
    },
    config: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bgw_job',
    schema: '_timescaledb_config',
    timestamps: false,
    indexes: [
      {
        name: "bgw_job_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "bgw_job_proc_hypertable_id_idx",
        fields: [
          { name: "proc_schema" },
          { name: "proc_name" },
          { name: "hypertable_id" },
        ]
      },
    ]
  });
  }
}
