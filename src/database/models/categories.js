import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Categories extends Model {
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
    },
    chatId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: -1001655876170,
      field: 'chat_id'
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "https:\/\/t.me\/+hJuHNbYap5liNTg5"
    }
  }, {
    sequelize,
    tableName: 'categories',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "categories_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
