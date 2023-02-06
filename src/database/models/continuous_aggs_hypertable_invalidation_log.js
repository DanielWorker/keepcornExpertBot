import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ContinuousAggsHypertableInvalidationLog extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    lowestModifiedValue: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'lowest_modified_value'
    },
    greatestModifiedValue: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'greatest_modified_value'
    }
  }, {
    sequelize,
    tableName: 'continuous_aggs_hypertable_invalidation_log',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "continuous_aggs_hypertable_invalidation_log_idx",
        fields: [
          { name: "hypertable_id" },
          { name: "lowest_modified_value" },
        ]
      },
    ]
  });
  }
}
