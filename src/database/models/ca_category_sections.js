import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class CaCategorySections extends Model {
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ca_categories',
        key: 'id'
      },
      field: 'category_id'
    }
  }, {
    sequelize,
    tableName: 'ca_category_sections',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ca_category_sections_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
