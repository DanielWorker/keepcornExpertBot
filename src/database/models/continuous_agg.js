import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ContinuousAgg extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    matHypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'mat_hypertable_id'
    },
    rawHypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'raw_hypertable_id'
    },
    userViewSchema: {
      type: "NAME",
      allowNull: false,
      field: 'user_view_schema'
    },
    userViewName: {
      type: "NAME",
      allowNull: false,
      field: 'user_view_name'
    },
    partialViewSchema: {
      type: "NAME",
      allowNull: false,
      field: 'partial_view_schema'
    },
    partialViewName: {
      type: "NAME",
      allowNull: false,
      field: 'partial_view_name'
    },
    bucketWidth: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'bucket_width'
    },
    directViewSchema: {
      type: "NAME",
      allowNull: false,
      field: 'direct_view_schema'
    },
    directViewName: {
      type: "NAME",
      allowNull: false,
      field: 'direct_view_name'
    },
    materializedOnly: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'materialized_only'
    },
    finalized: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'continuous_agg',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "continuous_agg_partial_view_schema_partial_view_name_key",
        unique: true,
        fields: [
          { name: "partial_view_schema" },
          { name: "partial_view_name" },
        ]
      },
      {
        name: "continuous_agg_pkey",
        unique: true,
        fields: [
          { name: "mat_hypertable_id" },
        ]
      },
      {
        name: "continuous_agg_raw_hypertable_id_idx",
        fields: [
          { name: "raw_hypertable_id" },
        ]
      },
      {
        name: "continuous_agg_user_view_schema_user_view_name_key",
        unique: true,
        fields: [
          { name: "user_view_schema" },
          { name: "user_view_name" },
        ]
      },
    ]
  });
  }
}
