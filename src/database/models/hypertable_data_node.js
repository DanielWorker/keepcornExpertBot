import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class HypertableDataNode extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    hypertableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'hypertable_id'
    },
    nodeHypertableId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'node_hypertable_id'
    },
    nodeName: {
      type: "NAME",
      allowNull: false,
      field: 'node_name'
    },
    blockChunks: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'block_chunks'
    }
  }, {
    sequelize,
    tableName: 'hypertable_data_node',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "hypertable_data_node_hypertable_id_node_name_key",
        unique: true,
        fields: [
          { name: "hypertable_id" },
          { name: "node_name" },
        ]
      },
      {
        name: "hypertable_data_node_node_hypertable_id_node_name_key",
        unique: true,
        fields: [
          { name: "node_hypertable_id" },
          { name: "node_name" },
        ]
      },
    ]
  });
  }
}
