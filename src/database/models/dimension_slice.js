import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class DimensionSlice extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dimensionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'dimension_id'
    },
    rangeStart: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'range_start'
    },
    rangeEnd: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'range_end'
    }
  }, {
    sequelize,
    tableName: 'dimension_slice',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "dimension_slice_dimension_id_range_start_range_end_key",
        unique: true,
        fields: [
          { name: "dimension_id" },
          { name: "range_start" },
          { name: "range_end" },
        ]
      },
      {
        name: "dimension_slice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
