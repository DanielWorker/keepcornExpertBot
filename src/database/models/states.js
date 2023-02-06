import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class States extends Model {
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
      allowNull: true,
      field: 'user_id'
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    messagesId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'messages_id'
    },
    taskManagerId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'task_manager_id'
    }
  }, {
    sequelize,
    tableName: 'states',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "states_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "states_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "states_user_id_uindex",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
