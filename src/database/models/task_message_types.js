import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TaskMessageTypes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'task_message_types',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "task_message_types_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
