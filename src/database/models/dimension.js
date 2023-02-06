import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Dimension extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    columnName: {
      type: "NAME",
      allowNull: false,
      field: 'column_name'
    },
    columnType: {
      type: "REGTYPE",
      allowNull: false,
      field: 'column_type'
    },
    aligned: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    numSlices: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'num_slices'
    },
    partitioningFuncSchema: {
      type: "NAME",
      allowNull: true,
      field: 'partitioning_func_schema'
    },
    partitioningFunc: {
      type: "NAME",
      allowNull: true,
      field: 'partitioning_func'
    },
    intervalLength: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'interval_length'
    },
    integerNowFuncSchema: {
      type: "NAME",
      allowNull: true,
      field: 'integer_now_func_schema'
    },
    integerNowFunc: {
      type: "NAME",
      allowNull: true,
      field: 'integer_now_func'
    }
  }, {
    sequelize,
    tableName: 'dimension',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "dimension_hypertable_id_column_name_key",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "column_name" },
        ]
      },
      {
        name: "dimension_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
