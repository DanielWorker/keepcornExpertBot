import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BgwPolicyChunkStats extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'job_id'
    },
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    numTimesJobRun: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'num_times_job_run'
    },
    lastTimeJobRun: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_time_job_run'
    }
  }, {
    sequelize,
    tableName: 'bgw_policy_chunk_stats',
    schema: '_timescaledb_internal',
    timestamps: false,
    indexes: [
      {
        name: "bgw_policy_chunk_stats_job_id_chunk_id_key",
        unique: true,
        fields: [
          { name: "job_id" },
          { name: "chunk_id" },
        ]
      },
    ]
  });
  }
}
