import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ContinuousAggsInvalidationThreshold extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    watermark: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'continuous_aggs_invalidation_threshold',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "continuous_aggs_invalidation_threshold_pkey",
        unique: true,
        fields: [
          { name: "hypertable_id" },
        ]
      },
    ]
  });
  }
}
