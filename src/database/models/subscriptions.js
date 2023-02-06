import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Subscriptions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    subscriptionTypeId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'subscription_types',
        key: 'id'
      },
      field: 'subscription_type_id'
    },
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      field: 'is_active'
    },
    startingAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'starting_at'
    },
    finishingAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'finishing_at'
    }
  }, {
    sequelize,
    tableName: 'subscriptions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "subscriptions_pk",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
