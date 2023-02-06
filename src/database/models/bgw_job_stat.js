import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class BgwJobStat extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'job_id'
    },
    lastStart: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now'),
      field: 'last_start'
    },
    lastFinish: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_finish'
    },
    nextStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'next_start'
    },
    lastSuccessfulFinish: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'last_successful_finish'
    },
    lastRunSuccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'last_run_success'
    },
    totalRuns: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_runs'
    },
    totalDuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_duration'
    },
    totalSuccesses: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_successes'
    },
    totalFailures: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_failures'
    },
    totalCrashes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'total_crashes'
    },
    consecutiveFailures: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'consecutive_failures'
    },
    consecutiveCrashes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'consecutive_crashes'
    }
  }, {
    sequelize,
    tableName: 'bgw_job_stat',
    schema: '_timescaledb_internal',
    timestamps: false,
    indexes: [
      {
        name: "bgw_job_stat_pkey",
        unique: true,
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
  }
}
