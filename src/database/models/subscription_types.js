import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class SubscriptionTypes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscription_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "subscription_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
