import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ChunkIndex extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    indexName: {
      type: "NAME",
      allowNull: false,
      field: 'index_name'
    },
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    hypertableIndexName: {
      type: "NAME",
      allowNull: false,
      field: 'hypertable_index_name'
    }
  }, {
    sequelize,
    tableName: 'chunk_index',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "chunk_index_chunk_id_index_name_key",
        unique: true,
        fields: [
          { name: "chunk_id" },
          { name: "index_name" },
        ]
      },
      {
        name: "chunk_index_hypertable_id_hypertable_index_name_idx",
        fields: [
          { name: "hypertable_id" },
          { name: "hypertable_index_name" },
        ]
      },
    ]
  });
  }
}
