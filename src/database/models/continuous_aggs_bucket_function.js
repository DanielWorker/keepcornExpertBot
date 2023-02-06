import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ContinuousAggsBucketFunction extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    matHypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mat_hypertable_id'
    },
    experimental: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bucketWidth: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'bucket_width'
    },
    origin: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timezone: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'continuous_aggs_bucket_function',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "continuous_aggs_bucket_function_pkey",
        unique: true,
        fields: [
          { name: "mat_hypertable_id" },
        ]
      },
    ]
  });
  }
}
