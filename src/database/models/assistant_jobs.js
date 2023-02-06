import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class AssistantJobs extends Model {
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
    assistantId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'assistants',
        key: 'tg_id'
      },
      field: 'assistant_id'
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
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      field: 'is_active'
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'started_at'
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'finished_at'
    },
    connectedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'connected_at'
    },
    rejectedBy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'rejected_by'
    }
  }, {
    sequelize,
    tableName: 'assistant_jobs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "assistant_jobs_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
