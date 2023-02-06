import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CustomerCategoryPoints extends Model {
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
    },
    points: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'customer_category_points',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_category_points_pk",
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
