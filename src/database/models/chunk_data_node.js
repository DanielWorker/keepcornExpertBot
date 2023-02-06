import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ChunkDataNode extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    nodeChunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'node_chunk_id'
    },
    nodeName: {
      type: "NAME",
      allowNull: false,
      field: 'node_name'
    }
  }, {
    sequelize,
    tableName: 'chunk_data_node',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "chunk_data_node_chunk_id_node_name_key",
        unique: true,
        fields: [
          { name: "chunk_id" },
          { name: "node_name" },
        ]
      },
      {
        name: "chunk_data_node_node_chunk_id_node_name_key",
        unique: true,
        fields: [
          { name: "node_chunk_id" },
          { name: "node_name" },
        ]
      },
    ]
  });
  }
}
