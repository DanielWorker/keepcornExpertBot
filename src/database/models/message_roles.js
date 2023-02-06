import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class MessageRoles extends Model {
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
    tableName: 'message_roles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
