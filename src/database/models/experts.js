import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Experts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    techItems: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'tech_items'
    },
    internetSpeed: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'internet_speed'
    },
    crypto: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    messagesId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'messages_id'
    }
  }, {
    sequelize,
    tableName: 'experts',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "experts_pk",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "experts_tg_id_uindex",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
