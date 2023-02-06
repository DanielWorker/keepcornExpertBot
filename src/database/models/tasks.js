import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Tasks extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    assistantId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'assistant_id'
    },
    expertId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'experts',
        key: 'user_id'
      },
      field: 'expert_id'
    },
    timekeeperId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'timekeeper_id'
    },
    isPaid: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      field: 'is_paid'
    },
    isComplete: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      field: 'is_complete'
    },
    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'paid_at'
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'started_at'
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'completed_at'
    },
    todoTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'todo_time'
    },
    factTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'fact_time'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    statusId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'statuses',
        key: 'id'
      },
      field: 'status_id'
    },
    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      },
      field: 'category_id'
    },
    clickupId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'clickup_id'
    },
    tgUuid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tg_uuid'
    },
    keeperMessageId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'keeper_message_id'
    },
    clientRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'client_rate'
    },
    expertRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'expert_rate'
    },
    poolMessagesId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'pool_messages_id'
    },
    chatBotId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'chat_bot_id'
    },
    clarifiedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    offeredAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    salary: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    curatorMessagesId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'curator_messages_id'
    },
    offerRate: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      field: 'offer_rate'
    }
  }, {
    sequelize,
    tableName: 'tasks',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "tasks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
