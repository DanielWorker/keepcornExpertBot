import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class RemoteTxn extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    dataNodeName: {
      type: "NAME",
      allowNull: true,
      field: 'data_node_name'
    },
    remoteTransactionId: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'remote_transaction_id'
    }
  }, {
    sequelize,
    tableName: 'remote_txn',
    schema: '_timescaledb_catalog',
    timestamps: false,
    indexes: [
      {
        name: "remote_txn_data_node_name_idx",
        fields: [
          { name: "data_node_name" },
        ]
      },
      {
        name: "remote_txn_pkey",
        unique: true,
        fields: [
          { name: "remote_transaction_id" },
        ]
      },
    ]
  });
  }
}
