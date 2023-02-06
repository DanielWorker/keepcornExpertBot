import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ContinuousAggsMaterializationInvalidationLog extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    materializationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'materialization_id'
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
    tableName: 'continuous_aggs_materialization_invalidation_log',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "continuous_aggs_materialization_invalidation_log_idx",
        fields: [
          { name: "materialization_id" },
          { name: "lowest_modified_value" },
        ]
      },
    ]
  });
  }
}
