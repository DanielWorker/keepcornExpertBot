import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TaskMessages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    taskId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'task_id'
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'role_id'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messageTypeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
      field: 'message_type_id'
    },
    href: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    extension: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'task_messages',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "task_messages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
