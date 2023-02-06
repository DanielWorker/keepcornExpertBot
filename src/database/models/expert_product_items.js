import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ExpertProductItems extends Model {
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
    },
    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'expert_products',
        key: 'id'
      },
      field: 'product_id'
    },
    takeTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'take_time'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'expert_product_items',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "expert_product_items_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
