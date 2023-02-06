import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class HypertableCompression extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    attname: {
      type: "NAME",
      allowNull: false
    },
    compressionAlgorithmId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'compression_algorithm_id'
    },
    segmentbyColumnIndex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'segmentby_column_index'
    },
    orderbyColumnIndex: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'orderby_column_index'
    },
    orderbyAsc: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'orderby_asc'
    },
    orderbyNullsfirst: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'orderby_nullsfirst'
    }
  }, {
    sequelize,
    tableName: 'hypertable_compression',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "hypertable_compression_hypertable_id_orderby_column_index_key",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "orderby_column_index" },
        ]
      },
      {
        name: "hypertable_compression_hypertable_id_segmentby_column_index_key",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "segmentby_column_index" },
        ]
      },
      {
        name: "hypertable_compression_pkey",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "attname" },
        ]
      },
    ]
  });
  }
}
