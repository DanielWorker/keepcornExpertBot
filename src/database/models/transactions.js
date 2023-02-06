import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Transactions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'user_id'
    },
    currency: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    providerChargeId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'provider_charge_id'
    },
    telegramChargeId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'telegram_charge_id'
    },
    taskId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'task_id'
    },
    typeId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'transaction_types',
        key: 'id'
      },
      field: 'type_id'
    }
  }, {
    sequelize,
    tableName: 'transactions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "transactions_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "transactions_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
