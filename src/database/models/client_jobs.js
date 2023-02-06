import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ClientJobs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    chatId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'chats',
        key: 'chat_id'
      },
      field: 'chat_id'
    },
    clientId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'clients',
        key: 'tg_id'
      },
      field: 'client_id'
    },
    connectedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'connected_at'
    },
    disconnectedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'disconnected_at'
    }
  }, {
    sequelize,
    tableName: 'client_jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "client_jobs_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
