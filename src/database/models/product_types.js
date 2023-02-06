import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class ProductTypes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_types_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_types_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
