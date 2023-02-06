import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomerTaskMessages extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer_profile_tasks',
        key: 'id'
      },
      field: 'task_id'
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'task_message_types',
        key: 'id'
      },
      field: 'type_id'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customer_task_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_task_messages_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
