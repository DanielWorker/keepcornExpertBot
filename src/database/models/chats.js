import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Chats extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    chatId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Created chat id",
      primaryKey: true,
      field: 'chat_id'
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      field: 'is_active'
    }
  }, {
    sequelize,
    tableName: 'chats',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "chats_pkey",
        unique: true,
        fields: [
          { name: "chat_id" },
        ]
      },
    ]
  });
  }
}
