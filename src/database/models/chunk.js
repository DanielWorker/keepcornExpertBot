import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Chunk extends Model {
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
    schemaName: {
      type: "NAME",
      allowNull: false,
      field: 'schema_name'
    },
    tableName: {
      type: "NAME",
      allowNull: false,
      field: 'table_name'
    },
    compressedChunkId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'compressed_chunk_id'
    },
    dropped: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'chunk',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "chunk_compressed_chunk_id_idx",
        fields: [
          { name: "compressed_chunk_id" },
        ]
      },
      {
        name: "chunk_hypertable_id_idx",
        fields: [
          { name: "hypertable_id" },
        ]
      },
      {
        name: "chunk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chunk_schema_name_table_name_key",
        unique: true,
        fields: [
          { name: "schema_name" },
          { name: "table_name" },
        ]
      },
    ]
  });
  }
}
