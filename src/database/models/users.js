import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_email_unique"
    },
    emailVerifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'email_verified_at'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rememberToken: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'remember_token'
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'last_name'
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "users_email_unique",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_user_id_uindex",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
