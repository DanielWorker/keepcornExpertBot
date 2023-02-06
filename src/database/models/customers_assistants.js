import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomersAssistants extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'customer_id'
    },
    assistantId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'assistant_id'
    },
    isActive: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'is_active'
    }
  }, {
    sequelize,
    tableName: 'customers_assistants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customers_assistants_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
