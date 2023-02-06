import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class UserRoles extends Model {
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_roles_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
