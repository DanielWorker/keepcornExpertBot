import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class TransactionTypes extends Model {
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
    tableName: 'transaction_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transaction_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
