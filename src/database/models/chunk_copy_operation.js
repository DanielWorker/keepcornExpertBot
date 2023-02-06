import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ChunkCopyOperation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    operationId: {
      type: "NAME",
      allowNull: false,
      field: 'operation_id'
    },
    backendPid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'backend_pid'
    },
    completedStage: {
      type: "NAME",
      allowNull: false,
      field: 'completed_stage'
    },
    timeStart: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now'),
      field: 'time_start'
    },
    chunkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'chunk_id'
    },
    compressChunkName: {
      type: "NAME",
      allowNull: false,
      field: 'compress_chunk_name'
    },
    sourceNodeName: {
      type: "NAME",
      allowNull: false,
      field: 'source_node_name'
    },
    destNodeName: {
      type: "NAME",
      allowNull: false,
      field: 'dest_node_name'
    },
    deleteOnSourceNode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'delete_on_source_node'
    }
  }, {
    sequelize,
    tableName: 'chunk_copy_operation',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "chunk_copy_operation_pkey",
        unique: true,
        fields: [
          { name: "operation_id" },
        ]
      },
    ]
  });
  }
}
