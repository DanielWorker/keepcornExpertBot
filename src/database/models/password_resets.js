import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class PasswordResets extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'password_resets',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "password_resets_email_index",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
  }
}
