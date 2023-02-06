import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomerCategories extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'clients_profiles',
        key: 'user_id'
      },
      field: 'user_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ca_categories',
        key: 'id'
      },
      field: 'category_id'
    }
  }, {
    sequelize,
    tableName: 'customer_categories',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_categories_pk",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "category_id" },
        ]
      },
    ]
  });
  }
}
